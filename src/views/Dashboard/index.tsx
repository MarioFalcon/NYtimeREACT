import { memo, FC } from "react";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { Cards, Container, Content } from "./styles";
import useLogic from "./logic";

const Dashboard: FC = () => {
  const { isLoading, categories, handleGoToDetails } = useLogic();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Header />
      <Content>
        <Cards>
          {categories.map((category, index) => (
            <Card
              key={index}
              onClick={() => handleGoToDetails(category.key)}
              title={category.title}
              extraInfo={category.updated}
            />
          ))}
        </Cards>
      </Content>
    </Container>
  );
};

export default memo(Dashboard);
