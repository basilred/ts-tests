export default function() {
  // Функции
  console.log('\nФункции');

  // Определение функции
  function add(a: number, b: number): number {
    return a + b;
  }

  // использование
  const res = add(1, 2);
  console.log(res);

  // Необязательные параметры
  function getName(firstName: string, lastName?: string) {
    return lastName ? `${firstName} ${lastName}` : `${firstName}`;
  }

  let name1 = getName('Иван', 'Кузнецов');
  console.log(name1);
  let name2 = getName('Vasya');
  console.log(name2);
  // let name2 = getName("Иван", "Михайлович", "Кузнецов");  //ошибка, много параметров

  // параметры по умолчанию
  function defaultSurname(): string {
    return 'Smith';
  }

  function getName2(firstName: string, lastName: string = defaultSurname()) {
    return `${firstName} ${lastName}`;
  }

  console.log(getName2('Vasya'));


  // Неопределенный набор параметров
  function addNumbers(firstNumber: number, ...numberArray: number[]): number {

    let result = firstNumber;

    for (let i = 0; i < numberArray.length; i += 1) {
      result += numberArray[i];
    }

    return result;
  }

  console.log(`Add numbers 3, 7, 8: ${addNumbers(3, 7, 8)}`); // 18
  console.log(`Add numbers 3, 7, 8, 9, 4: ${addNumbers(3, 7, 8, 9, 4)}`); // 31


  // Тип Функции
  function sum(x: number, y: number): number {
    return x + y;
  }

  function subtract(x: number, y: number): number {
    return x - y;
  }

  let op: (x: number, y: number) => number;

  op = sum;
  console.log(op(2, 4)); // 6

  op = subtract;
  console.log(subtract(6, 4)); // 2


  // Функции обратного вызова
  function mathOp(x: number, y: number, operation: (a: number, b: number) => number): number {
    const result = operation(x, y);

    return result;
  }

  let operationFunc: (a: number, b: number) => number;
  operationFunc = function (a: number, b: number): number {
    return a + b;
  };
  console.log( mathOp(6, 3, operationFunc) ); // 9

  operationFunc = function (a: number, b: number): number {
    return a * b;
  };
  console.log( mathOp(6, 3, operationFunc) ); // 18


  // Стрелочные функции
  function arrowMathOp(x: number, y: number, operation: (a: number, b: number) => number): number {
    return operation(x, y);
  }

  // Используем стрелочные функции вместо предварительного объявления функций
  console.log(arrowMathOp(2, 3, (x, y) => x + y)); // 5
  console.log(arrowMathOp(2, 3, (x, y) => x ** y)); // 8
}
