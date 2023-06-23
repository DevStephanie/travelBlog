import { useState } from "react";

function MyButton() {
  const [count, setCount]= useState(0);
  function handleClick(){ 
    setCount(count +1);
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome Travel Blog: "Oasis" </h1>
      <MyButton />
    </div>
  );
}


