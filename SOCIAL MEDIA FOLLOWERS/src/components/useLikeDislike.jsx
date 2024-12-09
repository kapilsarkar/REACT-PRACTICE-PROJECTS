import { useState } from "react";

const useLikeDisLike = (initialValue = 0) => {
  const [like, setLike] = useState(initialValue);
  const [dislike, setDislike] = useState(initialValue);

  const Increment = () => {
    setLike(like + 1);
  };

  const Decrement = () => {
    setDislike(dislike + 1);
  };

  return [like, dislike, Increment, Decrement];
};

export default useLikeDisLike;
