import { ContactWrapper, Icon, Icons, Paragraph, SendMailButton, Title } from './styles';
import pdf from '../../assets/docs/cv_julioq.pdf';
import { useContext } from 'react';
import ThemeContext from '../../context/themeProvider';
import DataContext from '../../context/dataProvider';
const Contact = () => {
  const { colors } = useContext(ThemeContext);
  const { primary, secondary } = colors;
  const { contactMe, language } = useContext(DataContext);
  return (
    <ContactWrapper id="contact-me" primary={primary} secondary={secondary}>
      <Title>{contactMe[language]?.title}</Title>

      <div>
        <Paragraph>
          {contactMe[language]?.text}
          <strong>{contactMe[language]?.strong} </strong>
        </Paragraph>
        <SendMailButton
          href="mailto:juliocquinterog17@gmail.com"
          primary={primary}
          secondary={secondary}
        >
          <i className="far fa-envelope" aria-hidden="true" /> {contactMe[language]?.button}
        </SendMailButton>
      </div>

      <Icons>
        <Icon
          href="https://github.com/Juliocquintero"
          target="_blank"
          primary={primary}
          secondary={secondary}
        >
          <i className="fab fa-github-square" />
        </Icon>

        <Icon
          href="https://www.linkedin.com/in/julio-quintero-208024215/"
          target="_blank"
          primary={primary}
          secondary={secondary}
        >
          <i className="fab fa-linkedin" />
        </Icon>

        <Icon href={pdf} target="_blank" primary={primary} secondary={secondary}>
          <i className="fas fa-file-pdf" />
        </Icon>
      </Icons>
    </ContactWrapper>
  );
};

export default Contact;
