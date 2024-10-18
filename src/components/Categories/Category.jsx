const Category = ({ categoryText, categoryImage }) => {
  return (
    <button className="border border-[rgba(14, 122, 129, 0.15)] rounded-lg px-5 py-2 w-[150px] m-2 font-semibold flex items-center gap-2">
      <img className="w-8" src={categoryImage} alt="" />
      {categoryText}
    </button>
  );
};

export default Category;
