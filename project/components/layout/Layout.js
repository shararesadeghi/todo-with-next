import Link from "next/link";
import { VscListSelection } from "react-icons/vsc";
import { BiMessageAltAdd } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { FiLogOut } from "react-icons/fi";
import { MdModeEdit } from "react-icons/md";
import { signOut, useSession } from "next-auth/react";

const Layout = ({ children }) => {
  const { status } = useSession();

  const logoutHandler = () => {
    signOut();
  };
  return (
    <div className="container">
      <header>
        <p> Todo App</p>
        {status === "authenticated" ? (
          <button onClick={logoutHandler}>
            Logout <FiLogOut />{" "}
          </button>
        ) : null}
      </header>
      <div className="container--main">
        <aside>
          <p>Welcome</p>
          <ul>
            <li>
              <VscListSelection />
              <Link href="/">Todos</Link>
            </li>
            <li>
              <BiMessageAltAdd />
              <Link href="/add-todo">Add Todo</Link>
            </li>
            <li>
              <RxDashboard />
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <MdModeEdit />
              <Link href="/editProfile">Edit Profile</Link>
            </li>
          </ul>
        </aside>
        <section>{children}</section>
      </div>
    </div>
  );
};

export default Layout;
