import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import dress1 from "../../assets/dress1.png";
import love1 from "../../assets/love1.png";
import addToCart from "../../assets/addToCart.png";

const ProductCard = ({ image, name, price }) => (
  <Card className="w-full max-w-[15rem] shadow-lg">
    <CardHeader floated={false} color="blue-gray" className="relative">
      <img src={image} alt={name} className="w-full h-full object-cover" />
      <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
      <IconButton
        color="red"
        variant="text"
        className="!absolute top-3 right-2 rounded-full"
      >
        <img className="object-cover" src={love1} alt="Favorite" />
      </IconButton>
    </CardHeader>
    <CardBody>
      <div className="mb-3 flex items-center justify-between">
        <Typography variant="h5" color="blue-gray" className="font-medium">
          {name}
        </Typography>
      </div>
      <div className="group flex flex-wrap justify-between items-center gap-3">
        <Tooltip content="Price">
          <span className="cursor-pointer rounded-full text-2xl p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
            $ {price}
          </span>
        </Tooltip>
        <Tooltip content="Add To Cart">
          <img className="object-fit w-10" src={addToCart} alt="Add to cart" />
        </Tooltip>
      </div>
    </CardBody>
  </Card>
);

export function SalesCard() {
  const products = [
    { id: 1, name: "Summer Short Dress", price: 30, image: dress1 },
    { id: 2, name: "Summer Short Dress", price: 30, image: dress1 },
    { id: 3, name: "Summer Short Dress", price: 30, image: dress1 },
    { id: 4, name: "Summer Short Dress", price: 30, image: dress1 },
    { id: 5, name: "Summer Short Dress", price: 30, image: dress1 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-8 justify-items-center">
      {products.map((product) => (
        <a
          key={product.id}
          href="/ProductPage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProductCard
            image={product.image}
            name={product.name}
            price={product.price}
          />
        </a>
      ))}
    </div>
  );
}
