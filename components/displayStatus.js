import './styles.css';

function DisplayStatus(props) {
  return (
    <div style={{ color: props.type === "error" ? "red" : "green" }}>
      {props.message}
    </div>
  );
}

export default DisplayStatus;