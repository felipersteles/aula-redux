import { Card } from "../Card";
import { connect } from "react-redux";

const Sorteio = (props) => {
  const { min, max } = props;

  const alea = parseInt(Math.random() * (max - min)) + min;

  return (
    <Card title="Sorteio" purple>
      <div className="intervalo">
        <span>
          <span>Resultado: </span>
          <strong>{alea}</strong>
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

export default connect(mapStateToProps)(Sorteio);
