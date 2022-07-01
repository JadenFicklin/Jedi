import React, { useState } from "react";

function Jedi() {
  const [jedi, setJedi] = useState("");
  const [clicked, setClicked] = useState(false);

  const findoutFunction = () => {
    let randomNumber = Math.random();
    if (randomNumber > 0.5) {
      setJedi("Jedi");
      setClicked(true);
    } else {
      setJedi("Sith");
      setClicked(true);
    }
    console.log(randomNumber);
  };

  return (
    <>
      <h1>Are you a Jedi or Sith?</h1>
      <button onClick={() => findoutFunction()}>Find out</button>
      {clicked ? <h2>you are a {jedi}!</h2> : null}
    </>
  );
}

export default Jedi;
