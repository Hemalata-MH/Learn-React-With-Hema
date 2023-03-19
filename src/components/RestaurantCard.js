import { CLOUDINARY_IMG_URL } from "../constants";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  ratings,
  deliveryTime,
  costForTwoString,
}) => (
  <div className="border border-gray-500 m-9 w-[16%] shadow-2xl rounded-lg ">
    <div>
      <img
        alt="restaurant-name"
        src={CLOUDINARY_IMG_URL + cloudinaryImageId}
        className="h-[10%] object-cover"
      ></img>
    </div>

    <div className="p-1">
      <span className="font-bold ">{name}</span>
      <p className="text-[13px] pt-1 font-semibold">{cuisines.join(",")}</p>
      <ul className="flex justify-between text-[13px] pt-3">
        <li className="bg-green-500 text-cyan-50">
          <i className="fa-regular fa-star"></i>
          <span className="p-1 font-semibold">4.1</span>
        </li>
        <li className="font-semibold">{deliveryTime} min</li>
        <li className="font-semibold">{costForTwoString}</li>
      </ul>
    </div>
  </div>
);

export default RestaurantCard;
