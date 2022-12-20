import styles from "../styles/Navigator.module.css";
import Link from "next/link";

export default function Navigator(props) {
  return (
    <Link href={props.linkDestination}>
      <div
        className={styles.navigator}
        style={{ backgroundColor: props.cor ?? "background-color: dodgerblue" }}
      >
        {props.navLink}
      </div>
    </Link>
  );
}
