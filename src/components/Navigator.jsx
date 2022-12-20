import styles from "../styles/Navigator.module.css";

export default function Navegator(props) {
  return (
    <div
      className={styles.navegator}
      style={{ backgroundColor: props.cor ?? "background-color: dodgerblue" }}
    >
      {props.text}
    </div>
  );
}
