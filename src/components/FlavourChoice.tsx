import Image from "next/image";
import { FC, useRef } from "react";
import Carousel from "react-elastic-carousel";

import apple from "../../public/images/juices/apple.png";
import grape from "../../public/images/juices/grape.png";
import orange from "../../public/images/juices/orange.png";
import peach from "../../public/images/juices/peach.png";
import strawberry from "../../public/images/juices/strawberry.png";
import watermelon from "../../public/images/juices/watermelon.png";
import CarouselItem from "./CarouselItem";

type FlavourChoiceProps = {};

const FlavourChoice: FC<FlavourChoiceProps> = (props) => {
  const carouselRef = useRef(null);
  let resetTimeout: any;

  const juiceImages = [
    {
      img: apple,
      title: "100% Apple Juice",
      text: "The crisp, fresh taste of apples in every bottle. Four servings of fruit and 100% Daily Value of Vitamin C in every bottle. No added sugar, artificial flavors, colors, or preservatives. Perfect on-the-go size. 100% of profits go to the American family farmers who own Welch's.",
    },
    {
      img: grape,
      title: "100% Grape Juice Concord Grape with Calcium",
      text: "The bold, delicious taste of Concord grapes in every glass. A good source of calcium to help support healthy bones and teeth. Helps support a healthy heart. No added sugar, flavors, colors or preservatives. Non-GMO. 100% of profits go to the American family farmers who own Welch's.",
    },
    {
      img: orange,
      title: "100% Orange Juice",
      text: "The delicious taste of oranges in every bottle. Four servings of fruit and 100% Daily Value of Vitamin C in every bottle. No added sugar, artificial flavors, colors, or preservatives. Perfect on-the-go size. 100% of profits go to the American family farmers who own Welch's.",
    },
    {
      img: peach,
      title: "100% Peach Juice",
      text: "Deliciously fruity flavor. No preservatives. 100% Daily Value of Vitamin C in every serving. Refreshingly great taste. 100% of profits go to the American family farmers who own Welch's.",
    },
    {
      img: strawberry,
      title: "Strawberry",
      text: "Delicious taste. Perfect on-the-go size. NO artificial flavors, red 40 or preservatives. 100% of profits go to the American family farmers who own Welch's.",
    },
    {
      img: watermelon,
      title: "100% Watermelon Juice",
      text: "Deliciously fruity flavor. Made with real fruit juice. 100% Daily Value of Vitamin C in every serving. Refreshingly great taste. 100% of profits go to the American family farmers who own Welch's.",
    },
  ];
  const carouselItems = juiceImages.map((juice, index) => (
    <>
      <CarouselItem text={juice.text} title={juice.title} image={<Image src={juice.img} alt={juice.title} />} />
    </>
  ));
  return (
    <div className="mx-14 mt-12">
      {/* @ts-ignore */}
      <Carousel
        renderPagination={({ pages, activePage, onClick }) => {
          return <></>;
        }}
        ref={carouselRef}
        pagination={false}
        enableAutoPlay={true}
        autoPlaySpeed={3000}
        isRTL={false}
        transitionMs={900}
        itemsToShow={1}
        onNextEnd={({ index }) => {
          if (index === 3) {
            clearTimeout(resetTimeout);
            resetTimeout = setTimeout(() => {
              // @ts-ignore
              carouselRef?.current?.goTo(0);
            }, 3000);
          }
        }}
      >
        {carouselItems}
      </Carousel>
    </div>
  );
};
export default FlavourChoice;
