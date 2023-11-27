import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import { useState, useEffect } from "react";

import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import RecGameCard from "../components/shared/RecGameCard";

export default function Games() {
  const [games, setGames] = useState<any>([]);

  useEffect(() => {
    fetch("https://backend-production-6194.up.railway.app/api/games")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <MDBRow className="row-cols-1 row-cols-md-4 g-4 mb-5">
        {games.map((game: any) => {
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
      <Footer />
    </>
  );
}
