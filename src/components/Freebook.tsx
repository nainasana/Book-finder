import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import book from "../data/booklist.json";

import Cards from "./Cards";

const SliderComponent = Slider as any;

const Freebook = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 mb-12">
        <div>
          <h1 className="font-semibold text-xl pb-2">Featured Books</h1>
          <p>
            Discover our collection of books across various categories including technology, 
            science, arts, and more. Find your next great read!
          </p>
        </div>

        <div>
          <SliderComponent {...settings}>
            {book.map((item, idx) => (
              <div key={`slider${idx}`}>
                <Cards item={item} />
              </div>
            ))}
          </SliderComponent>
        </div>
      </div>
    </>
  );
};
export default Freebook;
