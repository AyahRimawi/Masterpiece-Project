// import React from "react";
// import CategoryPage from "../CategoryComponents/CategoryPage";

// export const WomenCard = () => (
//   <CategoryPage
//     category="Women"
//     subcategories={["Pants", "Dress", "Shirt", "Skirt", "Pajamas"]}
//   />
// );

// export const MenCard = () => (
//   <CategoryPage
//     category="Men"
//     subcategories={["Pants", "Shirt", "Suit", "Pajamas"]}
//   />
// );

// export const KidsCard = () => (
//   <CategoryPage category="Kids" subcategories={["Boy", "Girl", "Baby"]} />
// );

// export const DressesCard = () => (
//   <CategoryPage
//     category="Dresses"
//     subcategories={["Evening Dresses", "Hijab Dresses"]}
//   />
// );

// export const SaleCard = () => (
//   <CategoryPage
//     category="Sale"
//     subcategories={["Women", "Men", "Kids", "Dresses"]}
//   />
// );

// export const BabyCard = () => (
//   <CategoryPage category="Kids" subcategories={["Baby"]} />
// );



import React from "react";
import CategoryPage from "./CategoryPage";

export const WomenCard = ({ initialSubcategory }) => (
  <CategoryPage
    category="Women"
    subcategories={["Pants", "Dress", "Shirt", "Skirt", "Pajamas"]}
    initialSubcategory={initialSubcategory}
  />
);

export const MenCard = ({ initialSubcategory }) => (
  <CategoryPage
    category="Men"
    subcategories={["Pants", "Shirt", "Suit", "Pajamas"]}
    initialSubcategory={initialSubcategory}
  />
);

export const KidsCard = () => (
  <CategoryPage category="Kids" subcategories={["Boy", "Girl", "Baby"]} />
);

export const BabyCard = () => (
  <CategoryPage category="Kids" subcategories={["Baby"]} />
);

export const DressesCard = () => (
  <CategoryPage
    category="Dresses"
    subcategories={["Evening Dresses", "Hijab Dresses"]}
  />
);

export const SaleCard = () => (
  <CategoryPage
    category="Sale"
    subcategories={["Women", "Men", "Kids", "Dresses"]}
  />
);