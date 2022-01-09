// отличие сокетов от http когда сокет отправляет запрос, он не ждет ответа, а хттп ждет ответа, поэтому сокет работает быстрее


const express = require('express'); //подключаем express
const app = express(); // создаем express приложение
const server = require('http').createServer(app) // создаем http сервер
const { Server } = require("socket.io");
const io = new Server(server);
// хранит информацию о сокетах и сервере

const rooms = new Map([]);

app.use(express.json()) //позволяет считывать из запроса пост данные


app.post("/messages", (req, res) => {
    const body = req.body;
    if (!rooms.has(body.roomId)) {
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
})

server.listen(3000, err => {
    if (err) throw err;
    console.log("server ready");
})