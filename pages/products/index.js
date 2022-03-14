import Link from "next/link";

const ProductList = () => {
  return (
    <>
      <Link href="/">
        <button>Home</button>
      </Link>
      <Link href="/products/1">
        <h1>Product 1</h1>
      </Link>
      <Link href="/producs/2">
        <h1>Product 2</h1>
      </Link>
      <Link href="/products/3">
        <h1>Product 3</h1>
      </Link>
    </>
  );
};

export default ProductList;
