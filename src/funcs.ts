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
}
