import React, { useEffect, useState } from "react";
import Counter from "./Counter";

export default function App() {
  const [name, setName] = useState("Arjit Verma");
  const [count, setCount] = useState(1);
  //useEffect ===> it is to invoke side effects in your app
  //Side Effects examples
  // Fetching data from api
  // reading from local storage
  //registering and deregistering events

  //Structure of useEffect

  // useEffect(
  //   () => {
  //     // execute side effect
  //   },
  //   // optional dependency array
  //   [
  //     // 0 or more entries
  //   ]
  // );

  // useEffect(()=>{},[
  //   //array of dependencies
  //   //when any value in this array is changes . useEffect function
  //   // will run
  // ])

  //useEffect with no dependencies
  //This will run every time a component is rendered or rerendered
  useEffect(() => {
    console.log("This will run everytime component is rendered and rerendered");
  });

  //useEffect with empty dependency array
  //This will run only one time . When the component is rendered the first time
  useEffect(() => {
    console.log("This will run only once.");
  }, []);

  //useEffect with dependencies array
  //This will run the first time component is render. 
  //This will also run everytime value of dependencies is changed
  useEffect(()=>{
    console.log("Will run first time and when count is changed")
  },[count])


  return (
    <div>
      <p>Count:{count}</p> <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Change Count
      </button>
      <br />
      <button
        onClick={() => {
          setName("Rahul");
        }}
      >
        Change Name
      </button>
      <footer>Copyright 2023 {name}</footer>
    </div>
  );
}
