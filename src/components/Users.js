import React from "react";
import "../App.css";

function Users() {
  const obj = [
    {
      name: "Jaden",
      name2: "Jaden2",
      name3: "Jaden3",
    },
  ];

  return (
    <>
      <div className="accounts">
        {obj.map((x) => (
          <h1>
            {x.name}
            <br></br>
            {x.name2}
          </h1>
        ))}
      </div>
    </>
  );
}

export default Users;
