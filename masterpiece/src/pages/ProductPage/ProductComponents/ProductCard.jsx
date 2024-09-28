import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { ShoppingCart } from "lucide-react";
import Favorite from "../ProductComponents/Favorite";

const ProductCard = ({ product }) => {
  const { _id, name, price, overviewPicture } = product;

  return (
    <Card className="w-full max-w-[18rem] shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader floated={false} color="blue-gray" className="relative h-64">
        <img
          src={overviewPicture}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/20" />
        <Favorite productId={_id} />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 font-medium">
          {name}
        </Typography>
        <div className="flex justify-between items-center">
          <Typography variant="h6" color="blue-gray">
            JD {price.toFixed(2)}
          </Typography>
          <IconButton color="blue" className="rounded-full p-2">
            <ShoppingCart className="h-5 w-5" />
          </IconButton>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
