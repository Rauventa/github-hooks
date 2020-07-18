import React, { Component } from 'react'
import { connect } from 'react-redux'

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <h3>{this.props.propsCounter}</h3>
        <button onClick={this.props.onAddCounter}>Add 1</button>
        <button onClick={this.props.onSubCounter}>Sub 1</button>
      </div>
    )
  }
}

// В этой функции мы должны забирать данные из state reducer, и записывать их в отдельную переменную, к который мы потом будем оьращаться через props
const mapStateToProps = (state) => ({
  propsCounter: state.counter
})

// В этой функции должны быть записи того, как будут выглядть функции в actions (Храним тут dispatch'и)
const mapDispatchToProps = (dispatch) => ({
  onAddCounter: () => dispatch({type: 'ADD'}),
  onSubCounter: () => dispatch({type: 'SUB'})
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
