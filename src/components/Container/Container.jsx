import { useEffect, useState } from "react";
import Card from "./Card";

const Container = () => {
  const [allPets, setAllPets] = useState([]);
  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/peddy/pets`).then(
      (response) => response.json().then((data) => setAllPets(data.pets))
    );
  }, []);

  const slicedPets = allPets.slice(0, 6);
  console.log(slicedPets);
  return (
    <main className="px-5 container mx-auto grid grid-cols-1 md:grid-cols-4 gap-3 py-7">
      <section className="col-span-3 gap-3 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {allPets.map((pet) => (
          <Card pet={pet} />
        ))}
      </section>
      <section className="border grid grid-cols-2 w-full h-fit rounded-xl">
        {slicedPets.map((pet) => (
          <img className="p-2 rounded-xl" src={pet.image} />
        ))}
      </section>
    </main>
  );
};

export default Container;
