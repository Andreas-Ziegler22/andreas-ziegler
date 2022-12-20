export default function Navegator(props) {
  return (
    <div
      className={StyleSheet.navegator}
      style={{ backgroundColor: props.cor ?? "background-color: dodgerblue" }}
    >
      {props.text}
    </div>
  );
}
