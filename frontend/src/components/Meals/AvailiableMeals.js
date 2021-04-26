import { useState, useEffect } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

import classes from './AvailiableMeals.module.css';

const AvailiableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch('http://localhost:3000/meals');
      const responseData = await response.json();

      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({ ...responseData[key] });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals();
  }, []);

  if (isLoading) {
    return (
      <section classes={classes['meals-loading']}>
        <p>Loading...</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal._id}
      id={meal._id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailiableMeals;
