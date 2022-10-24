import React, { useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../context/categories.context";

const Shop = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <div>
      {Object.keys(categories).map((title, i) => (
        <CategoryPreview key={i} title={title} products={categories[title]} />
      ))}
    </div>
  );
};

export default Shop;
