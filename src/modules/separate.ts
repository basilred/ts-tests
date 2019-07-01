/// <reference path="personnel.ts" />

export default function() {
  // Пространства имён
  ((sectionName: string) => {
    console.log(`\n${sectionName}`);

    const tom = new Personnel2.Employee('Tom')
    console.log(tom.name);

    const sam = new Personnel2.Manager('Sam');
    console.log(sam.name);

  })('Пространство имен в отдельном файле');
};
