import React, {Component} from 'react'
import './CatsList.sass'
import CatsListItem from "../CatsListItem/";

class CatsList extends Component {

  constructor(props) {
    super(props);
  }

  getList() {
    return this.props.model.map((item, index) => {
      return (
        <li key={item.id}
            className="cats-list__item">
          <CatsListItem item={item} />
        </li>
      )
    });
  }



  render() {
    return (
      <ul className="cats-list">{this.getList()}</ul>
    )
  }
}

export default CatsList;