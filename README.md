<!-- ix-docs-ignore -->

![imgix logo](https://assets.imgix.net/sdk-imgix-logo.svg)

`vue-imgix` provides an API for integrating [imgix](https://www.imgix.com/) into Vue sites.

[![npm version](https://img.shields.io/npm/v/vue-imgix.svg)](https://www.npmjs.com/package/vue-imgix)
[![Build Status](https://travis-ci.org/imgix/vue-imgix.svg?branch=master)](https://travis-ci.org/imgix/vue-imgix)
[![Downloads](https://img.shields.io/npm/dm/vue-imgix.svg)](https://www.npmjs.com/package/vue-imgix)
[![License](https://img.shields.io/npm/l/vue-imgix)](https://github.com/imgix/vue-imgix/blob/master/LICENSE)
[![Dependencies Status](https://david-dm.org/imgix/vue-imgix.svg)](https://david-dm.org/imgix/vue-imgix)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

---

# ⚠️ Work in Progress. This library is currently in development. We're planning to have a stable version of this library shipped soon, so please keep an eye on this space!

<!-- /ix-docs-ignore -->

<!-- NB: Run `npx markdown-toc README.md --maxdepth 4 | sed -e 's/[[:space:]]\{2\}/    /g'` to generate TOC :) -->

<!-- prettier-ignore-start -->

- [Overview / Resources](#overview--resources)
- [Get Started](#get-started)
- [Usage](#usage)
    * [Examples](#examples)
        + [Basic Use Case](#basic-use-case)
    * [Advanced examples](#advanced-examples)
        + [buildUrlObject](#buildurlobject)
        + [buildUrl](#buildurl)
        + [buildSrcSet](#buildsrcset)
- [Contributing](#contributing)
- [Code of Conduct](#code-of-conduct)
- [Contributors](#contributors)

<!-- prettier-ignore-end -->

## Overview / Resources

**Before you get started with vue-imgix**, it's _highly recommended_ that you read Eric Portis' [seminal article on `srcset` and `sizes`](https://ericportis.com/posts/2014/srcset-sizes/). This article explains the history of responsive images in responsive design, why they're necessary, and how all these technologies work together to save bandwidth and provide a better experience for users. The primary goal of react-imgix is to make these tools easier for developers to implement, so having an understanding of how they work will significantly improve your react-imgix experience.

Below are some other articles that help explain responsive imagery, and how it can work alongside imgix:

- [Using imgix with `<picture>`](https://docs.imgix.com/tutorials/using-imgix-picture-element). Discusses the differences between art direction and resolution switching, and provides examples of how to accomplish art direction with imgix.
- [Responsive Images with `srcset` and imgix](https://docs.imgix.com/tutorials/responsive-images-srcset-imgix). A look into how imgix can work with `srcset` and `sizes` to serve the right image.

## Get Started

Firstly, follow this [quick start guide](https://docs.imgix.com/setup/quick-start) to set-up an imgix account.

Then, install vue-imgix with the following commands, depending on your package manager.

- **NPM**: `npm install vue-imgix`
- **Yarn**: `yarn add vue-imgix`

This module exports two transpiled versions. If a ES6-module-aware bundler is being used to consume this module, it will pick up an ES6 module version and can perform tree-shaking. **If you are not using ES6 modules, you don't have to do anything.**

Finally, vue-imgix needs to be initialized before if can be used in components. Modify `App.vue` or similar to include the following:

```js
import { initVueImgix } from 'vue-imgix';

initVueImgix({
  domain: "<your company's imgix domain>",
});
```

And that's all you need to get started! Have fun!

## Usage

The main idea here is that you should be able to use this component just as you would an `<img />` tag.

### Examples

#### Basic Use Case

To render a simple image that will display an image based on the browser's dpr and the width of the rendered element using the power of srcsets, vue-imgix can be used as follows:

```html
<Imgix :src="examples/pione.jpg" sizes="100vw" />
```

**Please note:** `100vw` is an appropriate `sizes` value for a full-bleed image. If your image is not full-bleed, you should use a different value for `sizes`. [Eric Portis' "Srcset and sizes"](https://ericportis.com/posts/2014/srcset-sizes/) article goes into depth on how to use the `sizes` attribute.

This will generate HTML similar to the following:

```html
<img
  src="https://assets.imgix.net/examples/pione.jpg?auto=format"
  sizes="100vw"
  srcset="
    https://assets.imgix.net/examples/pione.jpg?auto=format&amp;w=100 100w,
    https://assets.imgix.net/examples/pione.jpg?auto=format&amp;w=200 200w,
    ...
  "
/>
```

### Advanced Examples

For advanced use cases which go above the basic usage outlined above, such as lazy loading, or integration with other components or libraries, this library provides a set of low-level APIs.

#### buildUrlObject

This function is provided a convenient way to generate values to pass to the src and srcset attributes.

In a component:

```html
<template>
  <img
    :src="advancedSrcObject.src"
    :srcset="advancedSrcObject.srcset"
    sizes="50vw"
  />
</template>

<script>
  import { buildUrlObject } from '@/plugins/vue-imgix';

  // NB: Make sure initVueImgix has been called before this code runs
  export default {
    name: 'advanced-build-url-object',

    computed: {
      advancedSrcObject: () =>
        buildUrlObject('examples/pione.jpg', {
          auto: 'format',
        }),
    },
  };
</script>
```

#### buildUrl

In addition to the helper above, we provide `buildURL` from imgix-core-js to help developers to create any URL they need.

```html
<template>
  <img :src="advancedUrl" />
</template>

<script>
  import { buildUrl } from '@/plugins/vue-imgix';

  // NB: Make sure initVueImgix has been called before this code runs
  export default {
    name: 'advanced-build-url',

    computed: {
      advancedUrl: () =>
        buildUrl('examples/pione.jpg', {
          auto: 'format',
        }),
    },
  };
</script>
```

#### buildSrcSet

We also provide `buildSrcSet` from imgix-core-js to help developers to create any srcset URL they need.

```html
<template>
  <img :src="advancedSrc" :srcset="advancedSrcSet" />
</template>

<script>
  import { buildUrl, buildSrcSet } from '@/plugins/vue-imgix';

  // NB: Make sure initVueImgix has been called before this code runs
  export default {
    name: 'advanced-build-srcset',

    computed: {
      advancedUrl: () =>
        buildUrl('examples/pione.jpg', {
          auto: 'format',
        }),
      advancedSrcSet: () =>
        buildSrcSet('examples/pione.jpg', {
          auto: 'format',
        }),
    },
  };
</script>
```

## Code of Conduct

imgix is dedicated to providing a harassment-free experience for everyone, regardless of gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, or religion. We do not tolerate harassment of participants in any form.

This code of conduct applies to all imgix sponsored spaces both online and off, including our open-source projects. Anyone who violates this code of conduct may be sanctioned or expelled from these spaces at the discretion of the imgix Anti-Abuse Team (codeofconduct@imgix.com).

[Our full Code of Conduct can be found here.](https://github.com/imgix/code-of-conduct)

## Contributors

Contributions are a vital part of this library and imgix's commitment to open-source. We welcome all contributions which align with this project's goals. More information can be found in the [contributing documentation](CONTRIBUTING.md).

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/frederickfogerty"><img src="https://avatars0.githubusercontent.com/u/615334?v=4" width="100px;" alt=""/><br /><sub><b>Frederick Fogerty</b></sub></a><br /><a href="https://github.com/imgix/vue-imgix/commits?author=frederickfogerty" title="Code">💻</a> <a href="https://github.com/imgix/vue-imgix/commits?author=frederickfogerty" title="Documentation">📖</a> <a href="#maintenance-frederickfogerty" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
