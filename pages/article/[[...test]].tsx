import { open, readFile, readFileSync } from "fs";
import { GetStaticProps } from "next";

export default function Test({content}) {
  return <>
  {content ? 
  <div dangerouslySetInnerHTML={{__html: content}}/> : <h1>404 article not found</h1>}
  </>
}

export const getStaticProps: GetStaticProps = async (context) => {
  let path = "content/";
  let pathInput = context.params.test as string[];
  console.log(context);
  console.log(pathInput);
  if (pathInput && pathInput.length > 0) {
    pathInput.forEach((val, i) => {
      path += val + (i < (pathInput.length-1) ? "/" : ".html");
    })
    console.log(path);
    let results = await new Promise<string>((resolve, reject) => {
      readFile(path, "utf8", (err, data) => {
        resolve(err ? null : data);
      })
    })
    console.log(results);
    return {
      props: {
        content: results
      }
    }
  } else {
    return {
      props: {
      }
    }
  }
}

export async function getStaticPaths() {
  return {paths: ["/article/test"], fallback: true};
}