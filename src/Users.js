import React, { useContext, useEffect } from "react";
import CounterContext from "./context/context";

const Users = () => {
  const { users, loadUsers } = useContext(CounterContext);
  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <div>
      {users?.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default Users;
