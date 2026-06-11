import React, { useEffect } from 'react'
import { mdMenu } from 'react-icons/md'

const Productlist = () => {

     const [products,setproducts] =useState([])
     cont[show,setshow] = useState(false)

     useEffect(()=>{
          const sampleProducts = [
            {
              products: [
                {
                  id: 10001,
                  name: "Basics To Advanced In React",
                  overview:
                    "React is a JavaScript library for building user interfaces, primarily maintained by Meta (Facebook). It allows developers to create reusable UI components and manage the state and rendering of those components efficiently.",
                  long_description:
                    "React is a JavaScript library used to build interactive user interfaces. It's declarative, efficient, and component-based, making UI development predictable and scalable.",
                  price: 29,
                  poster:
                    "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
                  image_local: "/assets/images/10001.avif",
                  rating: 5,
                  in_stock: true,
                  size: 5,
                  best_seller: true,
                },
                {
                  id: 10002,
                  name: "Django Framework for Beginners",
                  overview:
                    "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.",
                  long_description:
                    "Django is a powerful, open-source web framework written in Python. It is designed to make web development faster and easier by providing a clean and pragmatic way to build web applications.",
                  price: 19,
                  poster:
                    "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
                  image_local: "/assets/images/10001.avif",
                  rating: 5,
                  in_stock: true,
                  size: 2,
                  best_seller: false,
                },
                {
                  id: 10003,
                  name: "The Future of Design Systems",
                  overview:
                    "Design systems have become essential for building consistent, scalable digital experiences.",
                  long_description:
                    "The future of design systems lies in greater integration, intelligence, and inclusivity. As digital products grow in complexity, design systems are evolving from static libraries into dynamic, code-connected ecosystems.",
                  price: 29,
                  poster:
                    "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
                  image_local: "/assets/images/10001.avif",
                  rating: 3,
                  in_stock: true,
                  size: 1,
                  best_seller: false,
                },
                {
                  id: 10004,
                  name: "The Complete Guide to Backend Development",
                  overview:
                    "This guide walks you through everything you need to know to become a skilled backend developer.",
                  long_description:
                    "Backend development refers to the server-side of web development—the part you don't see but that powers everything behind the scenes.",
                  price: 99,
                  poster:
                    "https://images.unsplash.com/photo-1595617795501-9661aafda72a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
                  image_local: "/assets/images/10001.avif",
                  rating: 5,
                  in_stock: true,
                  size: 7,
                  best_seller: true,
                },
                {
                  id: 10005,
                  name: "Build a Blockchain from Scratch in Go",
                  overview:
                    "This guide walks you through creating a minimal blockchain using Go (Golang), a powerful, statically typed language.",
                  long_description:
                    "Blockchain is a decentralized ledger technology that powers cryptocurrencies like Bitcoin and Ethereum.",
                  price: 19,
                  poster:
                    "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
                  image_local: "/assets/images/10001.avif",
                  rating: 3,
                  in_stock: true,
                  size: 3,
                  best_seller: false,
                },
                {
                  id: 10006,
                  name: "Frontend Fastlane Plan With Projects",
                  overview:
                    "a structured, accelerated path for mastering modern frontend development, with corresponding project ideas.",
                  long_description:
                    "Equip you with real-world frontend skills rapidly through structured learning and practical projects.",
                  price: 99,
                  poster:
                    "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
                  image_local: "/assets/images/10001.avif",
                  rating: 5,
                  in_stock: true,
                  size: 10,
                  best_seller: false,
                },
                {
                  id: 10007,
                  name: "Master the Code Review",
                  overview:
                    "mastering code reviews, tailored to help developers at any level improve their effectiveness.",
                  long_description:
                    "Mastering the code review is the ability to evaluate, critique, and improve code collaboratively.",
                  price: 19,
                  poster:
                    "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
                  image_local: "/assets/images/10001.avif",
                  rating: 5,
                  in_stock: true,
                  size: 2,
                  best_seller: false,
                },
                {
                  id: 10008,
                  name: "JavaScript Basics To Advance With Shubham",
                  overview:
                    "is a comprehensive, hands-on program designed to guide learners from foundational JavaScript concepts.",
                  long_description:
                    "JavaScript Basics to Advance with Shubham is a complete journey through the JavaScript programming language.",
                  price: 29,
                  poster:
                    "https://images.unsplash.com/photo-1613490900233-141c5560d75d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
                  image_local: "/assets/images/10001.avif",
                  rating: 5,
                  in_stock: true,
                  size: 3,
                  best_seller: true,
                },
                {
                  id: 10009,
                  name: "Python Deep Dive With Projects",
                  overview:
                    "ideal for those looking to go beyond the basics and build real-world, advanced-level applications.",
                  long_description:
                    "Python Deep Dive with Projects is a comprehensive, hands-on program designed for learners.",
                  price: 29,
                  poster:
                    "https://images.unsplash.com/photo-1624953587687-daf255b6b80a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
                  image_local: "/assets/images/10001.avif",
                  rating: 5,
                  in_stock: true,
                  size: 3,
                  best_seller: false,
                },
              ],
              
            },
          ];
          setproducts(sampleProducts);
     },[])
  return (
    <div>
      <mdMenu />

    </div>
  )
}

export default Productlist
