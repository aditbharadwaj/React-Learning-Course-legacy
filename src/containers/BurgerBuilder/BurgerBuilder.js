import React, { Component } from "react";
import Auxillary from "../../hoc/Auxillary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

/* https://react-myburger-e2d71.firebaseio.com/ */
class BurgerBuilder extends Component {
  /* constructor(props) {
        super(props);
        
    } */
  state = {
    //  ingredients: null,
    //totalPrice: 4,
    //purchasable: false,
    pruchasing: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    /*   axios
      .get("https://react-myburger-e2d71.firebaseio.com/ingredients.json")
      .then((response) => {
        console.log("response :", response);
        this.setState({ ingredients: response.data });
      })
      .catch((error) => {
        this.setState({ error: true });
      }); */
  }

  purchaseHandler = () => {
    this.setState({ pruchasing: true });
  };

  purchaseContinueHandler = () => {
    this.props.history.push("/checkout");
  };

  purchaseCancelHandler = () => {
    this.setState({ pruchasing: false });
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  }

  render() {
    const disableInfo = { ...this.props.ings };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    let orderSummary = null;

    let burger = this.state.error ? (
      <p>ingredients cant be loaded</p>
    ) : (
      <Spinner />
    );
    if (this.props.ings) {
      burger = (
        <Auxillary>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disableInfo}
            price={this.props.price}
            purchasable={this.updatePurchaseState(this.props.ings)}
            ordered={this.purchaseHandler}
          />
        </Auxillary>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          totalPrice={this.props.price}
        />
      );
      if (this.state.loading) {
        orderSummary = <Spinner />;
      }
    }
    return (
      <Auxillary>
        <Modal
          show={this.state.pruchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Auxillary>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("state.totalPrice :", state.totalPrice);
  return {
    ings: state.ingredients,
    price: state.totalPrice,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName) =>
      dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName }),
    onIngredientRemoved: (ingName) =>
      dispatch({
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: ingName,
      }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
