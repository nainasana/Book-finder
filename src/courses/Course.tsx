import { Link } from "react-router-dom";
import Cards from "../components/Cards";
// import dataList from "../data/booklist.json";
import book from "../data/booklist.json";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Course = () => {
  return (
    <>
      <div className="`max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="pt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl md:mt-28 mt-6">
            We're delighted to have you{" "}
            <span className="text-gray-500">Here! :)</span>
          </h1>
          <p className="mt-8 md:mt-12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur eligendi animi laboriosam modi dolorem rem, aperiam quos
            maiores qui, placeat explicabo odit iste vitae quo sint autem. Vel,
            saepe dolor. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Consectetur eligendi animi laboriosam modi dolorem rem,
            aperiam quos maiores qui, placeat explicabo odit iste vitae quo sint
            autem. Vel, saepe dolor.
          </p>
          <Link to="/">
            <button className="btn btn-sm mt-6 btn-accent px-4 py-2 rounded-md duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 ">
          {book.map((item, idx) => (
            <div key={`courses_${idx}`}>
              <Cards item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
