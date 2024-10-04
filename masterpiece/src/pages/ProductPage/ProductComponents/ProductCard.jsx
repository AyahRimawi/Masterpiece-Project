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
//       setSelectedVariant(variants[0]); // Select the first variant by default
//     }
//   }, [variants]);

//   const handleColorClick = (variantId) => {
//     const variant = variants.find((v) => v._id === variantId);
//     setSelectedVariant(variant);
//   };

//   const handleProductClick = () => {
//     navigate(`/product/${_id}`);
//   };

//   if (!selectedVariant) return null;

//   return (
//     <Card className="w-full max-w-[300px] mx-auto">
//       <CardHeader shadow={false} floated={false} className="h-60">
//         <img
//           src={selectedVariant.overviewPicture}
//           alt={name}
//           className="w-full h-full object-cover"
//         />
//       </CardHeader>
//       <CardBody>
//         <div className="flex items-center justify-between mb-2">
//           <Typography color="blue-gray" className="font-medium">
//             {name}
//           </Typography>
//           <Typography color="blue-gray" className="font-medium">
//             JD {selectedVariant.price.toFixed(2)}
//           </Typography>
//         </div>
//         <Typography
//           variant="small"
//           color="gray"
//           className="font-normal opacity-75"
//         >
//           {selectedVariant.color} - {selectedVariant.size}
//         </Typography>
//         <div className="flex items-center gap-3 mt-3">
//           {variants.map((variant) => (
//             <div
//               key={variant._id}
//               className={`w-6 h-6 rounded-full cursor-pointer border-2 ${
//                 selectedVariant._id === variant._id
//                   ? "border-blue-500"
//                   : "border-gray-300"
//               }`}
//               style={{ backgroundColor: variant.color.toLowerCase() }}
//               onClick={() => handleColorClick(variant._id)}
//             />
//           ))}
//         </div>
//         <div className="flex items-center gap-3 mt-4">
//           <Button
//             size="sm"
//             color="gray"
//             variant="outlined"
//             className="flex items-center gap-2"
//             onClick={() => console.log("Toggle favorite")}
//           >
//             <Heart size={16} />
//             Favorite
//           </Button>
//           <Button
//             size="sm"
//             color="blue"
//             className="flex items-center gap-2"
//             onClick={handleProductClick}
//           >
//             <ShoppingCart size={16} />
//             View Details
//           </Button>
//         </div>
//       </CardBody>
//     </Card>
//   );
// };

// export default ProductCard;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

  // Get unique colors
  const uniqueColors = Array.from(
    new Set(variants.map((variant) => variant.color))
  );

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
        <div className="flex items-center gap-3 mt-3">
          {uniqueColors.map((color, index) => (
            <div
              key={index}
              className={`w-6 h-6 rounded-full cursor-pointer border-2 ${
                selectedVariant.color.toLowerCase() === color.toLowerCase()
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
              style={{ backgroundColor: color.toLowerCase() }}
              onClick={() =>
                handleColorClick(variants.find((v) => v.color === color)._id)
              }
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
