import { nanoid } from "nanoid";
import React from "react";
import { Link } from "react-router-dom";

const SingleReview = ({ reviewObj }) => {
  return (
    <article className="mb-10">
      <div className="flex items-center mb-4">
        <img
          className="w-10 h-10 me-4 rounded-full"
          src={
            reviewObj?.userImage
          }
          alt=""
        />
        <div className="font-medium dark:text-white">
          <p>{reviewObj.username}</p>
        </div>
      </div>
      <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
        <h3 className="ms-2 text-sm font-semibold text-accent-content">
          {reviewObj.reviewTitle}
        </h3>
      </div>
      <footer className="mb-5 text-sm text-accent-content">
        <p>
          Reviewed in the {`${reviewObj.location} `}
          <time>{reviewObj.date}</time>
        </p>
      </footer>
      <p className="mb-2 text-accent-content">{reviewObj.reviewText}</p>
    </article>
  );
};

export default SingleReview;
