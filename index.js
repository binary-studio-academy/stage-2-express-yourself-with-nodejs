// импорт модуля "http"
const http = require('http');
// импорт модуля "fs"
const fs = require('fs');
const port = 3000;

// создание потока для записи в файл
const logFile = fs.createWriteStream('log.txt', { flags: 'a' });

// коллбек на каждый HTTP-запрос
const requestHandler = (request, response) => {
    console.log(request.url);
    // запись в файл
    logFile.write(`Запрос по адресу: ${request.url}\n`);
    response.end('Ping-Pong')
};

// создание HTTP-сервера
const server = http.createServer(requestHandler);

// начало прослушивания HTTP-сервера
server.listen(port, (err) => {
    if (err) {
        return console.log('Ошибочка вышла', err)
    }
    console.log(`Сервер запущен по адресу http://localhost:${port}`)
});