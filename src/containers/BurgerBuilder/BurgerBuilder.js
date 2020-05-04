import React, { Component } from "react";
import Auxillary from "../../hoc/Auxillary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENTS_PRICES = {
  salad: 0.5,
  cheese: 0.6,
  meath: 1.3,
  bacon: 0.7,
};
class BurgerBuilder extends Component {
  /* constructor(props) {
        super(props);
        
    } */
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  };

  addingredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updateIngredients = {
      ...this.state.ingredients,
    };
    updateIngredients[type] = updateCount;
    const priceAddition = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice : newPrice , ingredients: updateIngredients})
  };

  removeingredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount <=0){
      return;
    }
    const updateCount = oldCount - 1;
    const updateIngredients = {
      ...this.state.ingredients,
    };
    updateIngredients[type] = updateCount;
    const priceAddition = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    this.setState({totalPrice : newPrice , ingredients: updateIngredients})
  };

  render() {
    const disableInfo ={ ... this.state.ingredients};
    for (let key in disableInfo){
      disableInfo[key] = disableInfo[key] <=0
    }
    return (
      <Auxillary>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded = {this.addingredientHandler}
          ingredientRemoved = {this.removeingredientHandler}
          disabled={disableInfo}
          price={this.state.totalPrice}
        />
      </Auxillary>
    );
  }
}

export default BurgerBuilder;
