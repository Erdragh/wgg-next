import Card from "./card";

import styles from "./cards.module.scss";

export default function Cards({
  cards,
}: {
  cards: { title: string; img: string; href: string }[];
}) {
  return (
    <div className={styles.cards}>
      {cards.map((card) => {
        return (
          <Card
            key={card.href}
            title={card.title}
            href={card.href}
            img={card.img}
          ></Card>
        );
      })}
    </div>
  );
}
