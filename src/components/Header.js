import logo from "../assets/img/kitchen-logo.png";
const Header = () => {
  return (
    <div className="flow-root bg-gray-700 text-white text-center shadow-xl h-[10%]">
      {/* fixed w-full border border-gray-500 shadow-lg bg-blue-300 */}
      <div className="float-left flex">
        <a href="/">
          <img alt="logo" src={logo} className="w-[5rem]"></img>
        </a>
        <div className="font-bold pt-6">Hema's Kitchen</div>
      </div>
      <div className="float-right pt-[26px]">
        <ul className="flex space-x-4 mr-10">
          <li>
            <i className="fa-solid fa-house"></i>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
            <i className="fa-solid fa-phone-volume"></i>
          </li>
          <li>
            <i className="fa-solid fa-user"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
