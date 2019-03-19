import React, {Component} from 'react'
import cat from "../../assets/img/cat.png";

class CatsListItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ...props.item,
      selected: false
    };
  }

  handleClick = () => {
    this.setState({
      selected : !this.state.selected
    });
  };

  render() {
    return (
      <div className={this.state.isSold ? "item-on-hover disabled" : "item-on-hover"}>
        <div className={this.state.selected ? "cats-item-filled active" : "cats-item-filled"}
             onClick={this.handleClick}>
          <div className="cats-item-wrapper">
            <div className="cats-item eat">
              <div className="cats-item__excerpt">{this.state.excerpt}</div>
              <div className="cats-item__title">
                <span className="cats-item__title_big">{this.state.name}</span>
                <span className="cats-item__title_normal eat-type">{this.props.item.with}</span>
              </div>
              <ul className="cats-item__description">
                <li className="description-list__item">{this.state.counts}</li>
                <li className="description-list__item">{this.state.gift}</li>
                <li className="description-list__item">{this.state.status}</li>
              </ul>
              <div className="cats-image">
                <img src={cat} className="cat" alt="cat" />
                <div className="size">
                  <span className="size_digit">{this.state.weight}</span>
                  <span className="size_weight">кг</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cats-list__message"
             onClick={this.handleClick}
             dangerouslySetInnerHTML={{__html: this.state.message}}>
        </div>
      </div>
    )
  }
}

export default CatsListItem