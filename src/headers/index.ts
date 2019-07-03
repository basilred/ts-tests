export default function() {
  ((sectionName: string) => {
    console.log(`\n${sectionName}`);

    class Utility {
      static displayGlobalVar() {
        // console.log(globalVar);
        display();
      }
    }

    window.onload = () => {
      Utility.displayGlobalVar();
    };

  })('Заголовочные файлы');
};
