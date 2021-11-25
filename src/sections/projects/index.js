import shopingCartDevices from '../../assets/img/shopingcart_mobile_desktop.png';
import batatabitDevices from '../../assets/img/batatabit_mobile_desktop.png';
import marvelHeroDevices from '../../assets/img/marvelhero_mobile_desktop.png';

import Card from './card';
import { Title } from './styles';
const Projects = () => {
  const projects = [
    {
      img: shopingCartDevices,
      name: 'Shoping Cart viewports',
      urls: {
        code: 'https://github.com/Juliocquintero/shopingcart',
        page: 'https://juliocquintero.github.io/shopingcart/',
      },
      description:
        'Pagina de Practica de un Carrito de compras, donde se utilizaron tecnologias tales como: HTML, CSS, Javascript, React (Redux), Bootstrap.',
      colors: {
        first: '#001948',
        second: '#293f8a',
        third: '#6c6cd8',
        fourth: '#b89bff ',
        fifth: '#ffc6ff00',
      },
    },
    {
      img: marvelHeroDevices,
      name: 'Marvel Heroes',
      urls: {
        code: 'https://github.com/Juliocquintero/marvelHero',
        page: 'https://juliocquintero.github.io/marvelHero',
      },
      description:
        'Es el sitio oficial de Marvel Entertainment. Explore personajes, cómics, programas de televisión y más oficiales de Marvel. En la misma, se utilizaron tecnologias tales como: HTML, CSS, Javascript, React (Routes, useContext), consumo de API, Styled Components.',
      colors: {
        first: '#000000',
        second: '#E6242920',
        third: '#E6242940',
        fourth: '#E6242980 ',
        fifth: '#E62429',
      },
      justify: 'left',
    },
    {
      img: batatabitDevices,
      name: 'Batatabit',
      urls: {
        code: 'https://github.com/Juliocquintero/batatabit_HTML-CSS',
        page: 'https://juliocquintero.github.io/batatabit_HTML-CSS/',
      },
      description:
        'Batatabit es una plataforma que brinda en tiempo real los diferentes precios y tendencias de las criptomonedas. En la misma, se utilizaron tecnologias tales como: HTML, CSS (Flexbox)',
      colors: {
        first: '#000000',
        second: '#201E1C ',
        third: '#F7931A60',
        fourth: '#F7931A80  ',
        fifth: '#F7931A ',
      },
      justify: 'right',
    },
  ];
  return (
    <section id="projects">
      <Title>Personal Projects</Title>
      {projects.map((el, index) => (
        <Card
          image={el.img}
          name={el.name}
          urls={el.urls}
          description={el.description}
          colors={el.colors}
          key={index}
          justify={el.justify}
        />
      ))}
    </section>
  );
};

export default Projects;
