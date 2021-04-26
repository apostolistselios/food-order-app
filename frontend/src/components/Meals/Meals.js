import React from 'react';
import MealsSummary from './MealsSummary';
import AvailiableMeals from './AvailiableMeals';

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailiableMeals />
    </React.Fragment>
  );
};

export default Meals;
