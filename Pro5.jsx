import { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [timestring, setTimestring] = useState("");


  useEffect(() => {
    setInterval(() => {
      const h = new Date().getHours();
      const timestring = new Date().toLocaleTimeString();
      setText(
        h < 12 ? "Good Morning" :
        h < 17 ? "Good Afternoon" :
        h < 20 ? "Good Evening" : "Good Night"
      );
      setTimestring(timestring);
    }, 1000);
  }, []);

  return <div><h1>{timestring}</h1>
  <h1>{text}</h1></div>;
}

export default App;
