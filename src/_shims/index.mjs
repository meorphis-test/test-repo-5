/**
 * Disclaimer: modules in _shims aren't intended to be imported by SDK users.
 */
import * as shims from './registry.mjs';
import * as auto from 'meorphis-test-5-ic7gid/_shims/auto/runtime';
if (!shims.kind) shims.setShims(auto.getRuntime(), { auto: true });
export * from './registry.mjs';
