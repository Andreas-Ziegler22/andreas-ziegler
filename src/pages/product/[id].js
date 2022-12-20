//genereted only the path
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: "1",
        },
      },
      {
        params: {
          id: "2",
        },
      },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;

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
