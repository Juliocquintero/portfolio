import { createContext, useState } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [language, setLanguage] = useState('esp');
  const handleLanguage = (language) => {
    // if (language === 'esp') {
    //   setLanguage('eng');
    // } else {
    //   setLanguage('esp');
    // }
    setLanguage(language);
  };
  const info = {
    homeTitle: {
      eng: {
        title: `Hi, I'm Julio Quintero`,
        subTitle: 'React Frontend Developer',
      },
      esp: {
        title: 'Hola, soy Julio Quintero',
        subTitle: 'Desarrollador Frontend React',
      },
    },
    menuOpts: {
      eng: [
        { id: 1, link: '#', name: 'HOME', icon: 'fas fa-home' },

        { id: 2, link: '#about-me', name: 'ABOUT ME', icon: 'fas fa-address-card' },

        { id: 3, link: '#projects', name: 'PROJECTS', icon: 'fas fa-tasks' },

        { id: 4, link: '#contact-me', name: 'CONTACT ME', icon: 'fas fa-mail-bulk' },
      ],
      esp: [
        { id: 1, link: '#', name: 'INICIO', icon: 'fas fa-home' },

        { id: 2, link: '#about-me', name: 'SOBRE MI', icon: 'fas fa-address-card' },

        { id: 3, link: '#projects', name: 'PROYECTOS', icon: 'fas fa-tasks' },

        { id: 4, link: '#contact-me', name: 'CONTACTAME', icon: 'fas fa-mail-bulk' },
      ],
    },
    aboutMe: {
      title: {
        eng: 'About me',
        esp: 'Sobre mi',
      },
      info: {
        eng: `I am a software developer,  i love to work proactively and i like to challenge me and do my best to improve myself. At the same time, I try to keep up with the technologies; in addition to this i write a clean code with good practices. If I don't know any technology, I like to know it.`,
        esp: `Soy un desarrollador de software, me encanta trabajar de forma proactiva y me gusta
        desafiarme y hacer todo lo posible para mejorarme. Al mismo tiempo, trato de mantenerme al
        día con las tecnologías; Además de esto escribo un código limpio con buenas prácticas. Si
        desconozco alguna tecnología me gusta informarme sobre ella.`,
      },
      aboutMeIcons: [
        { id: 1, alt: 'html-icon', src: 'icon_html.svg' },
        { id: 2, alt: 'css-icon', src: 'icon_css.svg' },
        { id: 3, alt: 'js-icon', src: 'icon_javascript.svg' },
        { id: 4, alt: 'react-icon', src: 'icon_react.svg' },
        { id: 5, alt: 'redux-icon', src: 'icon_redux.svg' },
        { id: 6, alt: 'styled-icon', src: 'icon_styled.svg' },
        { id: 7, alt: 'bootstraps-icon', src: 'icon_bootstrap.svg' },
        { id: 8, alt: 'git-icon', src: 'icon_git.svg' },
      ],
    },
    projects: {
      title: {
        eng: 'Personal Projects',
        esp: 'Proyectos Personales',
      },
      list: [
        {
          id: 1,
          src: 'shopingcart_mobile_desktop.png',
          name: 'Shoping Cart viewports',
          urls: {
            code: 'https://github.com/Juliocquintero/shopingcart',
            page: 'https://juliocquintero.github.io/shopingcart/',
          },
          description: {
            eng: 'Practice page of a shopping cart. Used Technologies: HTML, CSS, Javascript, React (Redux) & Bootstrap ',
            esp: 'Pagina de Practica de un Carrito de compras, donde se utilizaron tecnologias tales como: HTML, CSS, Javascript, React (Redux), Bootstrap.',
          },
          bgColors: {
            primary: '#293f8a',
            secondary: '#001948',
          },
        },
        {
          id: 2,
          src: 'marvelhero_mobile_desktop.png',
          name: 'Marvel Heroes',
          urls: {
            code: 'https://github.com/Juliocquintero/marvelHero',
            page: 'https://juliocquintero.github.io/marvelHero',
          },
          description: {
            eng: 'It is the (un) official site of Marvel Entertainment. Explore official Marvel characters, comics, TV shows and more. Used Technologies: HTML, CSS, Javascript, React (Routes, useContext), API REST & Styled Components',
            esp: 'Es el sitio (no )oficial de Marvel Entertainment. Explore personajes, cómics, programas de televisión y más oficiales de Marvel. En la misma, se utilizaron tecnologias tales como: HTML, CSS, Javascript, React (Routes, useContext), consumo de API, Styled Components.',
          },
          bgColors: {
            primary: '#E62429',
            secondary: '#000000',
          },
          justify: 'left',
        },
        {
          id: 3,
          src: 'batatabit_mobile_desktop.png',
          name: 'Batatabit',
          urls: {
            code: 'https://github.com/Juliocquintero/batatabit_HTML-CSS',
            page: 'https://juliocquintero.github.io/batatabit_HTML-CSS/',
          },
          description: {
            eng: 'Batatabit is a platform that provides in real time the different prices and trends of cryptocurrencies. Designed with: HTML, CSS (Flexbox)',
            esp: 'Batatabit es una plataforma que brinda en tiempo real los diferentes precios y tendencias de las criptomonedas. En la misma, se utilizaron tecnologias tales como: HTML, CSS (Flexbox)',
          },
          bgColors: {
            primary: '#F7931A',
            secondary: '#000000',
          },
          justify: 'right',
        },
      ],
    },
    contact: {
      esp: {
        title: 'Contactame',
        text: 'Si crees que puedo aportar valor a tu empresa....',
        strong: '¡hablemos!',
        button: 'Escribeme',
      },
      eng: {
        title: 'Contact me',
        text: 'If you believe that I can contribute to your company, ',
        strong: 'talk to me!',
        button: 'Write me',
      },
    },
  };
  const data = { info, language, handleLanguage };
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataContext;
export { DataProvider };
