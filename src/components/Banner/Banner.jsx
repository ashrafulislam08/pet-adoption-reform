import bannerImg from "../../assets/pet.webp";
import Button from "../Button/Button";
const Banner = () => {
  return (
    <section>
      <div className="text-center">
        <h3 className="text-gray-400 text-lg">
          Bringing Families Together ❤️‍🔥{" "}
        </h3>
        <h1 className="font-bold text-5xl lg:w-[40%] mx-auto text-center my-3 px-2">
          Your Path to Adoption Starts Here
        </h1>
        <p className="text-md text-gray-600 px-2 md:w-2/3 mx-auto text-center my-3">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a.
        </p>
        <Button text={"View More"} />
        <img className="mx-auto" src={bannerImg} alt="" />
      </div>
    </section>
  );
};

export default Banner;
