const products = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_PRODUCTS_SUCCESS':
      return action.products.map(item => {
        item.sent = true;
        return item;
      });

    case 'LOAD_PRODUCTS_FAILURE':
      break;

    case 'POST_PRODUCTS':
      return [
        ...state,
        {
          title: action.title,
          rate: action.rate,
          description: action.description,
          price: action.price,
          brand: action.brand,
          detail_product: action.detail_product,
          image: action.image,
          sent: true
        }
      ];

    case 'POST_PRODUCTS_SUCCESS':
      return action.products.map(item => {
        item.sent = true;
        return item;
      });

    case 'POST_PRODUCTS_FAILURE':
      return state.map(item => {
        if (item.id === action.id) {
          item.sent = false;
        }
        return item;
      });

    default:
      return state;
  }
};

export default products;
