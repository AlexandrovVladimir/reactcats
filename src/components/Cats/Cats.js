import React, {Component} from 'react'
import './Cats.sass'
import model from '../../model'

import CatList from '../CatsList/'
import CatsTitle from "../CatsTitle/";

class Cats extends Component {
  render() {
    return (
      <div className="cats-wrapper">
        <div className="cats">
          <CatsTitle />
          <CatList model={model} isSold={false} />
        </div>
      </div>
    );
  }
}

export default Cats;