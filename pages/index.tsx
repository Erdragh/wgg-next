import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Cards from "../components/cards/cards";
import Layout from "../components/layout";

export default function Home({ cards }) {
  return (
    <Layout>
      <Cards cards={cards}></Cards>
    </Layout>
  );
}

export async function getStaticProps() {
  let cards: { title: string; img: string; href: string }[] = [];
  for (let i = 0; i < 30; i++) {
    let content = "";
    for (let j = 0; j < i; j++) {
      content += "lorem ipsum. ";
    }
    cards.push({
      title: content,
      img: "/test.jpeg",
      href: "test" + i,
    });
  }
  return {
    props: {
      cards,
    },
  };
}
