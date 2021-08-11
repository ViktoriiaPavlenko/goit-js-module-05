// -------- CONSTRUCTOR

function Constructor(prop1, prop2) {
    this.prop1 = 'prop1'
    this.prop2 = 'prop2'
}

const newObj = new Constructor()

// ИСХОДНАЯ ФУНКЦИЯ
const User = function (login, password) {
    this.login = login
    this.password = password

    this.showLogin = function () {
        console.log(this.login);
    }
}

User.prototype.showPassword = function () {
    console.log(this.password);
}

const user1 = new User('user', 'qwe')
console.log(user1);

console.log(User.prototype);

const user2 = new User('user2', 'qwe')
console.log(user2);

// НОВАЯ ФУНКЦИЯ НА БАЗЕ ИСХОДНОЙ
function NewUser(name, age, login, password) {
  User.call(this, login, password)
  this.name = name
  this.age = age
}

// Перезаписываем prototype новой функции
// и привязываем в него prototype из исходной функции
NewUser.prototype = Object.create(User.prototype)
NewUser.prototype.constructor = NewUser

// дoбавляем новые методы в prototype новой функции
NewUser.prototype.updateAge = function () {
  return (this.age += 1)
}

// создаем экземпляр из новой функции
const newUser1 = new NewUser('Igor', 17, 'new user1', 'qwerty')
console.log(newUser1)

newUser1.showLogin()
newUser1.showPassword()
console.log(newUser1.updateAge());






// ----
function Post(title = 'title', text = 'Lorem ipsum dolor...') {
  this.title = title
  this.text = text
}
Post.prototype.updateTitle = function (value) {
  return (this.title = value)
}
const post1 = new Post()
console.log(post1)

// ----
function NewPost(imageUrl = '', title, text) {
  Post.apply(this, [title, text])
  this.image = imageUrl
}

console.log(NewPost.prototype)

NewPost.prototype = Object.create(Post.prototype)
NewPost.prototype.constructor = NewPost

NewPost.prototype.updateImage = function (url) {
  return (this.image = url)
}

const newPost1 = new NewPost(
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Alone_in_Space_-_Astronomers_Find_New_Kind_of_Planet.jpg/1024px-Alone_in_Space_-_Astronomers_Find_New_Kind_of_Planet.jpg',
)
console.log(newPost1)

// ----
function BestPost(author, imageUrl, title, text) {
  NewPost.call(this, imageUrl, title, text)
  this.author = author
}
BestPost.prototype = Object.create(NewPost.prototype)
BestPost.prototype.constructor = BestPost

BestPost.prototype.showAuthor = function () {
  console.log(this.author)
}

// new
const bestPost1 = new BestPost('Anatoliy')
console.log(bestPost1)
bestPost1.showAuthor()
bestPost1.updateImage('https://')
bestPost1.updateTitle('My new Post about Js')





