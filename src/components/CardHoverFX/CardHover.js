import React from "react";
import HoverCard from "../CardHover/HoverCard";
import ACC from "../../assets/img/ACC.png"
import Styles from "./CardHover.module.css";

const CardHover = () => {
  return (
    <>
      <div className={Styles.wrapper}>
        <div className={Styles.container}>
          <HoverCard
            dataText="Design"
            imgSrc={ACC}
            imgAlt="Design"
            hoverCardTitle="Design"
            linkTitle="Read More"
            hoverCardParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrud exercitation ullamco"
          />
          <HoverCard
            dataText="Code"
            imgSrc={ACC}
            imgAlt="Code"
            hoverCardTitle="Code"
            linkTitle="Read More"
            hoverCardParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrud exercitation ullamco"
          />
          <HoverCard
            dataText="Launch"
            imgSrc={ACC}
            imgAlt="Launch"
            hoverCardTitle="Launch"
            linkTitle="Read More"
            hoverCardParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrud exercitation ullamco"
          />
          <HoverCard
            dataText="Earn"
            imgSrc={ACC}
            imgAlt="Earn"
            hoverCardTitle="Earn"
            linkTitle="Read More"
            hoverCardParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrud exercitation ullamco"
          />
        </div>
      </div>
    </>
  );
};

export default CardHover;
