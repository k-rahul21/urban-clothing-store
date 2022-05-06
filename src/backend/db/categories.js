import { v4 as uuid } from "uuid";
import {
  shoeCover,
  jacketCover,
  accessoryCover,
} from "../../assets/categories-cover";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Shoes",
    imgSrc: shoeCover,
  },
  {
    _id: uuid(),
    categoryName: "Jackets",
    imgSrc: jacketCover,
  },
  {
    _id: uuid(),
    categoryName: "Accessories",
    imgSrc: accessoryCover,
  },
];
