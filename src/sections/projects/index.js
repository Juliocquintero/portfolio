import Card from './card';
import { SectionWrapper, Title } from './styles';
import { useContext } from 'react';
import DataContext from '../../context/dataProvider';
import ThemeContext from '../../context/themeProvider';
const Projects = () => {
  const { projects, language } = useContext(DataContext);
  const { title, list } = projects;
  const { colors } = useContext(ThemeContext);
  const { primary, secondary } = colors;
  return (
    <SectionWrapper id="projects" primary={primary} secondary={secondary}>
      <Title>{title[language]}</Title>
      {list?.map((card) => (
        <Card
          image={require(`../../assets/img/${card.src}`).default}
          name={card.name}
          urls={card.urls}
          description={card.description[language]}
          bgColors={card.bgColors}
          colors={colors}
          key={card.id}
          justify={card.justify}
        />
      ))}
    </SectionWrapper>
  );
};

export default Projects;
