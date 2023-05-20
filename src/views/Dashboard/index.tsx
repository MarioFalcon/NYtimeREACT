import { FC, useCallback, useState, useEffect } from "react";
import Header from "../../components/Header";
import { cards } from "./constants";
import Card from "../../components/Card";
import "./styles.css";
import { getNyCategories } from "../../services/nytime";
import { Category } from "../../models/Category";

const Dashboard: FC = () => {
   const [categories, setCategories] = useState<Category[]>([]);

   const [isLoading, setIsLoading] = useState(false);

   const handleSetCategories = useCallback(async () => {
      const categoriesList = await getNyCategories();
      setCategories(categoriesList);
      setIsLoading(false);
   }, []);

   useEffect(() => {
      setIsLoading(true);
      handleSetCategories();
   }, [handleSetCategories]);

   if (isLoading) {
      return <div>Loading...</div>;
   }

   return (
      <div>
         <Header />
         <div className="dashboardContent">
            <div className="dashboardCards">
               {categories.map((category, index) => (
                  <Card
                     key={index}
                     title={category.title}
                     extraInfo={category.updated}/>))};
            </div>
         </div>
      </div>
   );
};

export default Dashboard;
