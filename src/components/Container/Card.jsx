import CardText from "./CardText";
import { SecondaryButton } from "./SecondaryButton";

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
        <CardText petTitle={"Birth :"} petText={date_of_birth} />
        <CardText petTitle={"Gender:"} petText={gender} />
        <CardText
          petTitle={"Price:"}
          petText={price ? "$" + price : undefined}
        />
      </div>
      {/* Buttons */}
      <div className="flex justify-between px-2">
        <SecondaryButton btnText="Like" />
        <SecondaryButton btnText="Adopt" />
        <SecondaryButton btnText="Details" />
      </div>
    </div>
  );
}
