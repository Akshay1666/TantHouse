const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow">
      <h1 className="text-xl font-bold text-orange-500">TentHouse</h1>
      <button className="bg-orange-500 text-white px-4 py-2 rounded">
        Book Now
      </button>
    </nav>
  );
};

export default Navbar;