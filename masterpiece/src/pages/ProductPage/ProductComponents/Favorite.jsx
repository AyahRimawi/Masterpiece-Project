import React, { useState } from "react";
import { IconButton } from "@material-tailwind/react";
import { Heart } from "lucide-react";

const Favorite = ({ productId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // هنا يمكنك إضافة منطق لحفظ حالة المفضلة في الخادم
    console.log(
      `Toggle favorite for product ${productId}. New state: ${!isFavorite}`
    );
  };

  return (
    <IconButton
      color={isFavorite ? "red" : "gray"}
      variant="text"
      className="!absolute top-3 right-2 rounded-full bg-white/80 p-2 hover:bg-white"
      onClick={toggleFavorite}
    >
      <Heart className={`h-6 w-6 ${isFavorite ? "fill-current" : ""}`} />
    </IconButton>
  );
};

export default Favorite;
