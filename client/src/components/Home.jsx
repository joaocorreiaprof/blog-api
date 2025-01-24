import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <main>
      <h1>Blog API</h1>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
      <p>
        Miles in Mind: Traveling Through Her Stories || Wandering Through Her
        Eyes
      </p>
    </main>
  );
};

export default Home;
