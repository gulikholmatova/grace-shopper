import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../reducers/cart';
import {Link} from 'react-router-dom';

export class SingleProductCard extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.addToCart(this.props.product.id);
  }

  render() {
    const {name, imageURL, price, id} = this.props.product;
    return (
      <div className="smallImage">
        <ul key={id}>
          <li>
            <Link to={`/products/${id}`}>{name}</Link>
          </li>
          <Link to={`/products/${id}`}>
            {' '}
            <img src={imageURL} />{' '}
          </Link>
          <li>${price / 100}</li>
        </ul>
        <button type="submit" onClick={this.handleClick}>
          Add to Cart
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  products: state.products
});

const mapDispatchToProps = dispatch => ({
  addToCart: id => dispatch(addToCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProductCard);