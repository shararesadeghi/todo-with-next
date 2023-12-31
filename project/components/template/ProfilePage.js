import { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import ProfileData from "../module/ProfileData";
import ProfileForm from "../module/ProfileForm";

const ProfilePage = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);

  const fetchProfile = async ()=>{
      const res = await fetch("/api/profile");
      const data = await res.json();

      if(data.status === "success" && data.data.name && data.data.lastName){
          setData(data.data)
      }
  }

  useEffect(()=>{fetchProfile()},[])

  const submitHandler = async () => {
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify({ name, lastName, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <div className="profile-form">
      <h2>
        <CgProfile /> Profile
      </h2>
     {
         data ? <ProfileData data={data}/> :
         <ProfileForm
         name={name}
         lastName={lastName}
         password={password}
         setName={setName}
         setLastName={setLastName}
         setPassword={setPassword}
         submitHandler={submitHandler}
       />
     }
    </div>
  );
};

export default ProfilePage;
