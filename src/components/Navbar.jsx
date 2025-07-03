const Navbar = () => {
  return (
    <nav className="h-[5rem] bg-amber-600 flex justify-between items-center px-8">
      <div className="text-[3rem] font-bold">LOGO</div>
      <div className="">
        <ul className="flex gap-8 text-xl ">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex gap-4">
        <button className="rounded-md hover:bg-blue-800 px-4 p-2 text-lg font-bold bg-blue-500">
          login
        </button>
        <button className="rounded-md hover:bg-red-800 cursor-pointer px-4 p-2 text-lg font-bold bg-red-500">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
