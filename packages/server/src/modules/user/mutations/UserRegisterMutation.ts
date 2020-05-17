import { GraphQLString, GraphQLNonNull } from 'graphql';

import { mutationWithClientMutationId } from 'graphql-relay';

import UserModel from '../UserModel';

import { generateToken } from '../../../common/auth';

export default mutationWithClientMutationId({
  name: 'UserRegisterMutation',
  inputFields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ name, email, password }) => {
    let user = await UserModel.findOne({ email: email.toLowerCase() });

    if (user) {
      return {
        error: 'Email already in use',
      };
    }

    user = new UserModel({
      name,
      email,
      password,
    });

    await user.save();

    return {
      token: generateToken(user),
    };
  },
  outputFields: {
    token: {
      type: GraphQLString,
      resolve: ({ token }) => token,
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
  },
});
