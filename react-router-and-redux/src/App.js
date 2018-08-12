import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link, Redirect, Prompt } from "react-router-dom";

const Home = () => <h2>Home</h2>;
const About = (props) => {
  console.log("match", props.match);
  return <h3>{props.match.params.info}</h3>
};
const Users = ({ match }) => {
  var validUsers = ["abc", "def"];
  if (validUsers.includes(match.params.name)) 
    return <h3>welcome {match.params.name}</h3>
  else
    return <Redirect to="/error" />
}

const Error = () => <h3>Error user</h3>

const Info = (props) => {
  return (
    <div>
      <ul>
        <li>
          <Link to={props.match.url + "/phone"}>Phone</Link>
        </li>
        <li>
          <Link to={props.match.url + "/email"}>Email</Link>
        </li>
      </ul>
      <hr/>
      <Route 
        path={props.match.url + "/phone"}
        render={() => <div>Phone: (514) 800-3468</div>}
      />
      <Route 
        path={props.match.url + "/email"}
        render={() => <div>Email: tpham20908@gmail.com</div>}
      />
    </div>
  )
}

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about/tung">About me</Link>
        </li>
        <li>
          <Link to="/something">Something else</Link>
        </li>
        <li>
          <Link to="/users/abc">User valid</Link>
        </li>
        <li>
          <Link to="/users/dummy">User invalid</Link>
        </li>
        <li>
          <Link to="/info">Info</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about/:info" component={About} />
      <Route path="/something" render={() => <h3>Something else</h3>} />
      <Route path="/users/:name" component={Users} />
      {/* <Route path="/children" children={() => <h5>This is always rendered</h5>} /> */}
      <Route path="/info" component={Info} />
      <Route path="/error" component={Error} />
      <Prompt message="Are you sure you want to leave?"/>
    </div>
  </BrowserRouter>
);

export default App;