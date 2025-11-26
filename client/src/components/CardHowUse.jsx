import '../styles/CardHowUse.css'

const CardHowUse = ({ icon: Icon, title, subtitle }) => {
  return (
    <div className="card">
      <div className="icon-card-how">{Icon}</div>
      <div className="title-card-how">
        <h1>{title}</h1>
      </div>
      <div className="subtitle-card">
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default CardHowUse;
