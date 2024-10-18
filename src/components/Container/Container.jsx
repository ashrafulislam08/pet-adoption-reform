import { useEffect, useState } from "react";
import Card from "./Card";

const Container = () => {
  const [allPets, setAllPets] = useState([]);
  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/peddy/pets`).then(
      (response) => response.json().then((data) => setAllPets(data.pets))
    );
  }, []);
  return (
    <main className=" container mx-auto grid grid-cols-1 md:grid-cols-4 gap-3 py-7">
      <section className="col-span-3 gap-3 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {allPets.map((pet) => (
          <Card pet={pet} />
        ))}
      </section>
      <section>
        <img src={allPets[0].image} />
      </section>
    </main>
  );
};

export default Container;
