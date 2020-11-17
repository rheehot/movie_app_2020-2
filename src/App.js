import React from 'react';

function Food({name, picture}) {
return <div>
  <h2>I Like {name}</h2>
  <img src={picture}></img>
</div>
}

const foodIlLike = [
  {
    name: "coffee",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2zEvsWGOjghcpdwRt2gn9AHaEK%26pid%3DApi&f=1"
  },
  {
    name: "pork",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.AavXF-AGGev29OHC0733KQHaLH%26pid%3DApi&f=1"
  },
  {
    name: "gogi",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.klL2I17BuTsNjoHAPPemnAHaEn%26pid%3DApi&f=1"
  },
  {
    name: "kimbab",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ay3kZ7klIDPbNrS8dc4GXAHaEe%26pid%3DApi&f=1"
  },
  {
    name: "kimchi",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffoodtoglow.files.wordpress.com%2F2016%2F10%2Fkimchi1.jpg%3Fw%3D1200&f=1&nofb=1"
  },
]

function App() {
  return (
    <div>
      {foodIlLike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
