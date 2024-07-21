import React, { useState, useEffect, useCallback } from "react";
import styles from "./Jokes.module.css";
import JokeList from "../components/Jokes/JokeList";
import AddJoke from "../components/Jokes/AddJoke";

const Jokes = () => {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJokesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://http-learn-11453-default-rtdb.firebaseio.com/jokes.json"
      );

      if (!response.ok) {
        throw new Error("Upps, something went wrong :(");
      }

      const data = await response.json();
      console.log(data);

      let loadedJokes = [];

      for (const key in data) {
        loadedJokes.push({
          id: key,
          type: data[key].type,
          setup: data[key].setup,
          punchline: data[key].punchline,
        });
      }

      setJokes(loadedJokes);
    } catch (e) {
      setError(e.message);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchJokesHandler();
  }, [fetchJokesHandler]);

  async function addJokeHandler(joke) {
    try {
      const response = await fetch(
        "https://http-learn-11453-default-rtdb.firebaseio.com/jokes.json",
        {
          method: "POST",
          body: JSON.stringify(joke), //объект data преобразуем в json.
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if(!response.ok){
        throw new Error("upps");
      }
      const data = await response.json();
      console.log(data);
    } catch (e) {
      setError(e.message);
    }
  }

  let content = <p>Jokes is not founded</p>;

  if (jokes !== null && jokes !== undefined && jokes.length > 0) {
    // проверяем если jokes не пустой то проверяем его длину
    content = <JokeList jokes={jokes} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddJoke onAddJoke={addJokeHandler} />
      </section>
      <section>
        <button onClick={fetchJokesHandler}>Fetch Jokes</button>
      </section>
      <section>
        {content}
        {/* {!isLoading && jokes.length > 0 && <JokeList jokes={jokes} />}
        {!isLoading && jokes.length === 0 && !error && <p>Jokes is not founded</p>}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>} */}
      </section>
    </React.Fragment>
  );
};

export default Jokes;

//API application programming interface
