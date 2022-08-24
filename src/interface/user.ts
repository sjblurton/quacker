import { StaticImageData } from "next/image";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  image: StaticImageData;
}
