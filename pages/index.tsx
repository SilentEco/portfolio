import type { NextPage } from "next";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="HomeWrapper">
      <h1>Kristopher Kram</h1>
      <div className="ProfileImage"></div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil harum
        fugit, sequi minima at aperiam eligendi aliquam soluta, possimus
        molestias incidunt. Sapiente deleniti laudantium eius dolores enim quasi
        voluptate quibusdam? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Sunt iusto nemo obcaecati sed quis!
        Fugit hic animi quasi eaque, corrupti nam quo corporis maiores
        consectetur reiciendis omnis aliquid sapiente consequuntur ex provident!
        Quae veniam, quo, sint, quis sit est ut eum tempore voluptate a aliquid
        incidunt veritatis. Ad, saepe odio.
      </p>
      <a href="mailto: kram.kristopher@gmail.com">Send Email</a>
    </div>
  );
};

export default Home;
