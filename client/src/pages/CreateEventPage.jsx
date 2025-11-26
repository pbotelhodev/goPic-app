//Imports Tools
import { useEffect } from "react";
import { ROUTES } from "../routes";
import {
  PartyPopper,
  User,
  CreditCard,
  Pencil,
  CalendarDays,
  MapPin,
  Mail
} from "lucide-react";

//import componets
import Footer from "../components/Footer";
import Header from "../components/Header";

import Inputs from "../components/Inputs";
//Imports styles
import "../styles/CreateEventPage.css";

//Imports Images
import LogoImg from "../assets/logo-GoPic.png";

const CreateEventPage = () => {
  useEffect(() => {
    document.title = "Criar Festa - GoPic";
  }, []);
  return (
    <div className="body-createEvent">
      {/* ========== Header ========= */}
      <Header showButton={false} />
      {/* ========== Main ========== */}
      <div className="main">
        <div className="container">
          <div className="title-group">
            <div className="main-title gradient">
              <h1>Crie Sua Festa</h1>
            </div>
            <div className="main-subtitle">
              Preencha os dados abaixo e crie uma rede social exclusiva para seu
              evento
            </div>
          </div>
          <div className="card-cadastro">
            <div className="card-register">
              <div className="title-card">
                <div className="title-icon">
                  <PartyPopper className="icon-card-create" />
                </div>
                <div className="text-title">
                  <p>Informações da Festa</p>
                </div>
              </div>
              <div className="subtitle-card">
                <p>Detalhes do seu evento</p>
              </div>
              <Inputs
                title={"Nome da Festa*"}
                placeholder={"Ex: Aníversário do João"}
                icon={<Pencil size={18} />}
                type={"text"}
              />
              <Inputs
                title={"Data do evento*"}
                placeholder={"Ex; aníversário do João"}
                icon={<CalendarDays size={18} />}
                type={"date"}
              />
              <Inputs
                title={"Local*"}
                placeholder={"Ex: Salão de Festas XYZ"}
                icon={<MapPin size={18} />}
                type={"text"}
              />
            </div>
            <div className="card-register">
              <div className="title-card">
                <div className="title-icon">
                  <User className="icon-card-create" />
                </div>
                <div className="text-title">
                  <p>Seus Dados</p>
                </div>
              </div>
              <div className="subtitle-card">
                <p>Informações do organizador</p>
              </div>
              <Inputs
                title={"Nome Completo*"}
                placeholder={"Seu nome"}
                icon={<Pencil size={18} />}
                type={"text"}
              />
              <Inputs
                title={"Email*"}
                placeholder={"seu@email.com"}
                icon={<Mail size={18} />}
                type={"text"}
              />
            </div>
            <div className="card-register">
            </div>
          </div>
        </div>
      </div>
      {/* ========== Footer ========== */}
      <Footer />
    </div>
  );
};

export default CreateEventPage;
