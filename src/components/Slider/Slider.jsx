import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

let sliderImages = [
    "https://assets.ajio.com/cms/AJIO/WEB/05062023-UHP-D-Main-P4-ONLYJackJones-Min60extra35.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/05062023-UHP-D-Main-P5-LeeWrangler-Min50extra25.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/01062023-UHP-Mainbanner-D-5090.gif",
];

const SliderNavigationButtons = ({ handleSliderNavigation }) => {
    return (
        <div className=" absolute  w-full h-full flex justify-between items-center ">
            <span
                className="  w-12 h-12 bg-white rounded-full flex justify-center items-center border-2 border-rose-500 hover:bg-rose-500 group"
                onClick={() => handleSliderNavigation("left")}
            >
                <ChevronLeftIcon className="h-10 w-10 cursor-pointer text-red-500 group-hover:text-white" />
            </span>
            <span
                className=" w-12 h-12 bg-white rounded-full flex justify-center items-center border-2 hover:bg-rose-500 border-rose-500 group"
                onClick={() => handleSliderNavigation("right")}
            >
                <ChevronRightIcon className="h-10 w-10 cursor-pointer text-rose-500 group-hover:text-white" />
            </span>
        </div>
    );
};

const Slider = () => {
    const [displayImage, setDisplayImage] = useState({
        imageIndex: 0,
        translateValue: 0,
    });

    const handleSliderNavigation = (clickedButton) => {
        if (clickedButton === "right") {
            if (displayImage.imageIndex === sliderImages.length - 1) {
                setDisplayImage({
                    imageIndex: 0,
                    translateValue: 0,
                });
            } else {
                setDisplayImage({
                    imageIndex: displayImage.imageIndex + 1,
                    translateValue: `-translate-x-[${
                        displayImage.imageIndex * 100 + 100
                    }%]`,
                });
            }
        }
        if (clickedButton === "left") {
            if (displayImage.imageIndex === 0) {
                setDisplayImage({
                    imageIndex: sliderImages.length - 1,
                    translateValue: `-translate-x-[${
                        sliderImages.length - 1
                    }00%]`,
                });
            } else {
                setDisplayImage({
                    imageIndex: displayImage.imageIndex - 1,
                    translateValue: `-translate-x-[${
                        displayImage.imageIndex * 100 - 100
                    }%]`,
                });
            }
        }
    };

    console.log("rendered");
    console.log(displayImage.imageIndex, displayImage.translateValue);
    return (
        <div className="relative min-w-full aspect-[144/47]  flex overflow-hidden ">
            <div
                className={`flex w-[300%] h-full  transition ${displayImage.translateValue}  ease-linear duration-500 `}
            >
                <img
                    src={sliderImages[0]}
                    alt=""
                    className="w-[100%]  object-cover"
                />

                <img
                    src={sliderImages[1]}
                    alt="iam image"
                    className="w-[100%]  object-cover"
                />

                <img
                    src={sliderImages[2]}
                    alt=""
                    className="w-[100%]  object-cover"
                />
            </div>
            <SliderNavigationButtons
                handleSliderNavigation={handleSliderNavigation}
            />
        </div>
    );
};
export default Slider;
