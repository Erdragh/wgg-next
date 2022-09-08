import Link from "next/link";
import NavbarDropdown from "./navbar-dropdown";
import styles from "./navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={"confine-width " + styles.navbarInner}>
        <Link href="/">
          <a className={styles.logo}>WGG</a>
        </Link>
        <div className={styles.linkContainer}>
          <NavbarDropdown href="/schulleben" title="Schulleben">
            <ul>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/team">Schulteam</Link>
              </li>
              <li>
                <Link href="/profil">Schulprofil</Link>
              </li>
            </ul>
          </NavbarDropdown>
          <NavbarDropdown href="/unterricht" title="Unterricht">
            <ul>
              <li>
                <Link href="/sprachen">Sprachen</Link>
              </li>
              <li>
                <Link href="/naturwissenschaften">Naturwissenschaften</Link>
              </li>
              <li>
                <Link href="/gesellschaftswissenschaften">
                  Gesellschaftswissenschaften
                </Link>
              </li>
              <li>
                <Link href="/kultur">
                  Kultur
                </Link>
              </li>
            </ul>
          </NavbarDropdown>
          <NavbarDropdown href="/eltern" title="Für Eltern">
            <ul>
              <li>
                <Link href="/schulleben">Schulleben</Link>
              </li>
              <li>
                <Link href="/schulleben">Schulleben</Link>
              </li>
              <li>
                <Link href="/schulleben">Schulleben</Link>
              </li>
            </ul>
          </NavbarDropdown>
        </div>
      </div>
    </nav>
  );
}
