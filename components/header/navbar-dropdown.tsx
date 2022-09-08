import Link from "next/link";
import { ReactNode } from "react";

import styles from "./navbar-dropdown.module.scss";

export default function NavbarDropdown({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className={styles.dropdownOuter}>
      <Link href={href}>
        <a className={styles.dropdownTitle}>{title}</a>
      </Link>
      <div className={styles.dropdownContent}>
        {children}
      </div>
    </div>
  );
}
