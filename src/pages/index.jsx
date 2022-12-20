import Navigator from "../components/Navigator";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        height: "10vh",
      }}
    >
      <Navigator navLink="Home" linkDestination="/home" />
      <Navigator navLink="About" linkDestination="/about" />
      <Navigator navLink="Test1" linkDestination="/test1" />
      <Navigator navLink="Test2" linkDestination="/test2" />
    </div>
  );
}
