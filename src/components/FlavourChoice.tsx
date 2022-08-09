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
    { img: apple, name: "apple", title: "bla bla", text: "na nan a", color: "#0f172a" },
    { img: grape, name: "grape", title: "bla bla", text: "na nan a", color: "#0f172a" },
    { img: orange, name: "orange", title: "bla bla", text: "na nan a", color: "#0f172a" },
    { img: peach, name: "peach", title: "bla bla", text: "na nan a", color: "#0f172a" },
    { img: strawberry, name: "strawberries", title: "bla bla", text: "na nan a", color: "#0f172a" },
    { img: watermelon, name: "watermelon", title: "bla bla", text: "na nan a", color: "#0f172a" },
  ];
  const carouselItems = juiceImages.map((juice, index) => (
    <>
      <CarouselItem color={juice.color} fruitName={juice.name} image={<Image src={juice.img} alt={juice.name} />} />
    </>
  ));
  return (
    <div>
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
