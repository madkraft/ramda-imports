## Test bundle size

1.  Run `yarn build-with-maps` to generate package with source maps;
2.  Run `yarn sme dist/main.12345.bundle.js` to see bundle size;

Conclusion:
Importing ramda operators with destructuring imports only used operators and provides treeshaking when imported only from one module.

Importing ramda operators from 2 modules simultaneously increases buundle size from 1.3 to 49.86KB
