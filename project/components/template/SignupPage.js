import Link from "next/link";

const SignupPage = () => {
  return (
    <div className="signin-form">
      <h3>Registeration Form</h3>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Register</button>
      <div>
        <p>Have you an account?</p>
        <Link href="/signin">SignIn</Link>
      </div>
    </div>
  );
};

export default SignupPage;
