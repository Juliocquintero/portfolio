import { ContactEmail, ContactWrapper, Icon, Icons, SendMailButton } from './styles';
import pdf from '../../assets/docs/cv_julioq.pdf';
import { useContext } from 'react';
import ThemeContext from '../../context/themeProvider';
import DataContext from '../../context/dataProvider';
const Contact = () => {
  const { colors } = useContext(ThemeContext);
  const { primary, secondary } = colors;
  const { info, language } = useContext(DataContext);
  const { contact } = info;
  return (
    <ContactWrapper id="contact-me" primary={primary} secondary={secondary}>
      <h3>{contact[language]?.title}</h3>
      <ContactEmail primary={primary} secondary={secondary}>
        <p>
          {contact[language]?.text}
          <strong>{contact[language]?.strong} </strong>
        </p>
        <SendMailButton
          href="mailto:juliocquinterog17@gmail.com"
          primary={primary}
          secondary={secondary}
        >
          <i className="far fa-envelope" aria-hidden="true"></i> {contact[language]?.button}
        </SendMailButton>
      </ContactEmail>

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
