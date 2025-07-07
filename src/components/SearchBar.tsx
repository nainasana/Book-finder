import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bookData from "../data/booklist.json";

interface Book {
  _id: number;
  name: string;
  title: string;
  price: number;
  category: string;
  image: string;
}

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredBooks([]);
      setShowResults(false);
      return;
    }

    const filtered = bookData.filter((book: Book) =>
      book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);
    setShowResults(true);
  }, [searchTerm]);

  const handleBookClick = (book: Book) => {
    setSearchTerm("");
    setShowResults(false);
    navigate(`/book/${book._id}`, { state: { book } });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setShowResults(false);
    }, 200);
  };

  return (
    <div className="relative">
      <label className="px-3 py-2 border rounded-md flex items-center gap-2 bg-neutral-100 dark:bg-slate-800 dark:text-white">
        <input
          type="text"
          className="grow outline-none rounded-md px-1 bg-transparent dark:text-white"
          placeholder="Search books..."
          value={searchTerm}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

      {/* Search Results Dropdown */}
      {showResults && filteredBooks.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
          {filteredBooks.map((book) => (
            <div
              key={book._id}
              className="p-3 hover:bg-gray-100 dark:hover:bg-slate-700 cursor-pointer border-b border-gray-100 dark:border-gray-600 last:border-b-0"
              onClick={() => handleBookClick(book)}
            >
              <div className="flex items-center gap-3">
                <img
                  src={book.image}
                  alt={book.name}
                  className="w-12 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm dark:text-white">
                    {book.name}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 truncate">
                    {book.title}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                      {book.category}
                    </span>
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                      ${book.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No Results */}
      {showResults && searchTerm.trim() !== "" && filteredBooks.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg z-50 p-3">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            No books found for "{searchTerm}"
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchBar; 