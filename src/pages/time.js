function Time(props) {
  console.log("> frontend");
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();

  return (
    <div>
      <div>{dynamicDateString} (dynamic)</div>
      <div>{props.staticDateString} (static - with delay)</div>
    </div>
  );
}

export async function getStaticProps() {
  console.log("> backend");
  console.log("> add 5 sec delay");

  // await delay(5000);
  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();

  return {
    props: {
      staticDateString,
    },
  };
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default Time;
