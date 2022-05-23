import { BsLaptop, BsBook } from "react-icons/bs";
import { IoShirtOutline } from "react-icons/io5";
import { MdOutlineToys } from "react-icons/md";
import { RiHeartPulseLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { BiFootball } from "react-icons/bi";

const megaMenu = [
  {
    category: "Digital",
    icon: BsLaptop,
    productsGroup: [
      {
        title: "Laptop",
        subtitles: [
          "Asus",
          "Apple",
          "Dell",
          "Lenovo",
          "Samsung",
          "HP",
          "HUAWEI",
          "Acer",
          "MSI",
        ],
      },
      {
        title: "Mobile",
        subtitles: [
          "Samsung",
          "Apple",
          "Nokia",
          "Xiaomi",
          "Motorola",
          "LG",
          "Sony",
        ],
      },
      {
        title: "Computer",
        subtitles: ["Monitor", "Mouse", "Keyboard", "Hard"],
      },
      {
        title: "Other",
        subtitles: ["Tablet", "Flash", "PowerBank", "Speaker", "Headphone"],
      },
    ],
  },
  {
    category: "fashion",
    icon: IoShirtOutline,
    productsGroup: [
      {
        title: "women",
        subtitles: [
          "dress",
          "Skirt ",
          "jeans",
          "pants",
          "T-shirt",
          "scarf",
          "HUAWEI",
          "Acer",
          "MSI",
        ],
      },
      {
        title: "men",
        subtitles: ["shirt", "pants", "tie", "T-shirt", "jeans", "LG", "Sony"],
      },
      {
        title: "child",
        subtitles: ["Monitor", "Mouse", "keyboard", "Hard", "Ram"],
      },
      {
        title: "other",
        subtitles: ["watch", "wallet", "hat", "belt", "shoes"],
      },
    ],
  },
  { category: "toys", icon: MdOutlineToys },
  { category: "Cosmetic", icon: RiHeartPulseLine },
  { category: "Home", icon: AiOutlineHome },
  { category: "Sport", icon: BiFootball },
  { category: "Stationery", icon: BsBook },
];

export default megaMenu;
