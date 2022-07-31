export async function getServerSideProps(context) {
  const id = context.query.id;
  return {
    props: {
      id: id,
    },
  };
}

function Product(props) {
  return <div>Id product: {props.id}</div>;
}

export default Product;
