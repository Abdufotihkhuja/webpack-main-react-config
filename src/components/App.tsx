import { Suspense, useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import imgPng from "@/assets/image.png";
import imgJpg from "@/assets/image.jpg";
import Instagram from "@/assets/instagram.svg";

export const App = () => {
  const [number, setNumber] = useState(0);

  // if (__PLATFORM__ === "desktop") {
  //   return <div>DESKTOPPLATFORM</div>;
  // }

  // if (__PLATFORM__ === "mobile") {
  //   return <div>MOBILEPLATFORM</div>;
  // }

  return (
    <div data-testid={"App.DataTestId"}>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/shop"}>Shop</Link>
      <img
        style={{ width: "100px", height: "100px" }}
        src={imgPng}
        alt={"image"}
      />
      <img
        style={{ width: "100px", height: "100px" }}
        src={imgJpg}
        alt={"image"}
      />
      <Instagram style={{ width: "50px", height: "50px" }} fill={"green"} />
      <h1 data-testid={"App.Platform"} className={classes.value}>
        {number}
      </h1>
      <h1>Platform={__PLATFORM__}</h1>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
