import { Post } from "./posts";

export interface UserId {
  themes: string[];
  posts: Post[];
  _id: string;
  tel: string;
  email: string;
  username: string;
  password: string;
  created_at: string;
  updatedAt: string;
  __v: number;
}

export interface UserForAuth {
  firstName: string;
    email: string;
    phoneNumber: string;
    password: string;
    id: string;
}