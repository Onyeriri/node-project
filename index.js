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

const {parse} = require('csv-parse');
const fs = require('fs');

const result = [];

fs.createReadStream('./plant_project/kepler_data.csv')
  .pipe(parse({
    comment: '#',
    columns: true
  }))
  .on('data', (data) => {
  result.push(data)
  })
  .on('error', (error) => {
  console.log(error)
  })
  .on('end', () => {
    console.log('End of file')
    console.log(result)
  })


// parse();