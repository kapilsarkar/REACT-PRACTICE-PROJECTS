import { useState } from "react";

const UseLikeDislike = (initialValue = 0) => {
  const [like, setLike] = useState(initialValue);
  const [disLike, setDisLike] = useState(initialValue);

  const LikeIncrement = () => {
    setLike(like + 1);
  };
  const DisLikeIncrement = () => {
    setDisLike(disLike + 1);
  };
  return [like, disLike, LikeIncrement, DisLikeIncrement];
};
export default UseLikeDislike;
