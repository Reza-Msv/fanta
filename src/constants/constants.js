import Fanta1 from "../assets/fanta1.png";
import Fanta2 from "../assets/fanta2.png";
import Fanta3 from "../assets/fanta3.png";

import Blog1 from "../assets/Blogs/1.jpg";
import Blog2 from "../assets/Blogs/2.jpg";
import Blog3 from "../assets/Blogs/3.jpg";
import Blog4 from "../assets/Blogs/4.jpg";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "Categories",
    link: "#",
  },
  {
    id: 3,
    title: "Blog",
    link: "#",
  },
  {
    id: 4,
    title: "About",
    link: "#",
  },
  {
    id: 5,
    title: "Contact",
    link: "#",
  },
];

const headphoneData = [
  {
    id: 1,
    image: Fanta1,
    title: "Orange Fanta",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$40",
    modal: "Orange",
    bgColor: "#cf4f00",
  },
  {
    id: 2,
    image: Fanta2,
    title: "Cola Zero",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$100",
    modal: "Zero",
    bgColor: "#727272",
  },
  {
    id: 3,
    image: Fanta3,
    title: "Coca Cola",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$100",
    modal: "Cola",
    bgColor: "#ac1a00",
  },
];

const ProductsData = [
  {
    id: 1,
    title: "Orange Fanta",
    image: Fanta1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ",
    delay: 0.5,
  },
  {
    id: 2,
    title: "Lemon Fanta",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ",
    image: Fanta2,
    delay: 0.8,
  },
  {
    id: 3,
    title: "Cola Zero",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima",
    image: Fanta3,
    delay: 1.1,
  },
];

const BlogsData = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
    link: "#",
    img: Blog1,
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
    link: "#",
    img: Blog2,
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
    link: "#",
    img: Blog3,
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
    link: "#",
    img: Blog4,
  },
];

const faqData = [
  {
    id: 1,
    question: "What is Fanta?",
    answer:
      "Fanta is a popular fruit-flavored carbonated soft drink created by The Coca-Cola Company.",
  },
  {
    id: 2,
    question: "What flavors does Fanta offer?",
    answer:
      "Fanta offers a variety of flavors including orange, grape, pineapple, and more!",
  },
  {
    id: 3,
    question: "Is Fanta gluten-free?",
    answer:
      "Yes, Fanta is gluten-free, making it suitable for those with gluten intolerance.",
  },
  {
    id: 4,
    question: "How many calories are in a can of Fanta?",
    answer: "A 12 oz can of Fanta Orange contains about 160 calories.",
  },
];

export { NavbarMenu, headphoneData, ProductsData, BlogsData, faqData };
