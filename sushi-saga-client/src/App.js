import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()

    this.state = {
      sushi: [],
      displayIndex: 0,
      eaten: [],
      money: 100
    }

  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(sushiData => {
        this.setState({
          sushi: sushiData
        })
      })
  }

  showFour = () => {
    return this.state.sushi.slice(this.state.displayIndex, this.state.displayIndex+4)
  }

  getMoreSushi = () => {
    this.setState({
      displayIndex: this.state.displayIndex + 4
    })
  }

  eat = (sushi) => {
    const newMoney = this.state.money - sushi.price

    if(!this.state.eaten.includes(sushi) && newMoney >= 0) {
      this.setState({
        eaten: [...this.state.eaten, sushi],
        money: newMoney
      })
    } else {
      alert("This option isn't available.")
    }

  }

  // addMoney = (event) => {

  //   event.preventDefault()

  //   let newMoney = parseInt(event.currentTarget.children[0].value)

  //   if(!newMoney) {newMoney = 0}

  //   this.setState({
  //     money: this.state.money + newMoney
  //   })

  //   event.currentTarget.reset()
  // }

  addTen = () => {
    this.setState({
      money: this.state.money + 10
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushiData={this.showFour()} moreSushi={this.getMoreSushi} eatAction={this.eat} eatenSushi={this.state.eaten} />
        <Table money={this.state.money} eatenArr={this.state.eaten} addMoney={this.addTen} />
        {/* <form id="new-money-form" onSubmit={this.addMoney}>Add $
          <input type="number" />
          <input type="submit" />
        </form> */}
      </div>
    );
  }
}

export default App;