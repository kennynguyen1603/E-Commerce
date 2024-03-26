// import React from "react";
import classNames from "classnames";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
function CustomCarousel({ items }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative h-full w-full">
      <div className="flex snap-mandatory overflow-y-hidden scroll-smooth rounded-lg">
        {items.map((item: any, index: number) => (
          <div
            key={index}
            className={classNames(
              "main-image",
              // "main-image absolute -translate-x-1/2 -translate-y-1/2",
              {
                "w-full flex-shrink-0 transform cursor-default snap-center":
                  index === currentIndex,
                hidden: index !== currentIndex,
              }
            )}
          >
            <img src={item.imageURL} alt={item.alt} className="" />
          </div>
        ))}
      </div>
      <div className="w-full absolute bottom-0 left-1/2 flex -translate-x-1/2 justify-between">
        {items.map((item: any, index: number) => (
          <div
            key={index}
            className={classNames("product-thumbnail", {
              "active-thumbnail": index === currentIndex,
              "unactive-thumbnail": index !== currentIndex,
            })}
            onClick={() => setCurrentIndex(index)}
          >
            <img src={item.imageURL} alt={item.alt} />
          </div>
        ))}
      </div>
      <button
        className="turnPic left px-4 focus:outline-none"
        onClick={goToPreviousSlide}
      >
        <GrLinkPrevious className="turnPic-btn text-white" />
      </button>
      <button
        className="turnPic right px-4 focus:outline-none"
        onClick={goToNextSlide}
      >
        <GrLinkNext className="turnPic-btn text-white" />
      </button>
    </div>
  );
}

export default CustomCarousel;
