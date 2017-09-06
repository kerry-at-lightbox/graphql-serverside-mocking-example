import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';

import { resolvers } from './resolvers';

const fs = require('fs');
const path = require('path');
const typeDefs = [fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8")];

const schema = makeExecutableSchema({ typeDefs, resolvers });

addMockFunctionsToSchema({
    schema,
    //mocks: { channels: () => new MockList([3, () => {}]), String: () => 'Hello there' },
    mocks: { ID: () => 1, String: () => 'Hello there' },
    preserveResolvers: false
});
export { schema };
