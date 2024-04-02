import React, { useEffect, useState } from "react";

// 이건 예시용
const DogPicture = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.message);
        console.log(data.message); // imageUrl을 콘솔에 출력
      });
  }, []);

  return (
    <div>
      <img src={imageUrl} alt="a dog" />
    </div>
  );
};
export default DogPicture;
