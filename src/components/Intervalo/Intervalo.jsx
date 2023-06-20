import "./Intervalo.css";
import { Card } from "../Card";
import { connect } from "react-redux";
import { alterarMax, alterarMin } from "../../store";

const Intervalo = (props) => {
  const { min, max } = props;

  return (
    <Card title="Intervalo de Números" red>
      <div className="intervalo">
        <span>
          <strong>Mínimo</strong>
          <input
            type="number"
            defaultValue={min}
            onChange={(e) => props.alterarMinimo(+e.target.value)}
          />
        </span>
        <span>
          <strong>Máximo</strong>
          <input
            type="number"
            defaultValue={max}
            onChange={(e) => props.alterarMaximo(+e.target.value)}
          />
        </span>
      </div>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
};

const mapDispatchTopProps = (dispatch) => {
  return {
    alterarMinimo(value) {
      const action = alterarMin(value);
      dispatch(action);
    },
    alterarMaximo(value) {
      const action = alterarMax(value);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchTopProps)(Intervalo);
