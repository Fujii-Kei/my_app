import { EditButton } from "./EditButton";

const style = {
  width: "300px",
  height: "200px",
  borderRadius: "8px",
  backgroundColor: "#e0e0e0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const Card = () => {
  return (
    <div style={style}>
      <p>田中角栄</p>
      <EditButton />
    </div>
  );
}