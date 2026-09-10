import '../styles/Card.css';

export function Card({ playerName, playerImage }) {
  return (
    <div className="card">
      <img src={playerImage} alt={playerName} />
      <p>{playerName}</p>
    </div>
  );
}
