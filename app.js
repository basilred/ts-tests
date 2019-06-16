var el = this.document.getElementById('content');
var User = /** @class */ (function () {
    function User(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    User.prototype.getFullName = function () {
        return this.name + " " + this.age;
    };
    return User;
}());
var tom = new User('Tom', 25);
el.innerHTML = "Name: " + tom.name + ", age: " + tom.age;
var x = 10;
var hello = 'Hello, world';
var isValid = true;
