import CardText from "./CardText";

export default function Card({ pet }) {
  console.log(pet);
  const {
    date_of_birth,
    breed,
    price,
    image,
    gender,
    pet_name,
    vaccinated_status,
  } = pet;
  return (
    <div className="border p-3 rounded-lg">
      <img
        className=" w-full h-[150px] mx-auto object-cover rounded-lg"
        src={image}
      />
      <div>
        <h2 className="font-bold text-xl my-2">{pet_name}</h2>
        <CardText petTitle={"Breed: "} petText={breed} />
        {/* <p>Birth: {date_of_birth ?? "Not available"} </p> */}
        <CardText petTitle={"Birth :"} petText={date_of_birth} />
        {/* <p>Gender: {gender ?? "Not available"} </p> */}
        <CardText petTitle={"Gender:"} petText={gender} />
      </div>
    </div>
  );
}
