import { useState, useEffect, useRef } from "react";
import mu from "src/assets/mm.png";
import photo1 from "src/assets/photo1.png";
import photo2 from "src/assets/photo2.png";
import photo3 from "src/assets/photo3.png";
import birthdayMusic from "src/assets/birthday.mp3";

const MemoryGame = ({ onClose, isLightMode }) => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [gameStarted, setGameStarted] = useState(false);

  const [showBirthdayPage, setShowBirthdayPage] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  // Romantic birthday flow - now with 5 mini games!
  const [unlockedGame, setUnlockedGame] = useState(1);
  const [quizDone, setQuizDone] = useState(false);
  const [heartScore, setHeartScore] = useState(0);
  const [puzzleAnswer, setPuzzleAnswer] = useState("");
  const [showFinalGift, setShowFinalGift] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  
  const [promiseMessage, setPromiseMessage] = useState("");
  const [loveKeyAnswer, setLoveKeyAnswer] = useState("");
  const [game4Completed, setGame4Completed] = useState(false);

  // Easter egg untuk April
  const [showAprilPage, setShowAprilPage] = useState(false);
  const [showAprilCelebration, setShowAprilCelebration] = useState(false);
  const [aprilGameStep, setAprilGameStep] = useState(1); // 1..7
  const [aprilFlowerCount, setAprilFlowerCount] = useState(0);
  const [aprilCakweAnswer, setAprilCakweAnswer] = useState("");
  const [aprilPromiseMessage, setAprilPromiseMessage] = useState("");
  const [aprilUnivAnswer, setAprilUnivAnswer] = useState("");
  const [aprilRaceCount, setAprilRaceCount] = useState(0);
  const [aprilFarewellMessage, setAprilFarewellMessage] = useState("");
  const [aprilFinalSurprise, setAprilFinalSurprise] = useState(false);
  const [aprilCurrentPhoto, setAprilCurrentPhoto] = useState(0); // untuk carousel April

  const popupContentRef = useRef(null);
  const photos = [mu, photo1, photo2, photo3];

  const cardData = [
    { id: 1, value: "🧶" },
    { id: 2, value: "🐈" },
    { id: 3, value: "🐈‍⬛" },
    { id: 4, value: "😻" },
    { id: 5, value: "🐾" },
    { id: 6, value: "🙀" },
  ];

  useEffect(() => {
    if (gameStarted) {
      const shuffledCards = [...cardData, ...cardData]
        .sort(() => Math.random() - 0.5)
        .map((card, index) => ({ ...card, id: index }));
      setCards(shuffledCards);
    }
  }, [gameStarted]);

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
          setCards((prev) =>
            prev.map((card) =>
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

  useEffect(() => {
    if (matchedCards.length === cards.length && cards.length > 0) {
      setGameCompleted(true);
    }
  }, [matchedCards, cards]);

  const handleStartGame = () => {
    if (!playerName.trim()) return;
    const lowerName = playerName.trim().toLowerCase();
    if (lowerName === "nagisa") {
      setShowBirthdayPage(true);
      return;
    }
    if (lowerName === "aprilia nur aini" || lowerName === "april") {
      setShowAprilPage(true);
      return;
    }
    setGameStarted(true);
  };

  const handleCloseBirthdayPopup = () => {
    if (onClose) onClose();
    else {
      setShowBirthdayPage(false);
      setShowCelebration(false);
      setGameStarted(false);
      setUnlockedGame(1);
      setHeartScore(0);
      setPuzzleAnswer("");
      setShowFinalGift(false);
      setPromiseMessage("");
      setLoveKeyAnswer("");
      setGame4Completed(false);
    }
  };

  const handleCloseAprilPopup = () => {
    if (onClose) onClose();
    else {
      setShowAprilPage(false);
      setShowAprilCelebration(false);
      setAprilGameStep(1);
      setAprilFlowerCount(0);
      setAprilCakweAnswer("");
      setAprilPromiseMessage("");
      setAprilUnivAnswer("");
      setAprilRaceCount(0);
      setAprilFarewellMessage("");
      setAprilFinalSurprise(false);
      setAprilCurrentPhoto(0);
    }
  };

  const handleBackdropClick = (e) => {
    if (popupContentRef.current && !popupContentRef.current.contains(e.target)) {
      if (showBirthdayPage) handleCloseBirthdayPopup();
      if (showAprilPage) handleCloseAprilPopup();
    }
  };

  const getCurrentGameNumber = () => {
    if (showFinalGift) return 5;
    if (unlockedGame === 1) return 1;
    if (unlockedGame === 2) return 2;
    if (unlockedGame === 3) return 3;
    if (unlockedGame === 4) return 4;
    if (unlockedGame === 5) return 5;
    return 1;
  };

  return (
    <div className="p-4">
      {showBirthdayPage ? (
        <div className="fixed inset-0 bg-black/90 text-white overflow-auto" onClick={handleBackdropClick}>
          <div ref={popupContentRef} className="min-h-screen flex items-center justify-center p-4">
            {!showCelebration ? (
              <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">🎂 Welcome Nagisa ❤️</h1>
                <button
                  className="px-6 py-4 bg-pink-500 rounded-xl text-white text-xl hover:bg-pink-600 transition"
                  onClick={() => setShowCelebration(true)}
                >
                  Buka Hadiah Ulang Tahun
                </button>
                <button
                  onClick={handleCloseBirthdayPopup}
                  className="absolute top-4 right-4 text-white text-3xl hover:text-pink-400"
                >
                  ×
                </button>
              </div>
            ) : (
              <div className="p-8 max-w-4xl mx-auto w-full relative">
                <button
                  onClick={handleCloseBirthdayPopup}
                  className="absolute top-4 right-4 text-white text-3xl hover:text-pink-400 z-50"
                >
                  ×
                </button>
                <h1 className="text-5xl text-center mb-8">🎂 Happy Birthday Nagi ❤️</h1>

                {!showFinalGift && (
                  <div className="bg-white/20 p-3 rounded-xl text-center mb-6">
                    <p className="text-lg font-semibold">Romantic Challenge: Game {getCurrentGameNumber()} of 5</p>
                    <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
                      <div className="bg-pink-500 h-2.5 rounded-full transition-all duration-500" style={{ width: `${(getCurrentGameNumber() / 5) * 100}%` }}></div>
                    </div>
                  </div>
                )}

                {/* Game 1: Kenali Dirimu */}
                {unlockedGame === 1 && !showFinalGift && (
                  <div className="bg-white/10 p-8 rounded-2xl mb-6 backdrop-blur-sm text-center">
                    <div className="text-6xl mb-4">❤️💖❤️</div>
                    <h2 className="text-4xl font-bold mb-6">Game 1: Kenali Dirimu</h2>
                    <div className="text-xl mb-6 space-y-3 text-left max-w-2xl mx-auto">
                      <p>✨ Dia adalah wanita yang tinggal di <span className="text-pink-300 font-semibold">Buah Batu, Bandung</span>.</p>
                      <p>💖 Hatinya lembut, kuat, pinter, cantik, dan sangat imut – apalagi saat <span className="text-pink-300">ketawa dan ngoroknya</span> yang lucu!</p>
                      <p>🍡 Pipinya seperti <span className="text-pink-300">mochi</span>, bikin gemes.</p>
                      <p>🌟 Dia menjadi <span className="text-pink-300">mood booster</span> dan dari dialah aku belajar banyak hal.</p>
                      <p>💔 Dulu dia pernah disakiti dan dimanipulasi, tapi <span className="text-pink-300">aku tidak ingin itu terulang lagi</span>.</p>
                      <p>🎮 Aku mengenalnya dari game <span className="text-pink-300">Last War</span> sejak <span className="text-pink-300">Januari 2026</span>.</p>
                      <p className="font-bold text-2xl text-center mt-6">Siapa dia?</p>
                    </div>
                    <button
                      className="mt-2 px-8 py-4 bg-pink-500 rounded-xl text-2xl hover:bg-pink-600 transition transform hover:scale-105"
                      onClick={() => { setQuizDone(true); setUnlockedGame(2); }}
                    >
                      Nagisa ❤️ (Itu aku!)
                    </button>
                  </div>
                )}

                {/* Game 2: Catch My Heart */}
                {unlockedGame === 2 && !showFinalGift && (
                  <div className="bg-white/10 p-8 rounded-2xl mb-6 backdrop-blur-sm text-center">
                    <div className="text-6xl mb-4">💓💗💓</div>
                    <h2 className="text-4xl font-bold mb-6">Game 2: Catch My Heart</h2>
                    <p className="text-2xl mb-4">Kumpulkan 5 hati untuk membuka game berikutnya!</p>
                    <p className="text-xl mb-4">Hati terkumpul: {heartScore} / 5</p>
                    <button
                      className="text-8xl transition transform hover:scale-110 active:scale-95"
                      onClick={() => {
                        if (unlockedGame === 2) {
                          const next = heartScore + 1;
                          setHeartScore(next);
                          if (next >= 5) setUnlockedGame(3);
                        }
                      }}
                    >
                      ❤️
                    </button>
                    <p className="mt-4 text-pink-300">Klik hati berulang kali!</p>
                  </div>
                )}

                {/* Game 3: Puzzle Cinta dari Last War */}
                {unlockedGame === 3 && !showFinalGift && (
                  <div className="bg-white/10 p-8 rounded-2xl mb-6 backdrop-blur-sm">
                    <div className="text-6xl mb-4 text-center">💌🔐💌</div>
                    <h2 className="text-4xl font-bold mb-6 text-center">Game 3: Puzzle Cinta dari Last War</h2>
                    <p className="text-xl mb-4 text-center">
                      Lengkapi kalimat rindu ini untuk Nagisa:<br />
                      <span className="text-pink-300">"Semenjak kenal dekat dengan Nagisa, harapan mas Rin adalah ingin Nagisa ____"</span>
                    </p>
                    <p className="text-center text-pink-300 mb-2">Hint: "lebih mencintai dirinya sendiri"</p>
                    <input
                      className="text-white p-4 rounded-xl w-full bg-black/50 border border-pink-500 text-center text-lg"
                      value={puzzleAnswer}
                      onChange={(e) => setPuzzleAnswer(e.target.value)}
                      placeholder="Ketik jawabanmu disini..."
                    />
                    <div className="text-center mt-6">
                      <button
                        className="mt-2 px-8 py-4 bg-pink-500 rounded-xl text-xl hover:bg-pink-600 transition"
                        onClick={() => {
                          if (puzzleAnswer.trim().toLowerCase() === "lebih mencintai dirinya sendiri".toLowerCase()) {
                            setUnlockedGame(4);
                            setPuzzleAnswer("");
                          } else {
                            alert("Coba lagi, sayang... Petunjuknya sudah ada 😊💕");
                          }
                        }}
                      >
                        Selesaikan Puzzle
                      </button>
                    </div>
                  </div>
                )}

                {/* Game 4: Janji Untuk Nagisa dari Buah Batu */}
                {unlockedGame === 4 && !showFinalGift && (
                  <div className="bg-white/10 p-8 rounded-2xl mb-6 backdrop-blur-sm text-center">
                    <div className="text-6xl mb-4">💍💖💍</div>
                    <h2 className="text-4xl font-bold mb-6">Game 4: Janji Untuk Nagisa dari Buah Batu</h2>
                    <p className="text-xl mb-4">
                      Nagisa, kamu adalah seorang wanita yang berharga, worth all the love in this world, dan sangat pantas bahagia <br />
                      Tuliskan janjimu untuk dirimu di masa depan (bebas, dari hati):
                    </p>
                    <div className="bg-black/30 p-4 rounded-xl mb-6 text-left">
                      <p className="text-pink-200 italic">Contoh yang bisa kamu tulis:</p>
                      <ul className="mt-2 space-y-2 text-left max-w-md mx-auto">
                        <li>✨ "Aku akan lebih dewasa."</li>
                        <li>🍡 "Aku akan lebih bahagia."</li>
                        <li>🎮 "Aku akan mencintai mas Rin awww."</li>
                      </ul>
                    </div>
                    <textarea
                      className="text-white p-4 rounded-xl w-full bg-black/50 border border-pink-500 mb-4"
                      rows="3"
                      value={promiseMessage}
                      onChange={(e) => setPromiseMessage(e.target.value)}
                      placeholder="Tulis disini yaa"
                    />
                    <button
                      className="px-8 py-4 bg-pink-500 rounded-xl text-xl hover:bg-pink-600 transition transform hover:scale-105"
                      onClick={() => {
                        if (!game4Completed) {
                          setGame4Completed(true);
                          setUnlockedGame(5);
                        }
                      }}
                    >
                      🌟 Segel dengan Cinta 🌟
                    </button>
                    <p className="mt-4 text-sm text-pink-300">Klik tombol di atas untuk melanjutkan ke game terakhir</p>
                  </div>
                )}

                {/* Game 5: Kunci Cinta Nagisa */}
                {unlockedGame === 5 && !showFinalGift && (
                  <div className="bg-white/10 p-8 rounded-2xl mb-6 backdrop-blur-sm text-center">
                    <div className="text-6xl mb-4">🔑💘🔒</div>
                    <h2 className="text-4xl font-bold mb-6">Game 5: Kunci Cinta Nagisa</h2>
                    <p className="text-xl mb-4">
                      Kata sandi terakhir untuk membuka hadiah spesial. <br />
                      Ini adalah makanan favoritmu yang sering kamu beli buat jadi mood booster
                    </p>
                    <p className="text-pink-300 mb-4">Hint: diawali huruf e</p>
                    <input
                      className="text-white p-4 rounded-xl w-full bg-black/50 border border-pink-500 text-center text-lg"
                      value={loveKeyAnswer}
                      onChange={(e) => setLoveKeyAnswer(e.target.value)}
                      placeholder="Masukkan kata sandi cinta..."
                    />
                    <div className="text-center mt-6">
                      <button
                        className="px-8 py-4 bg-pink-500 rounded-xl text-xl hover:bg-pink-600 transition"
                        onClick={() => {
                          if (loveKeyAnswer.trim().toLowerCase() === "ecim") {
                            setShowFinalGift(true);
                          } else {
                            alert("Hmm... bukan itu sayang. Coba ingat-ingat daerah di Bandung favoritmu 😉💕");
                          }
                        }}
                      >
                        Buka Hadiah Terakhir 🎁
                      </button>
                    </div>
                  </div>
                )}

                {/* Final Gift: Photo slideshow and message */}
                {showFinalGift && (
                  <div className="bg-white text-black p-8 rounded-3xl max-w-3xl mx-auto shadow-2xl">
                    <h2 className="text-5xl font-bold text-center mb-4 text-pink-600">🎉 Birthday Surprise 🎉</h2>
                    <p className="text-center text-2xl mb-6">✨ For My Dearest Nagisa ✨</p>
                    <div className="relative">
                      <img
                        src={photos[currentPhoto]}
                        className="w-full rounded-2xl mb-4 shadow-lg border-4 border-pink-300"
                        alt="Birthday memory"
                        style={{ height: 'auto' }}
                      />
                      <div className="flex justify-center gap-6 mb-6">
                        <button onClick={() => setCurrentPhoto((currentPhoto - 1 + photos.length) % photos.length)} className="bg-pink-500 text-white px-6 py-2 rounded-full text-2xl hover:bg-pink-600 transition">◀</button>
                        <button onClick={() => setCurrentPhoto((currentPhoto + 1) % photos.length)} className="bg-pink-500 text-white px-6 py-2 rounded-full text-2xl hover:bg-pink-600 transition">▶</button>
                      </div>
                    </div>
                    <audio controls loop className="w-full mb-6"><source src={birthdayMusic} type="audio/mpeg" /></audio>
                    <div className="mt-6 bg-pink-50 p-6 rounded-2xl">
                      <h3 className="text-3xl font-bold mb-4 text-pink-700 text-center">💌 Untuk Nagisa Tersayang 💌</h3>
                      <div className="space-y-4 text-gray-800 text-lg leading-relaxed">
                        <p className="text-center text-2xl">🎂 Selamat ulang tahun yang ke-23! 🎂</p>
                        <p className="text-center">🌸🌸🌸</p>
                        <p>
                          Nagisa, wanita cantik dari <span className="font-semibold text-pink-600">Buah Batu, Bandung</span> yang hatinya lembut,
                          kuat, pinter, dan imut banget — apalagi tawa dan ngorokmu yang lucu, serta pipi mochimu yang gemesin.
                        </p>
                        <p>
                          Sejak Januari 2026 di <span className="font-semibold text-pink-600">Last War</span>, kamu telah menjadi <span className="font-semibold">mood booster</span> terbaik dalam hidupku.
                          Dari kamu, aku belajar banyak hal, dan setiap hari bersamamu (meski hanya lewat game) adalah kebahagiaan tersendiri.
                        </p>
                        <p>
                          Aku tahu masa lalumu tidak mudah, kau pernah disakiti dan dimanipulasi. Tapi percayalah, <span className="font-semibold">aku tidak akan pernah membiarkan hal itu terjadi lagi</span>.
                          Kamu berhak mendapatkan cinta yang tulus, rasa hormat, dan kebahagiaan sejati.
                        </p>
                        <p>
                          Di ulang tahunmu yang ke-23 ini, aku berharap kamu semakin <span className="font-semibold">dewasa, makin bahagia, dan semua impianmu tercapai</span>.
                          Jangan lupa untuk <span className="font-semibold">lebih mencintai diri sendiri</span> dan berani melangkah ke depan, karena kamu luar biasa.
                        </p>
                        <p>
                          Walaupun sejauh ini kita hanya berinteraksi via game dan aku tidak tahu identitas aslimu, tapi <span className="font-semibold">aku sungguh berharap suatu saat nanti kita bisa bertemu</span>
                          – mungkin sambil menikmati bandrek atau cilok di Buah Batu sambil mendengar tawamu yang khas. 😊
                        </p>
                        <p className="font-bold text-center text-pink-600 text-xl mt-4">
                          Terima kasih sudah menjadi salah satu sumber kebahagiaan dan mood boosterr dalam hidupku. <br />
                          Kamu membuat dunia ini terasa lebih indah hanya dengan keberadaanmu. ❤️
                        </p>
                        <p className="text-center text-3xl mt-4">I Love You More Than Words Can Say, Nagisa! 💕</p>
                        <p className="text-center text-md italic text-gray-500">— Dari seseorang yang menyayangimu, meski hanya dari jauh.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ) : showAprilPage ? (
        <div className="fixed inset-0 bg-black/90 text-white overflow-auto" onClick={handleBackdropClick}>
          <div ref={popupContentRef} className="min-h-screen flex items-center justify-center p-4">
            {!showAprilCelebration ? (
              <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">🌸 Hai April! 🌸</h1>
                <button
                  className="px-6 py-4 bg-purple-500 rounded-xl text-white text-xl hover:bg-purple-600 transition"
                  onClick={() => setShowAprilCelebration(true)}
                >
                  Buka Kenangan Bersama
                </button>
                <button
                  onClick={handleCloseAprilPopup}
                  className="absolute top-4 right-4 text-white text-3xl hover:text-purple-400"
                >
                  ×
                </button>
              </div>
            ) : (
              <div className="p-8 max-w-4xl mx-auto w-full relative">
                <button
                  onClick={handleCloseAprilPopup}
                  className="absolute top-4 right-4 text-white text-3xl hover:text-purple-400 z-50"
                >
                  ×
                </button>
                <h1 className="text-5xl text-center mb-8">💜 Selamat Jalan & Sukses, April! 💜</h1>

                {!aprilFinalSurprise && (
                  <div className="bg-white/20 p-3 rounded-xl text-center mb-6">
                    <p className="text-lg font-semibold">Kenangan Bersama: Game {aprilGameStep} dari 7</p>
                    <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
                      <div className="bg-purple-500 h-2.5 rounded-full transition-all duration-500" style={{ width: `${(aprilGameStep / 7) * 100}%` }}></div>
                    </div>
                  </div>
                )}

                {/* Game 1: Kenali April */}
                {aprilGameStep === 1 && !aprilFinalSurprise && (
                  <div className="bg-white/10 p-8 rounded-2xl mb-6 backdrop-blur-sm text-center">
                    <div className="text-6xl mb-4">🌸💖🌸</div>
                    <h2 className="text-4xl font-bold mb-6">Game 1: Kenali April</h2>
                    <div className="text-xl mb-6 space-y-3 text-left max-w-2xl mx-auto">
                      <p>✨ Seorang wanita yang lahir tanggal <span className="text-purple-300">21 April (Hari Kartini)</span>, berasal dari <span className="text-purple-300">Sukoharjo</span>.</p>
                      <p>💖 Ia sangat lemah lembut, feminim, pintar, lucu dengan caranya sendiri, ramah, penyabar, dan imut.</p>
                      <p>🍡 Suka diisengin karena memang senagih itu, biasa diledekin <span className="text-purple-300">"cakwe"</span> karena lemes-lemes gemulai.</p>
                      <p>🎓 Lulusan <span className="text-purple-300">Universitas Gadjah Mada, Teknik Industri</span>.</p>
                      <p>🏎️ Jagoan? Dia menyukai <span className="text-purple-300">mobil balap</span>!</p>
                      <p className="font-bold text-2xl text-center mt-6">Siapa dia?</p>
                    </div>
                    <button
                      className="mt-2 px-8 py-4 bg-purple-500 rounded-xl text-2xl hover:bg-purple-600 transition transform hover:scale-105"
                      onClick={() => setAprilGameStep(2)}
                    >
                      April (Aprilia Nur Aini) ❤️
                    </button>
                  </div>
                )}

                {/* Game 2: Kumpulkan 7 Bunga Kenangan */}
                {aprilGameStep === 2 && !aprilFinalSurprise && (
                  <div className="bg-white/10 p-8 rounded-2xl mb-6 backdrop-blur-sm text-center">
                    <div className="text-6xl mb-4">🌼🌻🌺</div>
                    <h2 className="text-4xl font-bold mb-6">Game 2: Kumpulkan 7 Bunga Kenangan</h2>
                    <p className="text-2xl mb-4">Setiap bunga mewakili kenangan indah bersama April.</p>
                    <p className="text-xl mb-4">Bunga terkumpul: {aprilFlowerCount} / 7</p>
                    <button
                      className="text-8xl transition transform hover:scale-110 active:scale-95"
                      onClick={() => {
                        if (aprilGameStep === 2) {
                          const next = aprilFlowerCount + 1;
                          setAprilFlowerCount(next);
                          if (next >= 7) setAprilGameStep(3);
                        }
                      }}
                    >
                      🌸
                    </button>
                    <p className="mt-4 text-purple-300">Klik bunga untuk mengingat setiap kenangan manis!</p>
                  </div>
                )}

                {/* Game 3: Puzzle Julukan "Cakwe" */}
                {aprilGameStep === 3 && !aprilFinalSurprise && (
                  <div className="bg-white/10 p-8 rounded-2xl mb-6 backdrop-blur-sm text-center">
                    <div className="text-6xl mb-4">🥟❓🥟</div>
                    <h2 className="text-4xl font-bold mb-6">Game 3: Apa Julukan untuk April?</h2>
                    <p className="text-xl mb-4">Karena gerakannya yang lemes gemulai, April sering dipanggil dengan julukan makanan ini.</p>
                    <input
                      className="text-white p-4 rounded-xl w-full bg-black/50 border border-purple-500 text-center text-lg"
                      value={aprilCakweAnswer}
                      onChange={(e) => setAprilCakweAnswer(e.target.value)}
                      placeholder="Ketik jawaban..."
                    />
                    <button
                      className="mt-4 px-8 py-4 bg-purple-500 rounded-xl text-xl hover:bg-purple-600 transition"
                      onClick={() => {
                        if (aprilCakweAnswer.trim().toLowerCase() === "cakwe") {
                          setAprilGameStep(4);
                        } else {
                          alert("Coba lagi, ingat-ingat makanan yang sering dipakai untuk meledek April 😄");
                        }
                      }}
                    >
                      Jawab
                    </button>
                  </div>
                )}

                {/* Game 4: Janji Persahabatan */}
                {aprilGameStep === 4 && !aprilFinalSurprise && (
                  <div className="bg-white/10 p-8 rounded-2xl mb-6 backdrop-blur-sm text-center">
                    <div className="text-6xl mb-4">🤝💖🤝</div>
                    <h2 className="text-4xl font-bold mb-6">Game 4: Janji Persahabatan</h2>
                    <p className="text-xl mb-4">
                      Tuliskan janji atau pesan untuk April yang akan pindah kantor. Jaga persahabatan kita selamanya.
                    </p>
                    <textarea
                      className="text-white p-4 rounded-xl w-full bg-black/50 border border-purple-500 mb-4"
                      rows="3"
                      value={aprilPromiseMessage}
                      onChange={(e) => setAprilPromiseMessage(e.target.value)}
                      placeholder="Tulis pesanmu di sini..."
                    />
                    <button
                      className="px-8 py-4 bg-purple-500 rounded-xl text-xl hover:bg-purple-600 transition"
                      onClick={() => setAprilGameStep(5)}
                    >
                      🌟 Segel Janji 🌟
                    </button>
                  </div>
                )}

                {/* Game 5: Kunci Kenangan - Kampus April */}
                {aprilGameStep === 5 && !aprilFinalSurprise && (
                  <div className="bg-white/10 p-8 rounded-2xl mb-6 backdrop-blur-sm text-center">
                    <div className="text-6xl mb-4">🎓🔑🎓</div>
                    <h2 className="text-4xl font-bold mb-6">Game 5: Kunci Kenangan</h2>
                    <p className="text-xl mb-4">Dimana April menimba ilmu? Sebutkan nama universitasnya (singkatan atau lengkap).</p>
                    <input
                      className="text-white p-4 rounded-xl w-full bg-black/50 border border-purple-500 text-center text-lg"
                      value={aprilUnivAnswer}
                      onChange={(e) => setAprilUnivAnswer(e.target.value)}
                      placeholder="Jawaban..."
                    />
                    <button
                      className="mt-4 px-8 py-4 bg-purple-500 rounded-xl text-xl hover:bg-purple-600 transition"
                      onClick={() => {
                        const answer = aprilUnivAnswer.trim().toLowerCase();
                        if (answer === "ugm" || answer === "universitas gadjah mada") {
                          setAprilGameStep(6);
                        } else {
                          alert("Coba lagi, ingat kampus kebanggaan April 😊");
                        }
                      }}
                    >
                      Buka Kenangan
                    </button>
                  </div>
                )}

                {/* Game 6: Balapan Hati */}
                {aprilGameStep === 6 && !aprilFinalSurprise && (
                  <div className="bg-white/10 p-8 rounded-2xl mb-6 backdrop-blur-sm text-center">
                    <div className="text-6xl mb-4">🏎️💨🏁</div>
                    <h2 className="text-4xl font-bold mb-6">Game 6: Balapan Hati</h2>
                    <p className="text-xl mb-4">April suka mobil balap. Klik tombol gas 7 kali untuk menyelesaikan balapan!</p>
                    <p className="text-xl mb-4">Kecepatan: {aprilRaceCount} / 7</p>
                    <button
                      className="text-8xl transition transform hover:scale-110 active:scale-95"
                      onClick={() => {
                        if (aprilGameStep === 6) {
                          const next = aprilRaceCount + 1;
                          setAprilRaceCount(next);
                          if (next >= 7) setAprilGameStep(7);
                        }
                      }}
                    >
                      🏎️
                    </button>
                  </div>
                )}

                {/* Game 7: Surat Perpisahan */}
                {aprilGameStep === 7 && !aprilFinalSurprise && (
                  <div className="bg-white/10 p-8 rounded-2xl mb-6 backdrop-blur-sm text-center">
                    <div className="text-6xl mb-4">📜💌📜</div>
                    <h2 className="text-4xl font-bold mb-6">Game 7: Surat Perpisahan</h2>
                    <p className="text-xl mb-4">
                      Tuliskan pesan terakhirmu untuk April sebagai kenang-kenangan sebelum dia pindah kantor.
                    </p>
                    <textarea
                      className="text-white p-4 rounded-xl w-full bg-black/50 border border-purple-500 mb-4"
                      rows="3"
                      value={aprilFarewellMessage}
                      onChange={(e) => setAprilFarewellMessage(e.target.value)}
                      placeholder="Tulis surat perpisahan..."
                    />
                    <button
                      className="px-8 py-4 bg-purple-500 rounded-xl text-xl hover:bg-purple-600 transition"
                      onClick={() => setAprilFinalSurprise(true)}
                    >
                      Kirim & Buka Kejutan 🎁
                    </button>
                  </div>
                )}

                {/* Final Surprise: Pesan Menyentuh untuk April + Carousel & Musik */}
                {aprilFinalSurprise && (
                  <div className="bg-white text-black p-8 rounded-3xl max-w-3xl mx-auto shadow-2xl">
                    <h2 className="text-5xl font-bold text-center mb-4 text-purple-600">🎁 Untuk April Tersayang 🎁</h2>
                    <p className="text-center text-2xl mb-6">✨ Kenangan Bersamamu ✨</p>
                    
                    {/* Carousel Foto */}
                    <div className="relative">
                      <img
                        src={photos[aprilCurrentPhoto]}
                        className="w-full rounded-2xl mb-4 shadow-lg border-4 border-purple-300"
                        alt="Kenangan bersama April"
                        style={{ height: 'auto' }}
                      />
                      <div className="flex justify-center gap-6 mb-6">
                        <button
                          onClick={() => setAprilCurrentPhoto((aprilCurrentPhoto - 1 + photos.length) % photos.length)}
                          className="bg-purple-500 text-white px-6 py-2 rounded-full text-2xl hover:bg-purple-600 transition"
                        >
                          ◀
                        </button>
                        <button
                          onClick={() => setAprilCurrentPhoto((aprilCurrentPhoto + 1) % photos.length)}
                          className="bg-purple-500 text-white px-6 py-2 rounded-full text-2xl hover:bg-purple-600 transition"
                        >
                          ▶
                        </button>
                      </div>
                    </div>

                    {/* Pemutar Musik */}
                    <audio controls loop className="w-full mb-6">
                      <source src={birthdayMusic} type="audio/mpeg" />
                      Browser Anda tidak mendukung audio.
                    </audio>

                    <div className="mt-6 bg-purple-50 p-6 rounded-2xl">
                      <h3 className="text-3xl font-bold mb-4 text-purple-700 text-center">💜 Kenangan Indah & Ucapan Perpisahan 💜</h3>
                      <div className="space-y-4 text-gray-800 text-lg leading-relaxed">
                        <p className="text-center text-2xl">🌸 Selamat jalan dan sukses di tempat baru, April! 🌸</p>
                        <p>
                          April, wanita luar biasa dari Sukoharjo yang lemah lembut, pintar, dan selalu membawa ketenangan. 
                          Terima kasih untuk semua tawa, candaan "cakwe", dan kebaikanmu selama ini.
                        </p>
                        <p>
                          Kami akan merindukan caramu yang feminim, imut, dan sabar menghadapi iseng-iseng kami. 
                          Kamu adalah teman yang berharga, dan persahabatan ini tidak akan pernah pudar meskipun jarak memisahkan.
                        </p>
                        <p>
                          Semoga di kantor barumu, kamu semakin sukses, bahagia, dan terus mengejar passion-mu terhadap mobil balap 
                          (dan mungkin suatu saat kita bisa nobar F1 atau sekadar ngobrol soal teknik industri 😄).
                        </p>
                        <p className="italic">
                          "Perpisahan bukanlah akhir, melainkan awal dari kenangan baru. Jaga dirimu baik-baik, April. 
                          Dan jangan lupa, kamu selalu punya tempat di hati kami."
                        </p>
                        <p className="font-bold text-center text-purple-600 text-xl mt-4">
                          💕 Sampai jumpa lagi, suatu saat nanti. 💕
                        </p>
                        <p className="text-center text-md italic text-gray-500">
                          — Dari teman-teman yang menyayangimu.
                        </p>
                        {aprilPromiseMessage && (
                          <div className="mt-4 p-3 bg-white rounded-lg border border-purple-200">
                            <p className="font-semibold">Pesan janjimu:</p>
                            <p>"{aprilPromiseMessage}"</p>
                          </div>
                        )}
                        {aprilFarewellMessage && (
                          <div className="mt-4 p-3 bg-white rounded-lg border border-purple-200">
                            <p className="font-semibold">Surat perpisahan:</p>
                            <p>"{aprilFarewellMessage}"</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ) : !gameStarted ? (
        <div className="text-center max-w-md mx-auto mt-20">
          <h2 className="text-3xl font-bold mb-6 text-white">Welcome to the Memory Game</h2>
          <p className="mb-4 text-blue-400">Masukkan namamu untuk memulai</p>
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Enter your name"
            className="p-3 border rounded-xl w-full mb-4"
          />
          <button
            onClick={handleStartGame}
            className="px-8 py-3 bg-blue-500 text-white rounded-xl hover:bg-pink-600 transition"
          >
            Start Game
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-center text-3xl font-bold mb-6 text-gray-800">Memory Game</h2>
          {gameCompleted && (
            <div className="text-center mb-4 text-green-600 font-bold text-xl">
              🎉 Congratulations! You completed the game! 🎉
            </div>
          )}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            {cards.map((card) => (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className="p-6 rounded-xl bg-gradient-to-br from-pink-200 to-pink-300 text-center cursor-pointer shadow-lg hover:shadow-xl transition transform hover:scale-105 text-3xl"
              >
                {card.flipped || matchedCards.includes(card.id) ? card.value : "❓"}
              </div>
            ))}
          </div>
          {gameCompleted && (
            <div className="text-center mt-6">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Play Again
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MemoryGame;