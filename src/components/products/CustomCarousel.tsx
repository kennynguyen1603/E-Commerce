// import React from "react";
import classNames from "classnames";
import { GrPrevious, GrNext } from "react-icons/gr";
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
        className="absolute bottom-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none"
        onClick={goToPreviousSlide}
      >
        <GrPrevious />
      </button>
      <button
        className="absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none"
        onClick={goToNextSlide}
      >
        <GrNext />
      </button>
    </div>
  );
}

export default CustomCarousel;
