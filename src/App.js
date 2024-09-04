// import logo from "./logo.svg";
// import "./App.css";
// import Login from "./pages/Login";
// import Registration from "./pages/Registration";
// import Home from "./pages/Home";

// function App() {
//   return (
//     <div>
//       {/* <Login /> */}
//       <Registration />
//       {/* <Home /> */}
//     </div>
//   );
// }

// export default App;
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import UserContext from "./context/UserContext";
import { useEffect, useState } from "react";
import { checkToken } from "./api/storage";

function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    setUser(checkToken());
  }, []);
  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="App font-mono ">
        <Navbar />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

export default App;
