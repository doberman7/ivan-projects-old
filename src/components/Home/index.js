import React from "react";
// import { Link, Redirect } from "react-router-dom";
// import { motion } from "framer-motion";
import { Frame } from "framer";

const Home = () => {
  return (
    <>
      <div className="title ">
        <Frame
          className="title "
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
        >
          <h1>Ivan Rubio</h1>
        </Frame>
      </div>
      <br></br>
      <div className="projects">
        <p>Ivan´s projects</p>
      </div>

      <div className="contact">
        <p>Contact</p>
      </div>
    </>
  );
};

// export default Router;
export default Home;
