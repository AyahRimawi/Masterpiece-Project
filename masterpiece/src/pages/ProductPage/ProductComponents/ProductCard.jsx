// import React from "react";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Typography,
//   IconButton,
// } from "@material-tailwind/react";
// import { ShoppingCart } from "lucide-react";
// import Favorite from "../ProductComponents/Favorite";

// const ProductCard = ({ product }) => {
//   const { _id, name, price, overviewPicture } = product;

//   return (
//     <Card className="w-full max-w-[18rem] shadow-lg hover:shadow-xl transition-shadow duration-300">
//       <CardHeader floated={false} color="blue-gray" className="relative h-64">
//         <img
//           src={overviewPicture}
//           alt={name}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/20" />
//         <Favorite productId={_id} />
//       </CardHeader>
//       <CardBody>
//         <Typography variant="h5" color="blue-gray" className="mb-2 font-medium">
//           {name}
//         </Typography>
//         <div className="flex justify-between items-center">
//           <Typography variant="h6" color="blue-gray">
//             JD {price.toFixed(2)}
//           </Typography>
//           <IconButton color="blue" className="rounded-full p-2">
//             <ShoppingCart className="h-5 w-5" />
//           </IconButton>
//         </div>
//       </CardBody>
//     </Card>
//   );
// };

// export default ProductCard;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Typography,
//   Button,
// } from "@material-tailwind/react";
// import { Heart, ShoppingCart } from "lucide-react";

// const ProductCard = ({ product }) => {
//   const { _id, name, variants } = product;
//   const [selectedVariant, setSelectedVariant] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (variants && variants.length > 0) {
//       setSelectedVariant(variants[Math.floor(Math.random() * variants.length)]);
//     }
//   }, [variants]);

//   const handleColorClick = (variantId) => {
//     navigate(`/product/${_id}?variant=${variantId}`);
//   };

//   if (!selectedVariant) return null;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Card className="w-full max-w-[18rem] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
//         <CardHeader floated={false} color="blue-gray" className="relative h-64">
//           <img
//             src={selectedVariant.overviewPicture}
//             alt={name}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/20" />
//           <Button
//             color={product.isFavorite ? "red" : "gray"}
//             variant="text"
//             className="!absolute top-3 right-2 rounded-full bg-white/80 p-2 hover:bg-white"
//             onClick={() => console.log("Toggle favorite")}
//           >
//             <Heart
//               className={`h-6 w-6 ${product.isFavorite ? "fill-current" : ""}`}
//             />
//           </Button>
//         </CardHeader>
//         <CardBody>
//           <Typography
//             variant="h5"
//             color="blue-gray"
//             className="mb-2 font-medium truncate"
//           >
//             {name}
//           </Typography>
//           <div className="flex justify-between items-center mb-2">
//             <Typography variant="h6" color="blue-gray">
//               JD {selectedVariant.price.toFixed(2)}
//             </Typography>
//             <Button color="blue" className="rounded-full p-2">
//               <ShoppingCart className="h-5 w-5" />
//             </Button>
//           </div>
//           <div className="flex space-x-2">
//             {variants.map((variant) => (
//               <Button
//                 key={variant._id}
//                 color="gray"
//                 variant="text"
//                 size="sm"
//                 className="p-1 min-w-0"
//                 style={{ backgroundColor: variant.color }}
//                 onClick={() => handleColorClick(variant._id)}
//               />
//             ))}
//           </div>
//         </CardBody>
//       </Card>
//     </motion.div>
//   );
// };

// export default ProductCard;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Heart, ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  const { _id, name, variants } = product;
  const [selectedVariant, setSelectedVariant] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (variants && variants.length > 0) {
      setSelectedVariant(variants[0]); // Select the first variant by default
    }
  }, [variants]);

  const handleColorClick = (variantId) => {
    const variant = variants.find((v) => v._id === variantId);
    setSelectedVariant(variant);
  };

  const handleProductClick = () => {
    navigate(`/product/${_id}`);
  };

  if (!selectedVariant) return null;

  return (
    <Card className="w-full max-w-[300px] mx-auto">
      <CardHeader shadow={false} floated={false} className="h-60">
        <img
          src={selectedVariant.overviewPicture}
          alt={name}
          className="w-full h-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between mb-2">
          <Typography color="blue-gray" className="font-medium">
            {name}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            JD {selectedVariant.price.toFixed(2)}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {selectedVariant.color} - {selectedVariant.size}
        </Typography>
        <div className="flex items-center gap-3 mt-3">
          {variants.map((variant) => (
            <div
              key={variant._id}
              className={`w-6 h-6 rounded-full cursor-pointer border-2 ${
                selectedVariant._id === variant._id
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
              style={{ backgroundColor: variant.color.toLowerCase() }}
              onClick={() => handleColorClick(variant._id)}
            />
          ))}
        </div>
        <div className="flex items-center gap-3 mt-4">
          <Button
            size="sm"
            color="gray"
            variant="outlined"
            className="flex items-center gap-2"
            onClick={() => console.log("Toggle favorite")}
          >
            <Heart size={16} />
            Favorite
          </Button>
          <Button
            size="sm"
            color="blue"
            className="flex items-center gap-2"
            onClick={handleProductClick}
          >
            <ShoppingCart size={16} />
            View Details
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductCard;