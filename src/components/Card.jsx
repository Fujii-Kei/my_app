import { EditButton } from "./EditButton";

const style = {
  width: "100px",
  padding: "6px",
  borderRadius: "8px",
};

export const Card = props => {
  const { isAdmin } = props;

  return (
    <div style={style}>
      <p>田中角栄</p>
      <EditButton isAdmin={isAdmin} />
    </div>
  );
}