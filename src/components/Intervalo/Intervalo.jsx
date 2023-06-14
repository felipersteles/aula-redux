import "./Intervalo.css";
import { Card } from "../Card";

export const Intervalo = (props) => {
  return (
    <Card title="Intervalo de Números" red>
      <div className="intervalo">
        <span>
          <strong>Mínimo</strong>
          <input type="number" defaultValue={0} />
        </span>
        <span>
          <strong>Máximo</strong>
          <input type="number" defaultValue={10} />
        </span>
      </div>
    </Card>
  );
};
