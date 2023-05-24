import { FC, useCallback, useState, useEffect } from "react";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { getNyCategories } from "../../services/nytime";
import { Category } from "../../models/Category";
import { useNavigate } from "react-router-dom";
import { Cards, Container, Content } from './styles'

const Dashboard: FC = () => {
   const [categories, setCategories] = useState<Category[]>([]);
   const [isLoading, setIsLoading] = useState(false);
const navigate = useNavigate ()

const handleGoToDetails = useCallback (
   (listKey:string) => {
   navigate(`/dashboard/${listKey}`)
}, 
[navigate])

   const handleSetCategories = useCallback(async () => {
      const categoriesList = await getNyCategories();
      setCategories(categoriesList);
      setIsLoading(false);
   }, []);

   useEffect(() => {
      handleSetCategories();
   }, [handleSetCategories]);

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
    )
  }
  

export default Dashboard;
