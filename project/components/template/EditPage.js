import { useRouter } from "next/router";
import { useState } from "react";

const EditPage = ({ data }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const router = useRouter();

  const editHanler = async () => {
    const res = await fetch("/api/profile", {
      method: "PATCH",
      body: JSON.stringify({ name, lastName }),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();

    if (result.status === "success") router.push("/profile");
  };
  return (
    <div className="profile-form__input">
      {data ? (
        <>
          <div>
            <h4>Please update your profile:</h4>
            <br/>
            <h6>Your email : {data.email}</h6>
            <br/>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </>
      ) : (
        <h3>Loading ...</h3>
      )}
      <button onClick={editHanler}>Update</button>
    </div>
  );
};

export default EditPage;
