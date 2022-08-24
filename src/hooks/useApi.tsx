import { profilePicArray, shuffle } from "@/assets/people";
import { Quack } from "@/interface/quack";
import { User } from "@/interface/user";
import { StaticImageData } from "next/image";
import { useState } from "react";

// type Props = {
//   url: string;
// };

const useApi = () => {
  const [images, setImages] = useState<StaticImageData[]>(
    shuffle(profilePicArray)
  );
  const [users, setUsers] = useState<User[]>([
    {
      name: "Foo Bar",
      email: "foo@bar.com",
      id: 0,
      username: "FooBar",
      image: images[0],
    },
    {
      name: "Bar Foo",
      email: "bar@foo.com",
      id: 1,
      username: "BarFoo",
      image: images[1],
    },
  ]);

  const [quacks, setQuacks] = useState<Quack[]>([
    {
      message:
        "This is Quack sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
      createdAt: Date.now(),
      postId: 0,
      userId: 0,
      replies: [21],
    },
    {
      message:
        "This is Quack sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
      createdAt: Date.now(),
      postId: 1,
      userId: 1,
      replies: [22],
    },
    {
      message:
        "This is Quack sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
      createdAt: Date.now(),
      postId: 2,
      userId: 0,
      replies: [],
    },
  ]);

  const [replies, setReplies] = useState<Quack[]>([
    {
      message:
        "This is replay sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
      createdAt: Date.now(),
      postId: 20,
      userId: 0,
      replies: [],
    },
    {
      message:
        "This is replay sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
      createdAt: Date.now(),
      postId: 21,
      userId: 1,
      replies: [],
    },
    {
      message:
        "This is replay sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
      createdAt: Date.now(),
      postId: 22,
      userId: 0,
      replies: [],
    },
  ]);
  return { users, quacks, replies };
};

export default useApi;
