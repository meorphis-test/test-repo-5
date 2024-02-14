/**
 * Disclaimer: modules in _shims aren't intended to be imported by SDK users.
 */
const shims = require('./registry');
const auto = require('meorphis-test-5-ic7gid/_shims/auto/runtime');
if (!shims.kind) shims.setShims(auto.getRuntime(), { auto: true });
for (const property of Object.keys(shims)) {
  Object.defineProperty(exports, property, {
    get() {
      return shims[property];
    },
  });
}
