import React from "react";
// import { Link, Redirect } from "react-router-dom";
// import { motion } from "framer-motion";
import { Frame } from "framer";
const h1Style = {
  color: "#111",
  fontFamily: "Helvetica Neue",
  fontSize: " 50px",
  fontWeight: "bold",
  letterSpacing: "-1px",
  lineHeight: 1,
  textAlign: "rigth",
  paddingLeft: 100,
};
const frame = {
  background: "linear-gradient(180deg, #f08, #d0e)",
};

const Home = () => {
  return (
    <>
      <div className="title ">
        <Frame
          width={250}
          // className="container "
          style={frame}
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
        >
          <p style={h1Style}>Ivan Rubio</p>
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
