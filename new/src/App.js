import Hello from "./Hello";
import React from "react";
import Welcome from "./Welcome";
import Counter from "./Counter"
import UncontrolledLogin from "./UncrontrolledLogin";
import Container from "./Container";
import Login from "./Login";
import ClickTracker from "./ClickTracker";
import LanguageComponent from "./LanguageContext";
import TodoList from "./TodoList";
import Sum from "./Sum";
import GithubUser from "./GithubUser";
import GithubUserList from "./GithubUserList";
import UseCounter from "./UseCounter";
import ClickCounter from "./ClickCounter";
import InteractiveWelcome from "./InteractiveWelcome";
import UseForm from "./UseForm";
import CarDetails from "./CarDetails";
import FilteredList from "./FilteredList";
import "./App.css";
import {Route, BrowserRouter, Routes} from "react-router-dom"



function App () {
    
  
  return (
      
          <Routes>
              <Route path="/" element={<Welcome name="Antonio" />} />
              <Route path="/counter" element={<Counter/>} />
          </Routes>
          
        
      )
  }

export default App