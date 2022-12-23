import styles from "./style";
import { Footer, Navbar, Hero } from "./components";
import { Route, Routes } from "react-router-dom";
import Features from "./components/Features";
import Profile from "./components/Profile.jsx";
import Login from "./components/Login.jsx";
import ProtectedRoutes from "./components/ProtectedRoutes.jsx";
import Gallery from "react-photo-gallery";

const App = () => {
    const photos = [
        {
            src: "src/img/che-snow/1.JPG",
            width: 4,
            height: 3
        },
        {
            src: "src/img/che-snow/2.JPG",
            width: 4,
            height: 3
        },
        {
            src: "src/img/che-snow/3.JPG",
            width: 4,
            height: 3
        },
        {
            src: "src/img/che-snow/4.JPG",
            width: 4,
            height: 3
        },
        {
            src: "src/img/che-snow/5.JPG",
            width: 1,
            height: 1
        },
        {
            src: "src/img/che-snow/6.JPG",
            width: 4,
            height: 3
        },
        {
            src: "src/img/che-snow/7.JPG",
            width: 4,
            height: 3
        },
        {
            src: "src/img/che-snow/8.JPG",
            width: 4,
            height: 3
        },
        {
            src: "src/img/che-snow/9.JPG",
            width: 4,
            height: 3
        },
    ];
    return (
    <div className="">
      <Gallery photos={photos} />;
    </div>
  );
};

export default App;
