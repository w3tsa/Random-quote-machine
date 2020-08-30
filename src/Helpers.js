function random() {
  const rand = Math.floor(Math.random() * 102);
  return rand;
}

const API_KEY =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

async function getData() {
  const response = await fetch(API_KEY);
  const data = await response.json();
  const numb = random();
  return {
    data: data.quotes[numb].quote,
    author: data.quotes[numb].author
  };
}

function Choice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export { getData, Choice };
