import React from 'react';
import { mdReact } from 'markdown-react-js';
import { connect } from 'react-redux';

class Detail extends React.Component {
  render() {
    const product = this.props.loadProduct.item;
    const desc = mdReact()(product.detail_product);

    return (
      <div>
        <div className="row">
          <div className="col-sm" style={{ height: '300px' }}>
            <img
              src={`http://localhost:4000/image/${product.image}`}
              alt=""
              style={{
                maxHeight: '250px',
                maxWidth: '400px',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            />
          </div>
          <div className="col-sm">
            <h2>{product.title}</h2>
            <span className="badge badge-secondary" style={{ height: '22px' }}>
              {product.brand}
            </span>
            <hr />
            <span
              className="badge badge-pill badge-success"
              style={{ height: '22px' }}
            >
              price
            </span>
            <h3>Rp {product.price}</h3>
            <hr />
            <button type="button" className="btn btn-info">
              <i className="fas fa-shopping-cart" /> Buy
            </button>
            <button className="btn btn-danger mx-sm-2">
              <i className="fa fa-fw fa-heart" /> Vote
            </button>
          </div>
        </div>
        <div className="row ml-3">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button className="nav-link active">Product Detail</button>
            </li>
            <li className="nav-item">
              <p className="nav-link">Testimonial</p>
            </li>
          </ul>
        </div>
        <div className="row ml-3 mt-3">
          <div className="col-sm">{desc}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loadProduct: state.product
});

export default connect(mapStateToProps)(Detail);
