function ShopList({ shops }) {
  console.log(shops)
  return (
    <>
      <h1>List of Shops</h1>
      {shops.map((shop) => {
        return (
          <div key={shop.id}>
            <h2>
              {shop.id} {shop.title} {shop.price}
            </h2>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default ShopList;

export async function getStaticProps() {
  console.log("Generating / Regenerating shopList");
  const response = await fetch("http://localhost:4000/shops");
  const data = await response.json();

  return {
    props: {
      shops: data,
    },
    revalidate: 30,
  };
}
