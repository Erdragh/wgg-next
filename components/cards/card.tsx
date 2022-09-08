import Image from "next/image";
import Link from "next/link";

import styles from "./card.module.scss";

export default function Card({href, img, title}) {
  return (
    <Link href={href}>
      <a className={styles.card}>
        <div className={styles.imageContainer}>
          <Image layout="fill" alt={title} src={img}></Image>
        </div>
        <div className={styles.cardBody}>
          {title}
        </div>
      </a>
    </Link>
  )
}