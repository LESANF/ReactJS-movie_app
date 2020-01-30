import React from "react";

function Food({ fav }) {
  return <h2>I like {fav}</h2>;
}

function App() {
  return (
    <div>
      <h1>hello</h1>
      <Food fav="kimchi" />
      <Food fav="potato" />
      <Food fav="apple" />
    </div>
  );
}

export default App;
