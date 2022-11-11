import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userListData, setUserListData] = useState([]);

  const addUserHandler = (username, age) => {
    setUserListData((previousListData) => {
      return [
        ...previousListData,
        { name: username, age: age, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser addUserProp={addUserHandler} />
      <UsersList users={userListData} />
    </div>
  );
}

export default App;
