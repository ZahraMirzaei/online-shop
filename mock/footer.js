import { FaLinkedin, FaTwitterSquare, FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export const footerContent = [
  {
    title: "zishopMap",
    subtitles: [
      {
        text: "aboutUs",
        href: "/about",
      },
      {
        text: "contactUs",
        href: "/blank",
      },
      {
        text: "saleInZishop",
        href: "/blank",
      },
      {
        text: "careerOpportunities",
        href: "/blank",
      },
    ],
  },
  {
    title: "customerServices",
    subtitles: [
      {
        text: "commonQuestions",
        href: "/blank",
      },
      {
        text: "returnProcedures",
        href: "/blank",
      },
      {
        text: "privacy",
        href: "/blank",
      },
    ],
  },
  {
    title: "shoppingGuide",
    subtitles: [
      {
        text: "howToPlaceAnOrder",
        href: "/blank",
      },
      {
        text: "orderSubmissionProcedure",
        href: "/blank",
      },
      {
        text: "paymentMethods",
        href: "/blank",
      },
    ],
  },
];

export const socialMedia = [
  {
    name: "instagram",
    icon: AiFillInstagram,
    href: "/",
  },
  {
    name: "linkedin",
    icon: FaLinkedin,
    href: "/",
  },
  {
    name: "twitter",
    icon: FaTwitterSquare,
    href: "/",
  },
  {
    name: "telegram",
    icon: FaTelegramPlane,
    href: "/",
  },
];
