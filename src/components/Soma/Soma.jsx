import { Card } from "../Card";

export const Soma = (props) => {
  return (
    <Card title="Soma" green>
      <div className="intervalo">
        <span>
          <span>Resultado: </span>
          <strong>{10}</strong>
        </span>
      </div>
    </Card>
  );
};
