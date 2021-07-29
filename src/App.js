import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Nabbar from "./components/Nabbar/Nabbar";
import Main from "./components/main/Main";
import Search from "./components/search/Search";
import Notification from "./components/notification/Notification";
import Project from "./components/project/Project";
import Learn from "./components/learn/Learn";
import Profile from "./components/profile/Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="app__nab">
          <Nabbar avatar="./images/avatar.jpg" />
        </div>

        <div className="app__body">
          <Switch>
            <Route path="/" exact component={Main}></Route>
            <Route path="/search" component={Search}></Route>
            <Route path="/notification" component={Notification}></Route>
            <Route path="/project" component={Project}></Route>
            <Route path="/learn" component={Learn}></Route>
            <Route path="/profile" component={Profile}></Route>
          </Switch>
          <Sidebar />
        </div>
      </div>
    </Router>
  );
}

export default App;
