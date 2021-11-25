import { ContactEmail, ContactWrapper, Icon, Icons, SendMailButton } from './styles';
import pdf from '../../assets/docs/cv_julioq.pdf';
const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <h3>Contact me</h3>
      <ContactEmail>
        <p>
          Si crees que puedo aportar valor a tu empresa....<strong>¡hablemos! </strong>
        </p>
        <SendMailButton href="mailto:juliocquinterog17@gmail.com">
          <i className="far fa-envelope" aria-hidden="true"></i> Escríbeme
        </SendMailButton>
      </ContactEmail>

      <Icons>
        <Icon href="https://github.com/Juliocquintero" target="_blank">
          <i className="fab fa-github-square" />
        </Icon>

        <Icon href="https://www.linkedin.com/in/julio-quintero-208024215/" target="_blank">
          <i className="fab fa-linkedin" />
        </Icon>

        <Icon href={pdf} target="_blank">
          <i className="fas fa-file-pdf" />
        </Icon>
      </Icons>
    </ContactWrapper>
  );
};

export default Contact;
