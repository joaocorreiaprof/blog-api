import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Blog API</h1>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </div>
  );
};

export default App;
