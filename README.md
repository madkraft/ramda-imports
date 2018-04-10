## Test bundle size

1.  Run `yarn build-with-maps` to generate package with source maps;
2.  Run `yarn sme dist/main.12345.bundle.js` to see bundle size;

Conclusion:
Importing from one module only with syntax `import compose from 'ramda/src/compose'` provides treeshaking.

Importing ramda operators from 2 modules simultaneously bundles only used operators.
