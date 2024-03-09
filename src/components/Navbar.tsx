import { Link } from "react-router-dom";
const Navbar = ({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <nav className="h-20 sticky inset-0 flex item-center z-20 justify-between bg-white shadow shadow-slate-300">
      <div className="container mx-auto flex items-center w-full justify-between">
        <div className="flex items-center gap-20">
          <Link to="/">
            <img
              src="https://pixabay.com/static/img/logo.svg"
              alt="pixabay logo"
              className="w-32"
            />
          </Link>
          <div className="h-full flex items-center w-full">
            <div className="bg-slate-500/20 px-6 py-2.5 rounded-lg flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>

              <input
                placeholder="Search"
                className="w-full outline-none bg-transparent "
                value={searchTerm}
                onChange={handleSearch}
              />
              <button className="bg-white rounded-md text-sm text-nowrap px-4 py-2">
                Search Image
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2">
            <span className="">Explore</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="h-8 w-8 bg-[#02be6e] rounded-full"></div>
          <button className="bg-[#02be6e] rounded-full flex items-center gap-4 px-4 py-2.5 text-white text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>

            <span>Upload</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
