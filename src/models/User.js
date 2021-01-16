import { Model } from "soukai";

import Post from "./Post";

export default class User extends Model {
  newPostTitle = "";

  postsRelationship() {
    return this.hasMany(Post, "authorId");
  }
}
