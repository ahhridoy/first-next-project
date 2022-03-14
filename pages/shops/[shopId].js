import { useRouter } from "next/router";

function Shop({ shop }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>
        {shop.id} {shop.title} {shop.price}
      </h2>
      <p>{shop.description}</p>
      <hr />
    </div>
  );
}

export default Shop;

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/shops/${params.shopId}`
  );
  const data = await response.json();
  console.log(`Generating page for /shops/${params.shopId}`);

  return {
    props: {
      shop: data,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { shopId: "1" } }],
    fallback: true,
  };
}
