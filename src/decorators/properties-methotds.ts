export default function() {
  ((sectionName: string) => {
    console.log(`\n${sectionName}`);

    function formatName(target: Object, propertyKey: string) {
      let _val = this[propertyKey]; // получаем значение свойства

      // геттер
      const getter = function() {
        return `Mr./Ms.${_val}`;
      }

      // сеттер
      const setter = function(newVal) {
        _val = newVal;
      }

      // удаляем свойство
      if (delete this[propertyKey]) {

        // и создаём новое свойство с геттером и сеттером
        Object.defineProperty(target, propertyKey, {
          get: getter,
          set: setter,
        });
      }
    }

    class User {

      @formatName
      name: string;

      constructor(name: string) {
        this.name = name;
      }

      print(): void {
        console.log(this.name);
      }
    }

    const tom = new User('Tom');
    tom.print();

  })('Декораторы свойств');
}
