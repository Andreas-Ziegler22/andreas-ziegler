import { useRouter } from "next/router";

function Product() {
  const router = useRouter();
  const id = router.query.id;

  return <div>Id product: {id}</div>;
}

export default Product;
