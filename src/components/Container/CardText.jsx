const CardText = ({ petText, petTitle }) => {
  return (
    <p className="font-semibold text-md text-gray-500">
      {petTitle} {petText ?? "Not available"}
    </p>
  );
};

export default CardText;
