import { FC } from "react";

type TestimonialsProps = {};

const Testimonials: FC<TestimonialsProps> = (props) => {
  return (
    <div className="mx-auto mt-16 max-w-screen-xl text-center ">
      <div className="mx-auto max-w-screen-sm">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-orange-600">Testimonials</h2>
        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl ">Hear what some of our customer have to say.</p>
      </div>
      <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
        <figure className="rounded-tl-3xl cursor-pointer hover:scale-105 flex flex-col justify-center items-center p-8 text-center bg-amber-50/50 border-b border-gray-200 md:p-12 lg:border-r ">
          <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 ">
            <h3 className="text-lg font-semibold text-orange-600">Penny Juices are my new favorite brand.</h3>
            <p className="my-4">
              "Thank you for the opportunity to let everyone know about your terrific company! it's easy to store and
              mix and we received great service!"
            </p>
          </blockquote>
          <figcaption className="flex justify-center items-center space-x-3">
            <img
              className="w-9 h-9 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium text-left">
              <div>Bonnie Green</div>
              <div className="text-sm font-light text-gray-500 ">St.Francis, MN</div>
            </div>
          </figcaption>
        </figure>
        <figure className="rounded-tr-3xl cursor-pointer hover:scale-105 flex flex-col justify-center items-center p-8 text-center bg-yellow-50/50 border-b border-gray-200 md:p-12 ">
          <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 ">
            <h3 className="text-lg font-semibold text-orange-600">Amazing taste!</h3>
            <p className="my-4">
              "The childrenat Kid Kollege love the taste and drink penny juice without encouragement from our teachers.
              I like Penny Juice for that reason."
            </p>
          </blockquote>
          <figcaption className="flex justify-center items-center space-x-3">
            <img
              className="w-9 h-9 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium  text-left">
              <div>Roberta Casas</div>
              <div className="text-sm font-light text-gray-500 ">Billings, MT</div>
            </div>
          </figcaption>
        </figure>
        <figure className="rounded-bl-3xl cursor-pointer hover:scale-105 flex flex-col justify-center items-center p-8 text-center bg-yellow-50/50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r ">
          <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 ">
            <h3 className="text-lg font-semibold text-orange-600">A lot of fun colors.</h3>
            <p className="my-4">
              "I have been using Penny Juice at my childcare centre for 2 years. The children love all the fun colors. I
              have recommended Penny Juice to other childcare directors in the area."
            </p>
          </blockquote>
          <figcaption className="flex justify-center items-center space-x-3">
            <img
              className="w-9 h-9 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium  text-left">
              <div>Jese Leos</div>
              <div className="text-sm font-light text-gray-500 ">Greenwood Village, CO</div>
            </div>
          </figcaption>
        </figure>
        <figure className="rounded-br-3xl cursor-pointer hover:scale-105 flex flex-col justify-center items-center p-8 text-center bg-yellow-50/50 border-gray-200 md:p-12 ">
          <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 ">
            <h3 className="text-lg font-semibold text-orange-600">Fantastic Service!</h3>
            <p className="my-4">
              "Penny Juice always manages to provide friendly and professional service. This is why I keep coming back
              to them after many years, I find the company reliable and trustworthy."
            </p>
          </blockquote>
          <figcaption className="flex justify-center items-center space-x-3">
            <img
              className="w-9 h-9 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium  text-left">
              <div>Joseph McFall</div>
              <div className="text-sm font-light text-gray-500 ">Saint Peter, MN</div>
            </div>
          </figcaption>
        </figure>
      </div>
      <div className="text-center">
        <button className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-orange-600 focus:z-10 focus:ring-4 focus:ring-gray-200">
          Show more...
        </button>
      </div>
    </div>
  );
};
export default Testimonials;
