var casual = require('casual');

export const mocks = {
    ID: () => casual.uuid,
    String: () => 'Hello World!'
};
