import React from "react";
import { items } from "./data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// const items = [
//   // Photo by ivan Torres on Unsplash
//   {
//     id: "c",
//     category: "Pizza",
//     title: "5 Food Apps Delivering the Best of Your City",
//     pointOfInterest: 80,
//     backgroundColor: "#814A0E",
//   },
//   // Photo by Dennis Brendel on Unsplash
//   {
//     id: "f",
//     category: "How to",
//     title: "Arrange Your Apple Devices for the Gram",
//     pointOfInterest: 120,
//     backgroundColdr: "#959684",
//   },
// ];

function Card({ id, title, category, theme }) {
  return (
    <li className={`card ${theme}`}>
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={`images/${id}.jpg`} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2>{title}</h2>
          </motion.div>
        </motion.div>
      </div>
      <Link to={id} className={`card-open-link`} />
    </li>
  );
}

export function List({ selectedId }) {
  return (
    <ul className="card-list">
      {items.map((card) => (
        <Card key={card.id} {...card} isSelected={card.id === selectedId} />
      ))}
    </ul>
  );
}
