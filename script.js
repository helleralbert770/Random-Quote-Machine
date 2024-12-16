// Array of quotes
const quotes = [
  { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "You make your day or life difficult yourself.", author: "John Udry" },
  { text: "Success is not the final destination, failure is not fatal: what matters is the courage to continue.", author: "Winston Churchill" },
  { text: "Life is 10% what happens to you and 90% how you react to it.", author: "Charles R. Swindoll" }
];

// Select HTML elements
const textElement = document.getElementById("text");
const authorElement = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");
const tweetButton = document.getElementById("tweet-quote");

// Generate a random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  
  // Set quote text and author
  textElement.textContent = `"${randomQuote.text}"`;
  authorElement.textContent = `- ${randomQuote.author || "Unknown"}`;

  // Update tweet link
  tweetButton.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${randomQuote.text}" - ${randomQuote.author}`)}`;
}

// Initial quote display
getRandomQuote();

// Add event listener for new quotes
newQuoteButton.addEventListener("click", getRandomQuote);
