import React from "react";

const HelloWorld = () => {
  const Hello = "Hello world";
  const isTrue = true;

  return (
    <div className="Hola">
      <h1>{Hello}</h1>
      <h2>Jsx in React</h2>
      <img
        src="https://arepa.s3.amazonaws.com/react.png"
        alt="react"
        height="200px"
      />
      {isTrue ? <h4>Verdadero</h4> : <h5>Falso</h5>}
      {isTrue && <h4>Verdadero</h4>}
    </div>
  );
};

export default HelloWorld;
