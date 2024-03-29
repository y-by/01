import React from 'react'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      textarea: ""
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const {name, value} = e.target
    this.setState({
      [name]: value,
      textarea: value
    })
  }
  render() {
    console.log(this.state)
    return (
      <form>
        <h2>Update state every input change</h2>
        <input
            name="firstName" 
            type="text" 
            value={this.state.firstName} 
            placeholder='First Name' 
            onChange={this.handleChange}
        />
        <br />
        <input
            name="lastName" 
            type="text" 
            value={this.state.lastName} 
            placeholder='Last Name' 
            onChange={this.handleChange}
        />
        <h1>{this.state.firstName} {this.state.lastName}</h1>
        
        {/* TODO: fix bug - on screen the lastName beeing display in the textArea */}
        <textarea 
            value={this.state.textarea}
            onChange={this.handleChange}
            />
        <a href="https://reactjs.org/docs/forms.html" target="_blank">React Forms documentation page</a>
      </form>
    )
  }
}

export default App
