import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterRestaurantList(searchText, restaurantListsss) {
  const filterData = restaurantListsss.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
  return filterData;
}

const Body = () => {
  const [restaurantListsss, setRestaurantListsss] = useState(restaurantList);
  const [searchText, setSearchText] = useState();
  return (
    <>
      <div className=" bg-gray-200 p-6">
        <div className="container flex justify-center items-center px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <input
              type="text"
              className="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
              placeholder="Search for restaurants..."
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            ></input>
            <div className="absolute top-4 right-3">
              <i
                className="fa fa-search text-gray-400 z-20 hover:text-gray-500"
                onClick={() => {
                  var data = filterRestaurantList(
                    searchText,
                    restaurantListsss
                  );
                  console.log(data);
                  setRestaurantListsss(data);
                }}
              ></i>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap overflow-y-auto p-5">
        {restaurantListsss.map((res) => {
          return <RestaurantCard {...res.data} key={res.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
