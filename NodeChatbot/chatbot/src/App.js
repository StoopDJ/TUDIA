import React from "react";
import "./App.css";
import ChatBotRobot from "./Components/Chatbot";
import Chat from "./Components/Pages/HomePage";
import Contact from "./Components/Pages/Contact";
import StudentLogin from "./Components/Pages/StudentLogin";
import Timetables from "./Components/Pages/Timetables";
import Services from "./Components/Pages/Services";
import WeatherCheck from "./Components/Pages/WeatherCheck";
import Health from "./Components/Pages/Health";
import MainPage from "./Components/Pages/Note";
import Calculator from "./Components/Pages/CalPage"


import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <ChatBotRobot/>
      <BrowserRouter>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Chat />} />
          <Route path="/StudentLogin" element={<StudentLogin />} />
          <Route path="/Timetables" element={<Timetables />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Life" element={<WeatherCheck/>} />
          <Route path="/note" element={<MainPage />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/Health" element={<Health/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
