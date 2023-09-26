import { createContext, useState } from "react";
import { icons } from "../constans/icons";
import {
  getLocalStorageValue,
  handleLocalStorage,
} from "../utilities/handleLocalStorage";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const languageInLocalStorage = getLocalStorageValue("language");
    return languageInLocalStorage || "esp";
  });
  const handleLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    handleLocalStorage("language", newLanguage);
  };

  const hero = {
    eng: {
      title: `Hi, I'm Julio Quintero`,
      subTitle: "React Frontend Developer",
    },
    esp: {
      title: "Hola, soy Julio Quintero",
      subTitle: "Desarrollador Frontend React",
    },
  };

  const aboutMe = {
    title: {
      eng: "About me",
      esp: "Sobre mi",
    },
    info: {
      eng: `I'm a passionate and proactive software developer who is always looking to push my limits. My passion lies in finding exciting and practical ways to create solutions for people. I'm constantly in pursuit of new challenges and innovation opportunities.`,
      esp: `Soy un desarrollador de software apasionado y proactivo que siempre busca superarse. 
      
      Mi pasión es encontrar formas emocionantes y útiles de crear soluciones para las personas. Siempre en busca de nuevos desafíos y oportunidades de innovación.`,
    },
    aboutMeIcons: [
      icons.html,
      icons.css,
      icons.javascript,
      icons.react,
      icons.next,
      icons.styled,
      icons.redux,
      icons.bootstrap,
      icons.git,
    ],
  };
  const contactMe = {
    esp: {
      title: "Contactame",
      text: "Si crees que puedo aportar valor a tu empresa....",
      strong: "¡hablemos!",
      button: "Escribeme",
    },
    eng: {
      title: "Contact me",
      text: "If you believe that I can contribute to your company, ",
      strong: "talk to me!",
      button: "Write me",
    },
  };

  const projects = {
    title: {
      eng: "Personal Projects",
      esp: "Proyectos Personales",
    },
    list: [
      {
        id: 1,
        src: "shopingcart_mobile_desktop2.png",
        name: "Shoping Cart viewports",
        urls: {
          code: "https://github.com/Juliocquintero/shopingcart",
          page: "https://juliocquintero.github.io/shopingcart/",
        },
        description: {
          eng: "Practice page of a shopping cart. Used Technologies: HTML, CSS, Javascript, React (Redux) & Bootstrap ",
          esp: "Pagina de Practica de un Carrito de compras, donde se utilizaron tecnologias tales como: HTML, CSS, Javascript, React (Redux), Bootstrap.",
        },
        bgColors: {
          primary: "#293f8a",
          secondary: "#001948",
        },
      },
      {
        id: 2,
        src: "marvelhero_mobile_desktop2.png",
        name: "Marvel Heroes",
        urls: {
          code: "https://github.com/Juliocquintero/marvelHero",
          page: "https://juliocquintero.github.io/marvelHero",
        },
        description: {
          eng: "It is the (un) official site of Marvel Entertainment. Explore official Marvel characters, comics, TV shows and more. Used Technologies: HTML, CSS, Javascript, React (Routes, useContext), API REST & Styled Components",
          esp: "Es el sitio (no )oficial de Marvel Entertainment. Explore personajes, cómics, programas de televisión y más oficiales de Marvel. En la misma, se utilizaron tecnologias tales como: HTML, CSS, Javascript, React (Routes, useContext), consumo de API, Styled Components.",
        },
        bgColors: {
          primary: "#E62429",
          secondary: "#000000",
        },
        justify: "left",
      },
      {
        id: 3,
        src: "batatabit_mobile_desktop2.png",
        name: "Batatabit",
        urls: {
          code: "https://github.com/Juliocquintero/batatabit_HTML-CSS",
          page: "https://juliocquintero.github.io/batatabit_HTML-CSS/",
        },
        description: {
          eng: "Batatabit is a platform that provides in real time the different prices and trends of cryptocurrencies. Designed with: HTML, CSS (Flexbox).",
          esp: "Batatabit es una plataforma que brinda en tiempo real los diferentes precios y tendencias de las criptomonedas. En la misma, se utilizaron tecnologias tales como: HTML, CSS (Flexbox).",
        },
        bgColors: {
          primary: "#F7931A",
          secondary: "#000000",
        },
        justify: "right",
      },
    ],
  };
  const menuOpts = {
    eng: [
      { id: 1, link: "#", name: "HOME", icon: "fas fa-home" },

      {
        id: 2,
        link: "#about-me",
        name: "ABOUT ME",
        icon: "fas fa-address-card",
      },

      { id: 3, link: "#projects", name: "PROJECTS", icon: "fas fa-tasks" },

      {
        id: 4,
        link: "#contact-me",
        name: "CONTACT ME",
        icon: "fas fa-mail-bulk",
      },
    ],
    esp: [
      { id: 1, link: "#", name: "INICIO", icon: "fas fa-home" },

      {
        id: 2,
        link: "#about-me",
        name: "SOBRE MI",
        icon: "fas fa-address-card",
      },

      { id: 3, link: "#projects", name: "PROYECTOS", icon: "fas fa-tasks" },

      {
        id: 4,
        link: "#contact-me",
        name: "CONTACTAME",
        icon: "fas fa-mail-bulk",
      },
    ],
  };

  const data = {
    hero,
    aboutMe,
    contactMe,
    projects,
    menuOpts,
    language,
    handleLanguage,
  };
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataContext;
export { DataProvider };
