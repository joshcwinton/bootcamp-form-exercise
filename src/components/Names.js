import React, { Component } from 'react';

class Names extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "First",
      lastName: "Last",
      oldFirstName: "First",
      oldLastName: "Last",
      editable: false
    }

    this.makeEditable = this.makeEditable.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.changeText = this.changeText.bind(this);
    this.cancelChange = this.cancelChange.bind(this);
  }

  makeEditable(){
    console.log("Making Form Editable");
    this.setState((state, props) => {
      return {
        editable: true
      }
    });
  }

  changeText(){
    console.log("Changing Text");
    this.setState((state, props) => {
      return {
        firstName: document.getElementById('first').value,
        lastName: document.getElementById('last').value
      }
    });
  }

  handleSave(){
    console.log("Saving Change");
    this.setState((state, props) => {
      return {
        firstName: document.getElementById('first').value,
        lastName: document.getElementById('last').value,
        oldFirstName: document.getElementById('first').value,
        oldLastName: document.getElementById('last').value,
        editable: false
      }
    })
  }

  cancelChange(){
    console.log("Cancelling");
    this.setState((state, props) => {
      return {
        firstName: this.state.oldFirstName,
        lastName: this.state.oldLastName,
        editable: false
      }
    });
  }

  render() {
    if (this.state.editable === false){
      return (
        <div> {this.state.firstName} {this.state.lastName}
          <button onClick={this.makeEditable}>Edit</button>
        </div>

      )
    } else {
      return (
        <div>
          <form>
            <input type="text" name="firstname" id="first" value={this.state.firstName} onChange={this.changeText}/>
            <input type="text" name="lastname" id="last" value={this.state.lastName} onChange={this.changeText}/>
          </form><button onClick={this.handleSave}>Save</button><button onClick={this.cancelChange}>Cancel</button>
        </div>
      )
    }
  }
}

export default Names
