import styles from "../styles/Navigator.module.css";

export default function Navigator(props) {
  return (
    <div
      className={styles.navigator}
      style={{ backgroundColor: props.cor ?? "background-color: dodgerblue" }}
    >
      {props.navLink}
    </div>
  );
}
