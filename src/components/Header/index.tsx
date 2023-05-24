import { FC, memo } from "react";
import { Container, Content, Title } from './styles'



const Header: FC = () => {
  return (
    <Container>
    <Content>
      <Title>NY Times Books</Title>
    </Content>
  </Container>
  );
};

export default memo(Header)
