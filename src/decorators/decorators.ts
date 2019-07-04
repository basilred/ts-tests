export default function() {
  ((sectionName: string) => {
    console.log(`\n${sectionName}`);

    function sealed(constructor: Function) {
      console.log('sealed decorator:');
      Object.seal(constructor);
      Object.seal(constructor.prototype);
    }

    @sealed
    class User {
      constructor(public name: string) {}
      print(): void {
        console.log(this.name);
      }
    }

    // будет ошибка, таким образом расширить объект уже нельзя
    try {
      Object.defineProperty(User, 'age', {
        value: 17
      });
    } catch {
      console.log('Свойство age нельзя добавить, так как объект стал нерасширяемым');
    }


    function logger<TFunction extends Function>(target: TFunction): TFunction {
      const newConstructor: Function = function(name: string) {
        console.log('Creating new instance');
        this.name = name;
        this.age = 23;
        this.print = function(): void {
          console.log(this.name, this.age);
        };
      };

      return <TFunction>newConstructor;
    }

    @logger
    class LoggerUser {
      constructor(public name: string) {}
      print(): void {
        console.log(this.name);
      }
    }

    const tom = new LoggerUser('Tom');
    tom.print();

  })('Декораторы');
}
