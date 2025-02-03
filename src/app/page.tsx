'use client'
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import Header from "./components/header";
import Futuredsproduct from "./components/futured-product";
import Categories from "./components/categories";
import Chairs from "./components/chairs";
import Ourproduct from "./components/our-produt";

export default function Home() {
  return (
    <div>
      <Header />
      <Futuredsproduct />
      <Categories />
      <Chairs />
      <Ourproduct />
    </div>
  );
}
