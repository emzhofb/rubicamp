import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { postProducts } from '../actions';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      imagePreviewUrl: null,
      title: '',
      rate: 0,
      description: '',
      price: '',
      brand: '',
      detail_product: '',
      image: '',
      redirect: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    const imageData = this.state.file;
    data.append('image', imageData);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    const url = 'http://localhost:4000/api/ecommerce/upload';

    axios
      .post(url, data, config)
      .then(res => {
        this.setState({
          image: res.data.image
        });
        const {
          title,
          rate,
          description,
          price,
          brand,
          detail_product,
          image
        } = this.state;

        axios
          .post('http://localhost:4000/api/ecommerce', {
            title,
            rate,
            description,
            price,
            brand,
            detail_product,
            image
          })
          .then(res => {
            this.setState({
              redirect: true
            });
          })
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  };

  handleChange = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  handleImageChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  };

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (
        <img src={imagePreviewUrl} style={{ width: '20rem' }} alt="" />
      );
    }

    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
      <div className="card border-info mb-3">
        <div className="card-header text-white bg-info">Add Ads</div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                <div className=" float-xl-right">Title</div>
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="title"
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="title"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                <div className=" float-xl-right">Rate</div>
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  name="rate"
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="0"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                <div className=" float-xl-right">Description</div>
              </label>
              <div className="col-sm-10">
                <textarea
                  rows="2"
                  name="description"
                  type="text"
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="description"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                <div className=" float-xl-right">Price</div>
              </label>
              <div className="col-sm-10">
                <input
                  name="price"
                  onChange={this.handleChange}
                  type="text"
                  className="form-control"
                  placeholder="price"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                <div className=" float-xl-right">Brand</div>
              </label>
              <div className="col-sm-10">
                <input
                  name="brand"
                  type="text"
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="brand"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                <div className=" float-xl-right">Detail Product</div>
              </label>
              <div className="col-sm-10">
                <textarea
                  rows="5"
                  name="detail_product"
                  onChange={this.handleChange}
                  type="text"
                  className="form-control"
                  placeholder="detail product"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                <div className=" float-xl-right">Image</div>
              </label>
              <div className="col-sm-10">
                <input
                  type="file"
                  className="form-control"
                  onChange={this.handleImageChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                <div className=" float-xl-right" />
              </label>
              <div className="col-sm-10">{$imagePreview}</div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                <div className=" float-xl-right" />
              </label>
              <div className="col-sm-10">
                <button type="submit" className="btn btn-success text-white">
                  Save
                </button>
                <Link to="/" className="btn btn-warning mx-sm-1 text-white">
                  Cancel
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  postProducts: (
    title,
    rate,
    description,
    price,
    brand,
    detail_product,
    image
  ) => {
    dispatch(
      postProducts(
        title,
        rate,
        description,
        price,
        brand,
        detail_product,
        image
      )
    );
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Add);
