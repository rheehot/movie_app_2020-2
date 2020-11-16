import React from 'react';

function Food({fav}) {
return <h1>I LIKE {fav}</h1>
}
function App() {
  return (
    <div>
      <h1>HELLO HELLO</h1>
      <Food fav="coffee" />
      <Food fav="pork" />
      <Food fav="gogi" />
      <Food fav="kimbab" />
      <Food fav="Kimchi"/>
    </div>
  );
}

export default App;
