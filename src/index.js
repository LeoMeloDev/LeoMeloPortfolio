import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/navbar'
import Home from './components/Home/home'
import VisualDesign from "./components/Visual-Design/visual-design";
import WebDevelopment from "./components/Web-Development/web-development";
import VideoWork from "./components/Video/video";
import SoundEditing from "./components/Sound-Editing/sound-editing";
import Photography from "./components/Photography/photography";

ReactDOM.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/visual-design" element={<VisualDesign />} />
      <Route path="/web-development" element={<WebDevelopment />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/video" element={<VideoWork />} />
      <Route path="/sound-editing" element={<SoundEditing />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);


