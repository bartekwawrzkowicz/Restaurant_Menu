import React, { Component } from 'react';
import './App.css';
import Menu from './Menu';
import MenuButton from './MenuButton';
import SpecialsButton from './SpecialsButton';

class App extends Component {
  state = {
    meals: [],
    BtnMenuActive: false,
    BtnSpecialsActive: false,
  }

  componentDidMount() {
    fetch('data/meals.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          meals: data.meals
        })
      })
  }

  handleMenuClick = () => {
    this.setState({
      BtnMenuActive: !this.state.BtnMenuActive,
      BtnSpecialsActive: false,
    })
  }

  handleSpecialsClick = () => {
    this.setState({
      BtnSpecialsActive: !this.state.BtnSpecialsActive,
      BtnMenuActive: false,
    })
  }


  render() {
    const mealArrayCopy = [...this.state.meals];
    const menu = mealArrayCopy.filter(el => el.kind !== "Specials");
    const specials = mealArrayCopy.filter(el => el.kind === "Specials");

    let regularMenu = menu.map(meal => (
      <Menu key={meal.id} name={meal.name} kind={meal.kind} price={meal.price} />
    ));
    const specialMeal = specials.map(meal => (
      <Menu key={meal.id} name={meal.name} kind={meal.kind} price={meal.price} />
    ));

    const { BtnMenuActive, BtnSpecialsActive, meals } = this.state;

    return (
      <>
        <div>
          <h1>OUR FINE DINING<br />✯RESTAURANT✯</h1>
          <h2>check our today specials!</h2>
          <MenuButton meals={meals} click={this.handleMenuClick} active={BtnMenuActive} />
          <SpecialsButton meals={meals} click={this.handleSpecialsClick} active={BtnSpecialsActive} />
        </div>
        <div className={BtnMenuActive || BtnSpecialsActive ? "menu-box" : null}>
          <ul className="menu">
            {BtnMenuActive ? regularMenu : null}
            {BtnSpecialsActive ? specialMeal : null}
          </ul>
          <p className="order"></p>
        </div>
      </>
    );
  }
}

export default App;