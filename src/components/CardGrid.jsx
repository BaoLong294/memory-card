import '../styles/CardGrid.css';
import { Card } from './Card.jsx';
import { useState } from 'react';
import { useEffect } from 'react';

function preloadImage(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;
    img.onload = resolve;
    img.onerror = resolve;
  });
}

export function CardGrid() {
  const playerName = [
    'Lionel_Messi',
    'Erling_Haaland',
    'Kylian_Mbappe',
    'Rodrigo_Hernandez_Cascante',
    'Michael_Olise',
    'Jude_Bellingham',
    'Pedro_Porro',
    'Lisandro_Martinez',
    'Dayot_Upamecano',
    'Marc_Cucurella',
    'Vozinha',
    'Luis_de_la_Fuente',
  ];

  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPlayers() {
      const fetchPromises = playerName.map((name) =>
        fetch(
          `https://www.thesportsdb.com/api/v1/json/123/searchplayers.php?p=${name}`
        )
      );

      const responses = await Promise.all(fetchPromises);

      const playersInfo = await Promise.all(responses.map((res) => res.json()));

      const formattedInfo = playersInfo.map((data) => ({
        id: data.player[0].idPlayer,
        name: data.player[0].strPlayer,
        image: data.player[0].strCutout,
      }));

      await Promise.all(
        formattedInfo.map((player) => preloadImage(player.image))
      );

      setCards(formattedInfo);
      setIsLoading(false);
    }
    fetchPlayers();
  }, []);

  return isLoading ? (
    <p className="card-loading">Loading game...</p>
  ) : (
    <div className="card-grid">
      {cards.map((player) => (
        <Card
          key={player.id}
          playerName={player.name}
          playerImage={player.image}
        />
      ))}
    </div>
  );
}
