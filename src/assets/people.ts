import { StaticImageData } from "next/image";
import avatar0 from "./avatars/0.png";
import avatar1 from "./avatars/1.png";
import avatar2 from "./avatars/2.png";
import avatar3 from "./avatars/3.png";
import avatar4 from "./avatars/4.png";

export const profilePicArray = [avatar0, avatar1, avatar2, avatar3, avatar4];

export const shuffle = (array: StaticImageData[]) => {
  let currentIndex: number = array.length,
    randomIndex: number;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};
