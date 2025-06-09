
import { useState } from "react";
import Greeting from "./Greeting";
import Card from "../components/card.jsx";
import "../components/card.css";

// Afbeeldingen importeren voor Vite
import ds1 from "../assets/ds1.png";
import ds2 from "../assets/ds2.png";
import ds3 from "../assets/ds3.png";
import bloodborne from "../assets/bloodborne.png";
import eldenring from "../assets/eldenring.png";
import sekiro from "../assets/sekiro.png";

function App() {
  const [count, setCount] = useState(0);

  const [games] = useState([
    {
      id: 1,
      title: "Dark Souls 1",
      description:
        "The game that defined the Soulslike genre...",
      image: ds1,
      inStock: true,
    },
    {
      id: 2,
      title: "Dark Souls 2",
      description:
        "A spiritual sequel set in the kingdom of Drangleic...",
      image: ds2,
      inStock: false,
    },
    {
      id: 3,
      title: "Dark Souls 3",
      description:
        "The final entry in the trilogy, Dark Souls III...",
      image: ds3,
      inStock: true,
    },
    {
      id: 4,
      title: "Bloodborne",
      description:
        "A gothic horror masterpiece set in Yharnam...",
      image: bloodborne,
      inStock: false,
    },
    {
      id: 5,
      title: "Elden Ring",
      description:
        "A massive open-world evolution of the Souls formula...",
      image: eldenring,
      inStock: true,
    },
    {
      id: 6,
      title: "Sekiro",
      description:
        "A departure from RPG elements, Sekiro focuses on precise swordplay...",
      image: sekiro,
      inStock: true,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Mijn React-app met Vite</h1>
      <Greeting name="Host" />
      <button onClick={() => setCount(count + 1)}>
        Je hebt {count} keer geklikt
      </button>

      {/* Zoekveld */}
      <input
        type="text"
        placeholder="Zoek een game..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginTop: "20px", padding: "8px", width: "100%" }}
      />

      {filteredGames.length === 0 ? (
        <p style={{ marginTop: "20px" }}>Geen games gevonden.</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          {filteredGames.map((game) => (
            <Card
              key={game.id}
              image={game.image}
              title={game.title}
              description={
                game.description +
                (game.inStock ? "" : " (Uitverkocht!)")
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

