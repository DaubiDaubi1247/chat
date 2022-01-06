const express = require('express'); //подключаем express
const app = express(); // создаем express приложение
const socket = require('socket.io'); // подключаем сокеты
const server = require('http').createServer(app) // создаем http сервер
const io = socket(server) // хранит информацию о сокетах и сервере

const rooms = new Map([]);

app.use(express.json()) //позволяет считывать из запроса пост данные

app.get("/messages", () => {
    console.log("111");
})



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
})

server.listen(3000, err => {
    if (err) throw err;
    console.log("server ready");
})