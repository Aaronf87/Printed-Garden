const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

// !Revisit = Change to Environment Variable
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  AuthenticationError: new GraphQLError('Could not authenticate user.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),

  authMiddleware: function ({ req }) {
    // Allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { authenticatedUser } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = authenticatedUser;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },

  signToken: function ({ firstName, email, _id }) {
    const payload = { firstName, email, _id };

    return jwt.sign({ authenticatedUser: payload }, secret, { expiresIn: expiration });
  },
};
