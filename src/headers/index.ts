export default function() {
  ((sectionName: string) => {
    console.log(`\n${sectionName}`);

    class Utility {
      static displayGlobalVar() {
        // console.log(globalVar);
        display();

        for (let i = 0; i < points.length; i++ ) {
          console.log(`Точка с координатами X=${points[i].X}, Y=${points[i].Y}`);
        }
      }
    }

    window.onload = () => {
      Utility.displayGlobalVar();
    };

  })('Заголовочные файлы');
};
