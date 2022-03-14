import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const handleProducts = () => {
    console.log("Placing to products");
    router.push("/products");
  };
  return (
    <>
      <h1>Home Page</h1>
      <Link href="/blog" passHref>
        <button>Go to blog</button>
      </Link>
      <button onClick={handleProducts}>Products</button>
      <Link href="/posts" passHref>
        <button>Posts</button>
      </Link>
    </>
  );
};

export default Home;
