import logo from "./logo.svg";
import "./App.css";
import Join from "./component/JoinUs";
import Settings from "./component/Settings";
import Login from "./component/Login";
import Contact from "./component/Contact";
import Search from "./component/Search";
import Help from "./component/Help";
import Home from "./component/home";
import Download from "./component/Download";
import List from "./component/List";
function App() {
  return (
    <>
      <List />
      <div className='button'>
        <Join />
        <Settings />
        <Login />
        <Contact />
        <Search />
        <Help />
        <Home />
        <Download />
      </div>
    </>
  );
}

export default App;
