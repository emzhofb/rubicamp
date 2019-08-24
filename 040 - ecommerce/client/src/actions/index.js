import axios from 'axios';

const API_URL = 'http://localhost:4000/api/';
const request = axios.create({
  baseURL: API_URL,
  timeout: 1000
});

export const loadProduct = product => {
  return {
    type: 'DETAIL_PRODUCT',
    item: product
  };
};

export const loadProductsSuccess = products => ({
  type: 'LOAD_PRODUCTS_SUCCESS',
  products
});

export const loadProductsFailure = () => ({
  type: 'LOAD_PRODUCTS_FAILURE'
});

export const loadProducts = () => {
  return dispatch => {
    return request
      .get('ecommerce')
      .then(response => {
        dispatch(loadProductsSuccess(response.data));
      })
      .catch(error => {
        console.error(error);
        dispatch(loadProductsFailure());
      });
  };
};

export const postProductsSuccess = products => ({
  type: 'POST_PRODUCTS_SUCCESS',
  products
});

export const postProductsFailure = title => ({
  type: 'POST_PRODUCTS_FAILURE',
  title
});

const postProductsRedux = (
  title,
  rate,
  description,
  price,
  brand,
  detail_product,
  image
) => ({
  type: 'POST_PRODUCTS',
  title,
  rate,
  description,
  price,
  brand,
  detail_product,
  image
});

export const postProducts = (
  title,
  rate,
  description,
  price,
  brand,
  detail_product,
  image
) => {
  return dispatch => {
    dispatch(
      postProductsRedux(
        title,
        rate,
        description,
        price,
        brand,
        detail_product,
        image
      )
    );
    return request
      .post('ecommerce/upload', { image })
      .then(response => {
        return request
          .post('ecommerce', {
            title,
            rate,
            description,
            price,
            brand,
            detail_product,
            image: response.data
          })
          .then(res => {
            dispatch(postProductsSuccess(res.data));
          });
      })
      .catch(err => {
        console.error(err);
        dispatch(postProductsFailure());
      });
  };
};
