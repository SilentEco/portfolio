import type { NextPage } from "next";
import Button from "../components/Button";
import {
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

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
      <div className="HomeButtonContainer">
        <Button body={"Check out my projects"} href={"/projects"} />
        <div className="SocialLinks">
          <a
            title="OPENS DEFAULT EMAIL APPLICATION"
            href="mailto: kram.kristopher@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineMail />
          </a>
          <a
            href="https://github.com/SilentEco"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kristopher-kram-795722207/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
