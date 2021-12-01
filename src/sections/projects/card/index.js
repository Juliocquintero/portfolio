import { Button, Buttons, CardWrapper, Description, Image, Title } from './styles';

const Card = ({ image, name, colors, bgColors, description, urls, justify }) => {
  const { primary, secondary } = colors;
  return (
    <CardWrapper primary={bgColors.primary} secondary={primary} justify={justify}>
      <Title primary={primary} secondary={secondary}>
        {name}
      </Title>
      <Description primary={primary} secondary={secondary}>
        <p>{description}</p>
        <Buttons>
          <Button
            href={urls.page}
            target="_blank"
            rel="noreferrer"
            primary={primary}
            secondary={secondary}
          >
            Ver Proyecto
          </Button>
          <Button
            href={urls.code}
            target="_blank"
            rel="noreferrer"
            primary={primary}
            secondary={secondary}
          >
            Ver codigo
          </Button>
        </Buttons>
      </Description>

      <Image src={image} alt={name} />
    </CardWrapper>
  );
};

export default Card;
