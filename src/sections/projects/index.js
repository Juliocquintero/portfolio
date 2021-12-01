import Card from './card';
import { SectionWrapper, Title } from './styles';
import { useContext } from 'react';
import DataContext from '../../context/dataProvider';
import ThemeContext from '../../context/themeProvider';
const Projects = () => {
  const { info, language } = useContext(DataContext);
  const data = info.projects;
  const { title, list } = data;
  const { colors } = useContext(ThemeContext);
  const { primary, secondary } = colors;
  return (
    <SectionWrapper id="projects" primary={primary} secondary={secondary}>
      <Title>{title[language]}</Title>
      {list.map((el) => (
        <Card
          image={require(`../../assets/img/${el.src}`).default}
          name={el.name}
          urls={el.urls}
          description={el.description[language]}
          bgColors={el.bgColors}
          colors={colors}
          key={el.id}
          justify={el.justify}
        />
      ))}
    </SectionWrapper>
  );
};

export default Projects;
