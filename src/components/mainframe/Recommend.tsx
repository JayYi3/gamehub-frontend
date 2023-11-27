import { useState, useEffect } from "react";

import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import RecGameCard from "../shared/RecGameCard";

export default function Recommend() {
  const [games, setGames] = useState<any>([]);
  const shuffle = (array: any) => {
    let shuffledArray = array.slice(); // Create a copy of the array to avoid direct mutation
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  useEffect(() => {
    fetch("http://backend.railway.internal/api/games")
      .then((res) => res.json())
      .then((data) => {
        setGames(shuffle(data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    // use the first 6 games for recommendation
    <MDBRow className="row-cols-1 row-cols-md-3 g-4 mb-5">
      {games.slice(0, 6).map((game: any) => {
        return (
          <MDBCol>
            <RecGameCard
              name={game.name}
              image={game.image}
              description={game.description}
              id={game.id}
            />
          </MDBCol>
        );
      })}
    </MDBRow>
  );
}
