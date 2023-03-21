import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterRestaurantList(searchText, restaurantListsss) {
  const filterData = restaurantListsss.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [restaurantListsss, setRestaurantListsss] = useState(); // all restaurant data
  const [filteredData, setFilteredData] = useState();
  const [searchText, setSearchText] = useState();

  useEffect(() => {
    getRestaurants();
  }, [searchText]);

  async function getRestaurants() {
    try {
      setRestaurantListsss(restaurantList); // alldata
      setFilteredData(restaurantList); //alldata

      // const data = await fetch(
      //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      // );
      // const json = await data.json();
      // setRestaurantListsss(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  }

  if (!restaurantListsss) return null;

  if (!filteredData) return <h1>No restaurants to display!!</h1>;
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
            <div
              className="absolute top-4 right-3"
              onClick={() => {
                var data = filterRestaurantList(searchText, restaurantListsss);
                setFilteredData(data);
              }}
            >
              <a className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300 cursor-pointer">
                <span className="relative">Search</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap overflow-y-auto p-5">
        {filteredData?.length === 0 ? (
          <h1>No match found</h1>
        ) : (
          filteredData?.map((res) => {
            return <RestaurantCard {...res.data} key={res.data.id} />;
          })
        )}
      </div>
    </>
  );
};

export default Body;
