import './App.css';
import { useState } from 'react';
import { Header } from './components/Header.jsx';
import { CardGrid } from './components/CardGrid.jsx';

function App() {
  const [clickedCards, setClickedCard] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  function handleEndGame(currentScore) {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
    setClickedCard([]);
  }

  function handleCardClick(cardId, numberOfCards) {
    const isClicked = clickedCards.includes(cardId);

    if (isClicked) {
      handleEndGame(clickedCards.length);
    } else {
      const newClickedCards = [...clickedCards, cardId];

      if (newClickedCards.length === numberOfCards) {
        handleEndGame(newClickedCards.length);
      } else {
        setClickedCard(newClickedCards);
      }
    }
  }

  return (
    <div className="App">
      <Header score={clickedCards.length} bestScore={bestScore} />
      <CardGrid onCardClick={handleCardClick} />
    </div>
  );
}

export default App;
