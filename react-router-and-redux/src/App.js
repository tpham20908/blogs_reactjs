import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Home = () => <h2>Home</h2>;
const About = (props) => {
  console.log("match", props.match);
  return <h3>{props.match.params.info}</h3>
};
const Users = ({ match }) => <div>{match.url}</div>;

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
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/children">Children link</Link>
        </li>
        <li>
          <Link to="/info">Info</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about/:info" component={About} />
      <Route path="/something" render={() => <h3>Something else</h3>} />
      <Route path="/users" component={Users} />
      <Route path="/children" children={() => <h5>This is always rendered</h5>} />
      <Route path="/info" component={Info} />
    </div>
  </BrowserRouter>
);

export default App;