import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Section from "./components/Section";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "./store/postsSlice";
import Modal from "./components/Modal";

function App() {
  let dispatch = useDispatch();

  async function fetchData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    dispatch(fetchPost(data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <Section />;
}

export default App;
