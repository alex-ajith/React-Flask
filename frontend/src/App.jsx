import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/greet")
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  });

  return (
    <>
      <div>
        <p>{message ? message : "loading..."}</p>
      </div>
    </>
  );
}

export default App;
