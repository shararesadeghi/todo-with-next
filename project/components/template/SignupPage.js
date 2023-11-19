import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const {status} = useSession();

  useEffect(()=>{
      if(status === "authenticated") router.replace("/")
  },[status])

  const signupHandler = async () => {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
    if (data.status === "success") router.push("/signin");
  };
  return (
    <div className="signin-form">
      <h3>Registeration Form</h3>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signupHandler}>Register</button>
      <div>
        <p>Have you an account?</p>
        <Link href="/signin">SignIn</Link>
      </div>
    </div>
  );
};

export default SignupPage;
