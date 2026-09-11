import '../styles/Card.css';

export function Card({ playerName, playerImage, onSelect }) {
  return (
    <div className="card" onClick={onSelect}>
      <img src={playerImage} alt={playerName} />
      <p>{playerName}</p>
    </div>
  );
}
