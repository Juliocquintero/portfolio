import {
  Button,
  Buttons,
  CardWrapper,
  DescriptionWrapper,
  Image,
  Paragraph,
  Title,
} from './styles';

const Card = ({ image, name, colors, bgColors, description, urls, justify }) => {
  const { primary, secondary } = colors;
  return (
    <CardWrapper primary={bgColors.primary} secondary={primary} justify={justify}>
      <Title primary={primary} secondary={secondary}>
        {name}
      </Title>

      <DescriptionWrapper primary={primary} secondary={secondary}>
        <Paragraph secondary={secondary}>{description}</Paragraph>

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
      </DescriptionWrapper>

      <Image src={image} alt={name} />
    </CardWrapper>
  );
};

export default Card;
