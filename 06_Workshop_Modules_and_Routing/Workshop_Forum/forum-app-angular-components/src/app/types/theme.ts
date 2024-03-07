import { Post } from './posts';
import { UserId } from './user';

export interface Theme {
  subscribers: string[];
  posts: Post[];
  _id: string;
  themeName: string;
  userId: UserId;
  created_at: string;
  updatedAt: string;
  __v: number;
}
