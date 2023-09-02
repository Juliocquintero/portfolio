import {
  FaHtml5 as iconHTML,
  FaCss3Alt as iconCss,
  FaJsSquare as iconJs,
  FaBootstrap as iconBootstrap,
  FaGitAlt as iconGit,
  FaReact ,
} from "react-icons/fa";
import {
  SiNextdotjs as iconNextJS,
  SiStyledcomponents as iconStyled,
  SiRedux as iconRedux
} from "react-icons/si";
export const icons = {
  html: {
    icon: iconHTML,
    name: "Html 5",
    url: "https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/HTML_basics",
  },
  css: {
    icon: iconCss,
    name: "CSS 3",
    url: "https://developer.mozilla.org/es/docs/Learn/CSS/First_steps/What_is_CSS",
  },
  javascript: {
    icon: iconJs,
    name: "Javascript",
    url: "https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript",
  },
  react: {
    icon: FaReact,
    name: "React",
    url: "https://es.react.dev/",
  },
  next: {
    icon: iconNextJS,
    name: "Next Js",
    url: "https://nextjs.org/",
  },
  styled: {
    icon: iconStyled,
    name: "Styled components",
    url: "https://styled-components.com/",
  },
  redux: {
    icon: iconRedux,
    name: "React Redux",
    url: "https://react-redux.js.org/",
  },
  bootstrap: {
    icon: iconBootstrap,
    name: "Bootstrap",
    url: "https://getbootstrap.com/",
  },
  git: {
    icon: iconGit,
    name: "Git",
    url: "https://learn.microsoft.com/es-es/devops/develop/git/what-is-git",
  },
};
