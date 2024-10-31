const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

if (breedName) { //access function to command line
  fetchBreedDescription(breedName, (error, description) => {
    if (error) {
      console.log('Error fetch datails:', error);
    } else {
      console.log('Breed Description:', description);
    }
  });
}