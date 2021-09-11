import React, { useState, useEffect } from "react";
import "./App.css";
import Paging from "./components/paging/Paging";
import User from "./components/Users/User";

function App() {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    function foo() {
      let d = fetch(`https://reqres.in/api/users?page=${page}`);
      d.then((res) => {
        return res.json();
      })
        .then((data) => {
          setUserData(data.data);
          console.log(data.data[0].email);
        })
        .catch((err) => {
          decremnent();
          console.log(err);
        });
    }
    foo();
    console.log("yes");
  }, [page]);

  function incremnent() {
    setPage(page + 1);
    console.log(page);
  }

  function decremnent() {
    if (page <= 1) {
      setPage(1);
    } else {
      setPage(page - 1);
    }
  }

  return (
    <div className="App">
      <div className="border">
        <User userData={userData} />
        <Paging page={page} decremnent={decremnent} incremnent={incremnent} />
      </div>
    </div>
  );
}

export default App;
