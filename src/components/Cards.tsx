import { useNavigate } from "react-router-dom";

const Cards = ({ item }: { item: any }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/book/${item._id}`, { state: { book: item } });
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/book/${item._id}`, { state: { book: item } });
  };

  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div 
          className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border cursor-pointer"
          onClick={handleCardClick}
        >
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title contents">
              {item.name}
              <div className="badge badge-accent">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between items-center">
              <div className="badge badge-outline">${item.price}</div>
              <button 
                className="btn btn-outline rounded-full btn-xs btn-accent"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
