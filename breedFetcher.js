const needle = require('needle');
const apiURL = 'https://api.thecatapi.com/v1/breeds/search';

// Edge case for error message
// const apiURL = 'https://invalid-api-url.com/v1/breeds/search';

const breed = process.argv[2];

const breedFetcher = (breed) => {
  const url = `${apiURL}?q=${breed}`;

  needle.get(url, (error, response) => { // returns error messages (e.g invalid URL)
    if (error) {
      console.error(error.message);
      return;
    }
    const body = response.body;
    
    if (Array.isArray(body) && body.length > 0) { // Checks if there's data and access first entry
      console.log(body[0].description);
    } else {
      console.log('Breed not found or description not available.');
    }
    console.log(typeof body);
  });
};
if (breed) { //access function to command line
  breedFetcher(breed);
}