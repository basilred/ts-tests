export default function() {
  // Миксины
  ((sectionName: string) => {
    console.log(`\n${sectionName}`);

    class Animal {
      feed(): void {
        console.log('Кормим животное');
      }
    }

    class Transport {
      speed: number = 0;
      move(): void {
        if (this.speed === 0) {
          console.log('Стоим на месте');
        } else if (this.speed > 0) {
          console.log(`Перемещаемся со скоростью ${this.speed} км/ч`);
        }
      }
    }

    class Horse implements Animal, Transport {
      speed: number = 0;
      feed: () => void;
      move: () => void;
    }

    function applyMixins(derivedCtor: any, baseCtors: any[]) {
      baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
          derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
      });
    }

    applyMixins(Horse, [Animal, Transport]);

    const pony: Horse = new Horse();
    pony.feed();
    pony.move();
    pony.speed = 4;
    pony.move();

  })('Миксины');
};
