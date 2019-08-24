import React from 'react';
import ListData from './ListData';
import { connect } from 'react-redux';
import { loadProducts } from '../actions';

class List extends React.Component {
  componentDidMount() {
    this.props.loadProducts();
  }

  render() {
    const { products } = this.props;
    return (
      <div>
        <div className="row">
          {products.map((products, index) => {
            return <ListData products={products} key={index} />;
          })}
        </div>
        {/* <hr />
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="/" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadProducts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
