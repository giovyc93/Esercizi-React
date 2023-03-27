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




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome name="Emanuele" />} />
        <Route path="/counter" element={<Counter />} />
        <Route
          path="*"
          element={
            <div>
              <h1>Not found</h1>
            </div>
          }
        />
        <Route path="/users" element={<GithubUserList />}>
          <Route index element={<h2>Add a user and select it</h2>} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>

        <Route
          path="*"
          element={
            <div>
              <h1>Not found</h1>
            </div>
          }
        />
      </Routes>

      <div>
        <Link to="./">
          <h2>Home</h2>
        </Link>
        <Link to="./counter">
          <h2>Counter</h2>
        </Link>
        <Link to="./users">
          <h2>User</h2>
        </Link>
      </div>
    </>
  );
}




export default App;