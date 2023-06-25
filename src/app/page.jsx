import React from "react";
import style from "./page.module.css";
import Image from "next/image";
import Hero from "public/hero.jpg";
import Button from "@/components/Button/Button";
const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.item}>
        <h1 className={style.title}>
          Crafting Couture for the Modern Individual: Redefining Fashion
        </h1>
        <p className={style.tagline}>
          Embrace your unique style and experience the transformative power of
          our designs. Discover a new level of self-expression as we bring your
          fashion dreams to life. Get ready to elevate your wardrobe and
          redefine what it means to be fashionable.
        </p>
        <Button text="Check Our Work" url="/portfolio" />
      </div>
      <div className={style.item}>
        <Image className={style.heroimg} src={Hero} alt="" />
      </div>
    </div>
  );
};

export default Home;
