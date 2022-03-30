# CANOPY-COVER LIBRARY FOR NODEJS PROJECTS

A Node-JS library to calculate the green canopy cover of a crop.

![npm](https://img.shields.io/npm/v/canopy-cover)
![npm bundle size](https://img.shields.io/bundlephobia/min/canopy-cover)
![node-current](https://img.shields.io/node/v/canopy-cover)
![NPM](https://img.shields.io/npm/l/canopy-cover)
![checks](https://badgen.net/github/checks/pacs27/canopy-cover)
![release](https://badgen.net/github/release/pacs27/canopy-cover)
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
  .getCanopyCover()
  .then(result => console.log(result))
  .catch(err => console.log(err));
```

## Installation

```console
$ npm install canopy-cover
```
## About Canopy Cover

The library has been designed with the aim of analyzing crop images and obtaining the vegetation cover. It uses the [sharp](https://github.com/lovell/sharp) module to quickly analyze the images. 

For now the only model used is Canopeo, you can see more about this model in this web site: [canopeo](https://canopeoapp.com) and in the following article:  
- Patrignani, A. and Ochsner, T.E., 2015. Canopeo: A powerful new tool for measuring fractional green canopy cover . Agronomy Journal, 107(6), pp.2312-2320. [Link](https://acsess.onlinelibrary.wiley.com/doi/full/10.2134/agronj15.0150) (Open access)
## Docs

 The library has 1 method (canopeo):

### CANOPEO
Canopeo clasifica la cubierta de canpopy utilizando los siguientes criterios:

**Red/Green < Param1 and Blue/Green < Param2 and 2Green-Red-Blue > Param3**

This conditional is applied to each pixel, if it is fulfilled, that pixel is considered to be vegetation.

Parameter 1 and parameter 2 have values close to 1 and classify pixels that are mainly in the green band.

Parameter 3 establishes the minimum green excess index, which usually has a value around 20 to select green vegetation.

Example of use:
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
  .getCanopyCover()
  .then(result => console.log(result))
  .catch(err => console.log(err));
```