import React from "react";
import { FaRegStar, FaStarHalfStroke, FaStar } from "react-icons/fa6";

const Reviews = () => {
  const reviews = [
    {
      stars: 4,
      review:
        "Thanks to this project we discovered and realised our brand was so much more than what we thought. We're extremely happy about the results",
      name: "Sumit Yadav",
      post: "CMO",
    },
    {
      stars: 4,
      review:
        "Thanks to this project we discovered and realised our brand was so much more than what we thought. We're extremely happy about the results",
      name: "Sumit Yadav",
      post: "CMO",
    },
    {
      stars: 4,
      review:
        "Thanks to this project we discovered and realised our brand was so much more than what we thought. We're extremely happy about the results",
      name: "Sumit Yadav",
      post: "CMO",
    },
  ];
  return (
    <>
      <h1 className="text-6xl md:text-8xl  mt-36 py-24 ">Some nice words from my past Clients</h1>
      <section className=" mx-4 md:mx-[120px] flex flex-wrap gap-4 ">
        {reviews.map((e, id) => {
          return (
            <div key={id} className="">
              <div className="py-4  flex text-lg">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
              <div className="pt-4">{e.review}</div>
              <div className="py-12 flex items-center">
                <div className="w-[50px] h-[50px]">avtar</div>
                <div>
                  <p className="">{e.name}</p>
                  <p className="text-sm">{e.post}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Reviews;
