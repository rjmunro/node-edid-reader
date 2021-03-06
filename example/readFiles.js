'use strict';

const EdidReader = require('../');

const edidReader = new EdidReader();

edidReader
  .loadFile(`${__dirname}/../samples/01.txt`)
  .then(() => edidReader.loadFile(`${__dirname}/../samples/02.txt`))
  .then(() => edidReader.loadFile(`${__dirname}/../samples/03.txt`))
  .then(() => edidReader.loadFile(`${__dirname}/../samples/04.txt`))
  .then(() => {
    console.log('==========================');
    edidReader.monitors.forEach((monitor) => {
      console.log(`EISA :   ${monitor.eisaId}`);
      console.log(`Manuf. : ${monitor.vendor} (${monitor.vendorFullName})`);
      console.log(`Code :   ${monitor.productCode}`);
      console.log(`Serial : ${monitor.serialNumber}`);
      console.log(`Model :  ${monitor.modelName}`);
      console.log('==========================');
    });
  });
