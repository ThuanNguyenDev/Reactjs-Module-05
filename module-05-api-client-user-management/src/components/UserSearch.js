import React, { useState, useEffect } from "react";
import axios from "axios";

function UserSearch() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
  
    axios
      .get("https://653785a5bb226bb85dd35c08.mockapi.io/api/v1/staffs")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
  
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchKeyword, users]);

  return (
    <div>
      <h1>User Search</h1>
      <input
        type="text"
        placeholder="Search users..."
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserSearch;
