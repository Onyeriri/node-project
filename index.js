// const axios = require('axios');

// // axios.get('http://www.google.com')
// //   .then((response => console.log(response)))


// const getResponse = async () => {
//   try {
//     const response = await axios.get('http://www.facebook.com')

//     console.log(response)

//   } catch (error) {
//     console.log(error)
//   }
// };

// getResponse()

const parse = require('csv-parse');
const fs = require('fs');

const data = [];

fs.createReadStream('./plant_project/kepler_data.csv')
  .on('data', (chunk) => {
  data.push(chunk)
  })
  .on('error', (error) => {
  console.log(error)
  })
  .on('end', () => {
  console.log('End of file')
  })

// console.log(data)
// parse();