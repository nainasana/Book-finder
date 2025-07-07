import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import png1 from "../assets/slides/1.png";
import png2 from "../assets/slides/2.png";
import png3 from "../assets/slides/3.png";
import png4 from "../assets/slides/4.png";
import png5 from "../assets/slides/5.png";

const SliderComponent = Slider as any;

const LeftSlider = () => {
  const images = [png1, png2, png3, png4, png5];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed in milliseconds
    arrows: false, //Disable arrow navigation
  };
  return (
    <>
      {/* Left Section for Image Slider */}
      <div className="w-full lg:w-1/3 bg-slate-600 flex flex-col justify-center items-center text-white h-19 hidden lg:flex">
        <div className="flex justify-center items-center h-20">
          <h3>Welcome to Store</h3>
        </div>
        <div className="w-96 h-auto">
          <SliderComponent {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full"
                />
              </div>
            ))}
          </SliderComponent>
        </div>
      </div>
    </>
  );
};

export default LeftSlider;
