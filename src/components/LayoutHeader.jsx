import Link from "next/link";

export default function LayoutHeader(props) {
  return (
    <div className={styles.layout}>
      <div className="styles.header">
        <h1>{props.header ?? test}</h1>
        <Link href="/">back</Link>
      </div>
    </div>
  );
}
