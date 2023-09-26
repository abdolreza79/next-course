import {
  Html,
  Body,
  Container,
  Preview,
  Link,
  Text,
  Tailwind,
} from "@react-email/components";

const WelcomeTemplate = ({ name }) => {
  return (
    <Html>
      <Preview>Welcome Aboard</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Text className="text-white">Hello {name}</Text>
            <Link href="https://www.google.com">google</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
