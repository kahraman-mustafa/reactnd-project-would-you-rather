import React, {Component} from "react";
import { DropdownList } from 'react-widgets';

class UserSelectionList extends Component {
  render(){
    let colors = ['orange', 'red', 'blue', 'purple']

    return(
      <select class="selectpicker">
        <option>Mustard</option>
        <option>Ketchup</option>
        <option>Barbecue</option>
      </select>
    )
  }
}

export default UserSelectionList;