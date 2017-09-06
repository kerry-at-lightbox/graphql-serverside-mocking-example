import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';

import { resolvers } from './resolvers';
import { mocks } from "./mocks"

const fs = require('fs');
const path = require('path');
const typeDefs = [fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8")];

const schema = makeExecutableSchema({ typeDefs, resolvers });

addMockFunctionsToSchema({
    schema,
    mocks: mocks,
    preserveResolvers: false
});
export { schema };
