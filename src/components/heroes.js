import { useEffect, useState } from "react";
import Hero from "./hero"

function Heroes() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("hero") === null) {
        setHeroes("Loading...");
      } else {
        
        setHeroes(JSON.parse(localStorage.getItem("hero")));
      }
    } else {
      fetch(
        "https://gateway.marvel.com/v1/public/characters?ts=aymimadreelbicho&hash=fc0bde83eb39d45eb06f2910ac622a07&apikey=532b8260ae057436d7679fb4dd03488a"
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res.data.results);
          setHeroes(res.data.results);
          localStorage.setItem("hero", JSON.stringify(res.data.results));
        });
    }
  }, []);

  //<h1>{heroes}</h1>
  return (
    <div className="row">
      {heroes.map((hero) => (
        <Hero key={hero.id} hero={hero}  />
      ))}
    </div>
  );
}

export default Heroes;
