import React from 'react';
import PropTypes from "prop-types";


const foodIlLike = [
  {
    id: 1,
    name: "coffee",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2zEvsWGOjghcpdwRt2gn9AHaEK%26pid%3DApi&f=1",
    rating: 5,
  },
  {
    id: 2,
    name: "pork",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.AavXF-AGGev29OHC0733KQHaLH%26pid%3DApi&f=1",
    rating: 4.8,
  },
  {
    id: 3,
    name: "gogi",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.klL2I17BuTsNjoHAPPemnAHaEn%26pid%3DApi&f=1",
    rating: 4.5,
  },
  {
    id: 4,
    name: "kimbab",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ay3kZ7klIDPbNrS8dc4GXAHaEe%26pid%3DApi&f=1",
    rating: 4.1,
  },
  {
    id: 5,
    name: "kimchi",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffoodtoglow.files.wordpress.com%2F2016%2F10%2Fkimchi1.jpg%3Fw%3D1200&f=1&nofb=1",
    rating: 4.3,
  },
]


function Food({name, picture, rating}) {
  return (
    <div>
      <h2>I Like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} />
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function App() {
  return (
    <div>
      {foodIlLike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
