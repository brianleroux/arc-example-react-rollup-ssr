import React from 'react'
import About from './about'
import Contact from './contact'
import Fun from './fun'
import Home from './home'

export class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = props.state
  }

  render() {

    let content = <Home/>

    if (this.state.path === '/about')
      content = <About/>

    if (this.state.path === '/fun')
      content = <Fun/>

    if (this.state.path === '/contact')
      content = <Contact/>
    
    return (
      <div className="App">
        <h1 className="App-Title">Serverless Side Rendering Demo</h1>
        <a href="/">home</a> | 
        <a href="/about">about</a> | 
        <a href="/fun">fun</a> | 
        <a href="/contact">contact</a>
       { content }
      </div>
    )
  }
}
