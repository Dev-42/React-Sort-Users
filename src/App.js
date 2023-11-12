import "./App.css";
import { useState } from "react";
import UserDetails from "./components/UserDetails";

function App() {
 const [users,setUsers] = useState([])

 const usersDisplay = async() => {
    try{
      const res = await fetch('http://localhost:8080/users')
      const data = await res.json()
      setUsers(data)
      console.log(data)
    }catch(e){
      console.log(e)
    }
 }

  return (
    <div className="App" data-testid = 'app'>
      <button onClick={() => usersDisplay()}>Click</button>
      <button  data-testid = 'sort-asc-btn'>Sort by Asc</button>
      <button  data-testid = 'sort-desc-btn'>Sort by Desc</button>
      {/*  map through the users data and pass props to the Userdetails component */}
      {users.map((user) => (
        <UserDetails key = {user.id} {...user} />
      ))}
    </div>
  );
}

export default App;
