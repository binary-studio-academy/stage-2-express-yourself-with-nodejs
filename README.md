# Codebase of ["Express yourself with Node.js" lecture](https://binary-studio-academy.github.io/stage-2/lectures/express-yourself-with-nodejs/)

## How to

#### How to start the code

1. `git clone https://github.com/binary-studio-academy/stage-2-express-yourself-with-nodejs.git`
2. `cd stage-2-express-yourself-with-nodejs`
3. `npm i`
4. `npm start`
5. By default server running on [localhost:3000](http://localhost:3000)

#### Another examples
Here are a few branches for blocks and you can switch between to take a look on code samples:
- [nodejs-basics](https://github.com/binary-studio-academy/stage-2-express-yourself-with-nodejs/tree/nodejs-basics)
- [expressjs-basics](https://github.com/binary-studio-academy/stage-2-express-yourself-with-nodejs/tree/expressjs-basics)
- [project structure](https://github.com/binary-studio-academy/stage-2-express-yourself-with-nodejs)


## Hometask
<blockquote>
  <details>
    <summary>🇺🇦-translation</summary>

#### Завдання

Написати веб-сервер на **Node.js** + **Express.js**, який може обробляти такі запити:
- **GET**: _/user_  
  отримання масиву всіх користувачів

- **GET**: _/user/:id_  
  отримання одного користувача по ID

- **POST**: _/user_  
  створення користувача за даними з тіла запиту

- **PUT**: _/user/:id_  
  оновлення користувача за даними з тіла запиту

- **DELETE**: _/user/:id_  
  видалення одного користувача по ID


#### Деталі

1. Можна написати все з нуля, можна **fork**-нути код лекції з GitHub і дописати його, можна використати [express-generator](https://www.npmjs.com/package/express-generator) і розширити його API, робіть як вам зручніше, будь-який з підходів корисний для вас.
2. Список користувачів в форматі JSON можна взяти [тут](https://gist.github.com/alexandrtovmach/3fcf6c0819d6830e21b5f3c117c2c5aa) або ж згенерувати свій, наприклад через сервіс [mockaroo.com](https://mockaroo.com/).
3. Дані про користувачів можна зберігати у вигляді змінної або ж взяти на себе сміливість і спробувати попрацювати з файловою системою і зберігати їх в файл.
4. Подбайте про валідацію і перехоплення помилок. Чим менша ймовірність того, що я зможу зламати сервер відправляючи запити 😈, тим вище оцінка.

#### Завдання* (із зірочкою)

Зв'яжіть це завдання з попереднім по ES6. Проявіть фантазію і креатив, наприклад можна зробити файл з великою кількістю персонажів і запитувати їх з сервера, для меню вибору бійця. Також можна додати можливість редагування бійців, збереження історії бійок, видалення користувачів і т.д.

  </details>
  <details>
    <summary>🇷🇺-translation</summary>

#### Задание
Написать веб-сервер на **Node.js** + **Express.js**, который может обрабатывать следующие запросы:

- **GET**: _/user_  
  получение массива всех пользователей

- **GET**: _/user/:id_  
  получение одного пользователя по ID

- **POST**: _/user_  
  создание пользователя по данным передаваемым в теле запроса

- **PUT**: _/user/:id_  
  обновление пользователя по данным передаваемым в теле запроса

- **DELETE**: _/user/:id_  
  удаление одного пользователя по ID


#### Детали

1. Можно написать всё с нуля, можно **fork**-нуть код лекции с GitHub и дописать, можно использовать [express-generator](https://www.npmjs.com/package/express-generator) и расширить его API, делайте как вам удобнее, любой из подходов полезен.
2. Список пользователей в формате JSON можно взять [здесь](https://gist.github.com/alexandrtovmach/3fcf6c0819d6830e21b5f3c117c2c5aa) или же сгенерировать свой, например через сервис [mockaroo.com](https://mockaroo.com/).
3. Данные о пользователях можно хранить в виде переменной или же взять на себя смелость и попробовать поработать с файловой системой и сохранять их в файл.
4. Позаботьтесь о валидации и отлове ошибок. Чем меньше вероятность того, что я смогу сломать сервер отправляя запросы 😈, тем выше оценка.


#### Задание*

Свяжите это задание с предыдущим по ES6. Проявите фантазию и креатив, например можно сделать файл с большим количеством персонажей и запрашивать их с сервера, для меню выбора бойца. Также можно добавить возможность редактирования бойцов, сохранения истории драк, удаление пользователей и т.д.


  </details>
</blockquote>

### Main task

Write a web server using **Node.js** + **Express.js** that can handle the list of following requests:

- **GET**: _/user_  
  get an array of all users

- **GET**: _/user/:id_  
  get one user by ID

- **POST**: _/user_  
  create user according to the data from the request body

- **PUT**: _/user/:id_  
  update user according to the data from the request body

- **DELETE**: _/user/:id_  
  delete one user by ID

#### Details

1. You can write everything from scratch, or **fork** a lecture code and extend it, or use [express-generator](https://www.npmjs.com/package/express-generator) and extend it. Do it as you like, any of the approaches is useful.
2. You can take the list of users in JSON format [here](https://gist.github.com/alexandrtovmach/3fcf6c0819d6830e21b5f3c117c2c5aa), or generate your own with the [mockaroo.com](https://mockaroo.com/).
3. User data can be stored as a variable, or you can take a risk to try to work with the file system and save it to a file.
4. Take care of validation and error handling. The less likely that I can break the server by sending requests, the higher the score.

#### Additional task

Link this task with previous of [ES6](https://binary-studio-academy.github.io/stage-2/lectures/es6-for-everyone/). Show your imagination and creativity! For example, you can make a file with a large number of characters and request it from the server for the fighter selection menu. You can also add the ability to edit fighters, save the history of fights, delete users, etc.