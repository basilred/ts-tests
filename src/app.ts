import types from './types';
import funcs from './funcs';
import oop from './oop';
import modules from './modules/index';

const el = window.document.getElementById('content');

class User {
  name: string;
  age: number;

  constructor(_name: string, _age: number) {
    this.name = _name;
    this.age = _age;
  }

  getFullName(): string {
    return `${this.name} ${this.age}`;
  }
}

const tom: User = new User('Tom', 25);
el.innerHTML = `Name: ${tom.name}, age: ${tom.age}`;


let x: number = 10;
let hello: string = 'Hello, world';
let isValid: boolean = true;

types();

funcs();

oop();

modules.namespaces();
modules.separate();
