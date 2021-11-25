import { Button, Buttons, CardWrapper, Description, Image, Title } from './styles';

const Card = ({ image, name, colors, description, urls, justify }) => {
  const { first, second, third, fourth, fifth } = colors;
  return (
    <CardWrapper
      colors={colors}
      first={first}
      second={second}
      third={third}
      fourth={fourth}
      fifth={fifth}
      justify={justify}
    >
      <Title>{name}</Title>
      <Description>
        <p>{description}</p>
        <Buttons>
          <Button href={urls.page} target="_blank" rel="noreferrer">
            Ver Proyecto
          </Button>
          <Button href={urls.code} target="_blank" rel="noreferrer">
            Ver codigo
          </Button>
        </Buttons>
      </Description>

      <Image src={image} alt={name} />
    </CardWrapper>
  );
};

export default Card;
