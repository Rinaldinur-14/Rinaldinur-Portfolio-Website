import { useState, useEffect } from "react";
import mu from "/src/assets/mm.png"; // Image for the top position


const MemoryGame = ({ onClose, isLightMode }) => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [gameStarted, setGameStarted] = useState(false);

  // Card data (6 pairs)
  const cardData = [
    { id: 1, value: "🧶" },
    { id: 2, value: "🐈" },
    { id: 3, value: "🐈‍⬛" },
    { id: 4, value: "😻" },
    { id: 5, value: "🐾" },
    { id: 6, value: "🙀" },
  ];

  // Initialize the game
  useEffect(() => {
    if (gameStarted) {
      const shuffledCards = [...cardData, ...cardData] // Duplicate for pairs
        .sort(() => Math.random() - 0.5) // Shuffle
        .map((card, index) => ({ ...card, id: index })); // Add unique IDs
      setCards(shuffledCards);
      setFlippedCards([]);
      setMatchedCards([]);
      setGameCompleted(false);
    }
  }, [gameStarted]);

  // Handle card click
  const handleCardClick = (id) => {
    if (flippedCards.length === 2 || matchedCards.includes(id)) return;

    const updatedCards = cards.map((card) =>
      card.id === id ? { ...card, flipped: true } : card
    );
    setCards(updatedCards);

    setFlippedCards([...flippedCards, id]);

    if (flippedCards.length === 1) {
      const firstCard = cards.find((card) => card.id === flippedCards[0]);
      const secondCard = cards.find((card) => card.id === id);

      if (firstCard.value === secondCard.value) {
        setMatchedCards([...matchedCards, firstCard.id, secondCard.id]);
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === firstCard.id || card.id === secondCard.id
                ? { ...card, flipped: false }
                : card
            )
          );
        }, 1000);
      }

      setFlippedCards([]);
    }
  };

  // Check if the game is completed
  useEffect(() => {
    if (matchedCards.length === cards.length && cards.length > 0) {
      setGameCompleted(true);
      setTimeout(() => {
        onClose(); // Close the modal after 5 seconds
      }, 5000); // 5 seconds delay
    }
  }, [matchedCards, cards.length, onClose]);

  // Handle game start
  const handleStartGame = () => {
    if (playerName.trim()) {
      setGameStarted(true);
    } else {
      alert("Please enter your name to start the game!");
    }
  };

  return (
    <div className="p-4">
      {!gameStarted ? (
        // Name Input Screen
        <div className="text-center">
          <h2
            className={`text-2xl font-bold mb-4 bg-clip-text text-transparent animate-gradient ${
              isLightMode
                ? "bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400"
                : "bg-gradient-to-r from-blue-400 via-blue-600 to-purple-500"
            }`}
          >
            Welcome to the Memory Game!
          </h2>
          <input
            type="text"
            placeholder="Enter your name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            className={`p-2 rounded-lg border ${
              playerName.trim() ? "border-blue-500" : "md:border-gray-500 border-blue-500"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          <button
            onClick={handleStartGame}
            className="mt-4 px-4 py-2 text-white rounded-lg transition-all bg-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            Start Game
          </button>
        </div>
      ) : (
        // Game Screen
        <>
          <h2 className="text-xl md:text-2xl font-bold mb-15 text-center">Memory Game</h2>
          <div className="grid grid-cols-3 gap-4">
            {cards.map((card) => (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`p-4 border rounded-lg text-center cursor-pointer ${
                  card.flipped || matchedCards.includes(card.id)
                    ? "bg-blue-200"
                    : "bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 animate-gradient"
                }`}
              >
                {card.flipped || matchedCards.includes(card.id) ? card.value : "❓"}
              </div>
            ))}
          </div>

          {/* Surprise for Winning */}
          {gameCompleted && (
            <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center">
              {/* Surprise Images */}
  


              {/* Surprise Message */}
              <div className="bg-white/10 p-4 rounded-lg text-center">
                <h2 className="text-sm md:text-2xl font-bold mb-4">🎉 Congratulations 🎉</h2>
                <h3 className="text-base md:text-3xl font-bold mb-4">{playerName}!</h3>
                <p className="text-sm md:text-xl mb-4">You won! Here's your surprise:</p>
                <p className="text-base md:text-3xl">🌟 You have been blessed by Mochi and Milo! 🌟</p>
                <p className="text-sm md:text-lg mt-4">The modal will close in 5 seconds...</p>
                <div className="flex justify-center items-center mt-8">
                  <img
                    src={mu}
                    alt="Bottom Image"
                    className="w-max h-40 md:h-45 lg:h-50"
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MemoryGame;