import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-lime-400 to-cyan-400 h-screen flex flex-col items-center justify-center gap-10">
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/assets/img/logo.png"
          alt="DojoMate logo"
          width={300}
          height={300}
          priority
        />
      </main>
      <footer className={styles.footer}>
        <Link href={"/auth/register"}>
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Register
        </Link>
      </footer>
    </div>
  );
}
