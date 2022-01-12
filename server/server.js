// отличие сокетов от http когда сокет отправляет запрос, он не ждет ответа, а хттп ждет ответа, поэтому сокет работает быстрее


const express = require('express'); //подключаем express
const app = express(); // создаем express приложение
const server = require('http').createServer(app) // создаем http сервер
const { Server } = require("socket.io");
const io = new Server(server);
// хранит информацию о сокетах и сервере

const rooms = new Map([]);

app.use(express.json()) //позволяет считывать из запроса пост данные

app.get('/messages/:id', (req, res) => { //получаем запрос с id комнаты
    const { id } = req.params;
    const data = { // создаем объект в котором будут храниться пользователи комнаты и их сообщения
        users: [...rooms.get(id).get("users").values()],
        msg: [...rooms.get(id).get("messages").values()]
    };
    res.json(data)
})

app.post("/messages", (req, res) => { // прикрутить к регистрации
    const body = req.body;
    if (!rooms.has(body.roomId)) { // если такой комнаты не существует то создаем
        rooms.set(body.roomId, new Map([ // под id комнаты будет храниться коллекция поьзователетей и сообщений
            ["users", new Map()],
            ["messages", []]
        ]))
    }
    res.send("no errors!")
})


io.on("connection", socket => {
    //когда произошло подключение пользователя к сокетам
    // у каждого пользователя свой сокет
    console.log("user connected");
    socket.on("ROOM:JOIN", data => { // функция выполнится если клиентская часть отпарвит именно такой action
        console.log(data);
        socket.join(data.roomId);
        rooms.get(data.roomId).get("users").set(socket.id, data.userName) // сохранение в бд(позже попытаюсь самостоятельно прикрутить какую то бд)
        const users = [...rooms.get(data.roomId).get("users").values()]; // получаем список пользователей
        socket.to(data.roomId).emit("ROOM:JOINED", users) //сначала "заходим" в команту, а затем отправляем сокет запрос всем кроме нас юзерам комнаты
    })
    socket.on("disconnect", () => {
        rooms.forEach((value, roomId) => {
            if (value.get("users").delete(socket.id)) { // удаляем значение , если удалился то true
                const users = [...value.get("users").values()]; // получаем новый список пользователей
                socket.broadcast.to(roomId).emit("ROOM:LEAVE", users)
            }
        });
    })

    socket.on("ROOM:NEW_MESSAGE", ({ roomId, userName, msg }) => {
        const msgData = {
            userName,
            msg,
            roomId,
        }
        rooms.get(roomId).get("messages").push(msgData)
        socket.broadcast.to(roomId).emit("ROOM:ADD_MESSAGE", msgData)
    })
})

server.listen(3000, err => {
    if (err) throw err;
    console.log("server ready");
})