import "../styles/Inputs.css";

const Inputs = ({
  title,
  icon: Icon,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  req,
  error,
}) => {
  return (
    <div className="box-input">
      <div className="title-input">
        <div className="icon-input">{Icon}</div>
        <div className="text-title-input">
          <p>
            {title}
            {req && <span style={{ color: "red" }}> *</span>}
          </p>
        </div>
      </div>
      <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        required={req}
        onBlur={onBlur}
        style={{ borderColor: error === true ? "#EF4444" : "#334155" }}
      />
      {error === true ? (
        <p className="subtitle-cpf">
          {title === "CPF" ? "CPF" : title === 'Whatsapp' ? 'Telefone' : title === "Data do evento" ? "Data" : "CEP"} Inválido.
        </p>
      ) : null}

      {title === "CPF" ? (
        <p className="subtitle-cpf">Necessário para emissão de nota fiscal</p>
      ) : null}
      {title === "Data do evento" ? (
        <p className="subtitle-cpf">
          Fotos disponíveis para download 2 dias após a data.
        </p>
      ) : null}
    </div>
  );
};
export default Inputs;
