import '../styles/Header.css';

export function Header({ score, bestScore }) {
  return (
    <div className="header">
      <h1>MEMORY CARD</h1>
      <div className="header-scores">
        <p>Score: {score}</p>
        <p>Best score: {bestScore}</p>
      </div>
    </div>
  );
}
