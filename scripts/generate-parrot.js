const testFolder = './public/parrots';
const fs = require('fs');
const uuid = require('uuid');


let parrotArmy = fs.readdirSync(testFolder, {withFileTypes: true})
    .map(item => (
        {
         "src": `parrots/${item.name}`,
         "className":  "Parrot",
         "dataSrc": `parrots/${item.name}`,
          "id": uuid.v4(),
          "visible": false
        })
    )

console.log('Writing parrot army data');
fs.writeFileSync('./src/data/birds.json',JSON.stringify(parrotArmy,null,2));

console.log(parrotArmy);