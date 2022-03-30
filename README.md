# LIBCAMERA FOR RASPBERRY-PI

A Node-JS library to calculate the canopy cover of a crop.

![npm](https://img.shields.io/npm/v/canopy-cover)
![npm bundle size](https://img.shields.io/bundlephobia/min/canopy-cover)
![node-current](https://img.shields.io/node/v/canopy-cover)
![NPM](https://img.shields.io/npm/l/canopy-cover)
![checks](https://badgen.net/github/checks/pacs27/canopy-cover)
![](https://badgen.net/github/release/pacs27/canopy-cover)
![last-commit](https://badgen.net/github/last-commit/pacs27/canopy-cover)


```js
import canopyCover from 'canopy-cover';
// For CommonJs modules:
// const canopyCover = require('canopy-cover')
 const param1 = 0.95;
 const param2 = 0.95;
 const param3 = 20;
 const imagePath = 'path-to-your-image';
canopyCover
  .canopeo({ imagePath, param1, param2, param3 })
  .then(result => console.log(result))
  .catch(err => console.log(err));
```

## Installation

```console
$ npm install canopy-cover
```

## Quick Start