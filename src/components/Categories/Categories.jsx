import { useEffect } from "react";
import { useState } from "react";
import Category from "./Category";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data.categories));
  }, []);
  return (
    <div className="m-10 container mx-auto text-center flex gap-4 justify-center flex-wrap ">
      {categories.map((category) => (
        <Category
          categoryImage={category.category_icon}
          categoryText={category.category}
        />
      ))}
    </div>
  );
}
