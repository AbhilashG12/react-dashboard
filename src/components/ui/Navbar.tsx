
const Navbar = () => {
  return (
    <nav className=" border-gray-500 rounded-4xl shadow-xl mt-5 bg-gray-200 flex flex-row h-20">
        <ul className=" p-4 ml-5 flex flex-row gap-250 mt-2">
            <li><h1 className="text-2xl font-bold font-serif ">Welcome to Dashboard</h1></li>
            <li><input className="border rounded-xl h-9 bg-white shadow pl-2" type="search" placeholder="Search here . . . ." /></li>
        </ul>
    </nav>
  )
}

export default Navbar
