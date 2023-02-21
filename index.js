const axios = require('axios');

// axios.get('http://www.google.com')
//   .then((response => console.log(response)))


const getResponse = async () => {
  try {
    const response = await axios.get('http://www.facebook.com')

    console.log(response)

  } catch (error) {
    console.log(error)
  }
};

getResponse()