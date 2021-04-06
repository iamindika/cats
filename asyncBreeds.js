const fs = require('fs');

const breedDetailsFromFile = (breed, outputBreedDetails) =>  {
//  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
//    console.log("In readFile's Callback: it has the data:");
    
    if (!error) outputBreedDetails(data);
    else outputBreedDetails(undefined);
  });
  
};

module.exports = breedDetailsFromFile;