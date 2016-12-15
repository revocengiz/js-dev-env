// This file isn't transpiled, so must useCommonJs and ES5.

// Register babel to transplie before our tests run.
require('babel-register')();

// Disable webpack features thatMocha does not understand.
require.extensions['.css'] = function () { };
