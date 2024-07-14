import { useState } from "react";
import "./App.css";

const _ = require("lodash");

const GridImages = ({ images }) => {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [solvedCards, setSolvedCards] = useState({});

  const handleImageClick = (index) => {
    if (images[index] === images[flippedIndex]) {
      setSolvedCards({ ...solvedCards, [index]: true, [flippedIndex]: true });
    }
    setFlippedIndex(index);
  };

  const isImageVisible = (index) => {
    if (solvedCards[index] === true) {
      return true;
    }
    if (index === flippedIndex) {
      return true;
    }
    return false;
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
      }}
    >
      {images.map((image, index) =>
        isImageVisible(index) ? (
          <img src={image} className="imageStyle" />
        ) : (
          <div
            onClick={() => handleImageClick(index)}
            className="imagePlaceHolder"
          />
        )
      )}
    </div>
  );
};

const MemoryGame = ({ images }) => {
  const randomizedImages = _.shuffle([...images, ...images]);
  return <GridImages images={randomizedImages} />;
};

function App() {
  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          marginBottom: "30px",
        }}
      >
        Memory Game
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <MemoryGame
          images={[
            "https://images.unsplash.com/photo-1626808642875-0aa545482dfb",
            "https://images.unsplash.com/photo-1546842931-886c185b4c8c",
            "https://images.unsplash.com/photo-1520763185298-1b434c919102",
            "https://images.unsplash.com/photo-1442458017215-285b83f65851",
            "https://images.unsplash.com/photo-1496483648148-47c686dc86a8",
            "https://images.unsplash.com/photo-1591181520189-abcb0735c65d",
          ]}
        />
      </div>
    </div>
  );
}

export default App;
