export default function() {
  // ((sectionName: string) => {
  //   console.log(`\n${sectionName}`);
  //
  //   function formatName(target: Object, propertyKey: string) {
  //     let _val = this[propertyKey]; // получаем значение свойства
  //
  //     // геттер
  //     const getter = function() {
  //       return `Mr./Ms.${_val}`;
  //     }
  //
  //     // сеттер
  //     const setter = function(newVal) {
  //       _val = newVal;
  //     }
  //
  //     // удаляем свойство
  //     if (delete this[propertyKey]) {
  //
  //       // и создаём новое свойство с геттером и сеттером
  //       Object.defineProperty(target, propertyKey, {
  //         get: getter,
  //         set: setter,
  //       });
  //     }
  //   }
  //
  //   class User {
  //
  //     @formatName
  //     name: string;
  //
  //     constructor(name: string) {
  //       this.name = name;
  //     }
  //
  //     print(): void {
  //       console.log(this.name);
  //     }
  //   }
  //
  //   const tom = new User('Tom');
  //   tom.print();
  //
  // })('Декораторы свойств');


  ((sectionName: string) => {
    console.log(`\n${sectionName}`);

    function validator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      const oldSet = descriptor.set;

      descriptor.set = function(value: string) {
        if (value === 'admin') {
          throw new Error('Invalid value');
        }

        oldSet.call(this, value);
      }
    }

    class User {
      constructor(private _name: string) {}

      @validator
      public set name(value: string) {
        this._name = value;
      }

      public get name(): string {
        return this._name;
      }
    }

    const tom = new User('Tom');
    try {
      tom.name = 'admin';
    } catch (e) {
      console.log(e.message);
    }
    
    console.log(tom.name);

  })('Декоратор метода доступа');
}
