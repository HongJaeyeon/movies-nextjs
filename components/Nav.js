import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar(){
    const router = useRouter();
    // console.log(router);
    return (
    <nav>
        <div>
            <Link href="/">
                <a className={router.pathname === "/" ? "active" : ""}>Home</a>
            </Link>
            <Link href="/about">
                <a className={router.pathname === "/about" ? "active" : ""}>About</a>
            </Link>
        </div>
        <style jsx>{`
        nav {
          display: flex;
          align-items: center;
          padding: 30px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
          text-decoration: none;
        }
        nav a:first-child{
            margin-right: 30px;
        }
        .active {
          color: tomato;
        }
        nav div {
          margin: auto;
        }
      `}</style>
    </nav>
    )
}