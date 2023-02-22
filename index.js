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

const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return planet['koi_disposition'] === 'CONFIRMED' && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && planet['koi_prad'] < 1.6;
}

const result = [];

fs.createReadStream('./plant_project/kepler_data.csv')
  .pipe(parse({
    comment: '#',
    columns: true
  }))
  .on('data', (data) => {
    if (isHabitablePlanet(data)) {
    habitablePlanets.push(data)
  }
  })
  .on('error', (error) => {
  console.log(error)
  })
  .on('end', () => {
    console.log('End of file')
    console.log(habitablePlanets)
  })


// parse();