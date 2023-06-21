const axios = require('axios');

async function fetchUniqueNumbers(url) {
  try {
    const response = await axios.get(url);
    if (response.data && Array.isArray(response.data.numbers)) {
      return response.data.numbers;
    }
  } catch (error) {
    console.error(`Failed to fetch numbers from the url ${url}:`, error.message);
  }
  return [];
}

async function mergeUniqueNumbers(urls) {
  const uniqueNumbers = new Set();

  const requests = urls.map(url => fetchUniqueNumbers(url));

  try {
    const responses = await Promise.all(requests);
    responses.forEach(numbers => {
      numbers.forEach(number => uniqueNumbers.add(number));
    });
  } catch (error) {
    console.error('Failed to fetch numbers:', error.message);
  }

  return Array.from(uniqueNumbers).sort((a, b) => a - b);
}

// Test case
const testURLs = [
  'http://104.211.219.98/numbers/primes',
  'http://104.211.219.98/numbers/fibo',
  'http://104.211.219.98/numbers/odd'
];

mergeUniqueNumbers(testURLs)
  .then(numbers => {
    console.log({ numbers });
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
