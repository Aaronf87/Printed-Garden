import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query me {
  me {
    _id
    firstName
    lastName
    username
    email
    products {
      name
      price
      quantity
      category {
        name
      }
    }
    orders {
      _id
      purchaseDate
      products {
        product {
          _id
          name
        }
        quantity
      }
    }
  }
}
`;

export const QUERY_PRODUCTS = gql`
query getProducts($category: ID) {
  getProducts(category: $category) {
    name
    description
    price
    quantity
    category {
      name
    }
    userId {
      username
      firstName
      lastName
    }
  }
}
`;

export const QUERY_ALL_PRODUCTS = gql`
query getProducts {
  getProducts {
    name
    description
    price
    quantity
    category {
      name
    }
    userId {
      username
      firstName
      lastName
    }
  }
}
`;

export const QUERY_PRODUCT = gql`
query getProduct($id: ID!) {
  getProduct(_id: $id) {
    name
    description
    price
    quantity
    category {
      name
    }
    userId {
      username
    }
  }
}
`;

export const QUERY_CATEGORIES = gql`
query getCategories {
  getCategories {
    _id
    name
  }
}
`;