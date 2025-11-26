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
  Mail,
  Check,
  NotepadText,
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
      <div className="logo-gopic">
        <img src={LogoImg} alt="logo gopic" />
      </div>
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
          {/* ----- Primeiro Card ----- */}
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
              <Inputs
                title={"Descrição"}
                placeholder={"Conte mais sobre o seu evento..."}
                icon={<NotepadText size={18} />}
                type={"email"}
              />
            </div>

            {/* ----- Segundo Card ----- */}
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
                type={"email"}
              />

              <div className="card-register-plan">
                <div className="area-top">
                  <div className="title-plan">
                    <h1>Plano Infinity</h1>
                  </div>
                  <div className="price-plan">
                    <h1 className="gradient">R$ 99,90</h1>
                  </div>
                </div>
                <div className="area-bottom">
                  <p className="row-rewards">
                    <Check size={12} /> Rede Social Privada
                  </p>
                  <p className="row-rewards">
                    <Check size={12} /> Upload ilimitado de fotos
                  </p>
                  <p className="row-rewards">
                    <Check size={12} /> Qr Code Personalizado
                  </p>
                  <p className="row-rewards">
                    <Check size={12} /> Válido por 30 dias
                  </p>
                </div>
              </div>
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
