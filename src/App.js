import { useState } from 'react';
import quotes from './quotes.json';
import './App.css';


function App() {
  const [quote, setQuote] = useState(quotes[0]);
  const handleClick = () => {
    let newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(newQuote);
  };
  return (
    <main>
      <section id="quote-box">
        <h2 id="text">{quote.text}</h2>
        <h3 id="author">-{quote.author}</h3>
        <div className="button-container">
          <a
            className="button"
            target="_top"
            href={`https://twitter.com/intent/tweet?text=${quote.text}`}
          >
            Tweet Me
          </a>
          <button type="button" id="new-quote" onClick={handleClick}>
            New Quote
          </button>
        </div>
      </section>
    </main>

  )
}

export default App;
