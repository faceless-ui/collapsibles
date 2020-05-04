[![NPM](https://img.shields.io/npm/v/@trbl/react-collapsibles)](https://www.npmjs.com/@trbl/react-collapsibles)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@trbl/react-collapsibles?label=zipped)
[![Supported by TRBL](https://img.shields.io/badge/supported_by-TRBL-black)](https://github.com/trouble)

# React Collapsibles

Expand and collapse anything, or groups of anything. Accordions, drop-downs, show/hide, grouped lists, details, etc, etc, etc. Fully accessible, completely faceless. Does not care about the structure of your content, its style, or its markup.

## Highlights

  - #### Modular
  Does not care about the structure of your content. Nest [CollapsibleContent](./src/CollapsibleContent.README.md) or [CollapsibleToggler](./src/CollapsibleToggler/README.md) anywhere as a descendent of [Collapsible](./src/Collapsible/README.md). Wrap [CollapsibleGroup](./src/CollapsibleGroup/README.md) anywhere as an ancestor to control collectively. Retrofit existing components as-is.

  - #### Accessible
  Shipped fully accessible. [CollapsibleContent](./src/CollapsibleContent/README.md#accessibility), [CollapsibleToggler](./src/CollapsibleToggler/README.md#accessibility) strictly follow the [WAI-ARIA](https://www.w3.org/WAI/intro/aria) guidelines on [sections with show/hide functionality](https://www.w3.org/TR/wai-aria-practices-1.1/#accordion). You can also [customize anything](#agnostic-dom).

  - #### Faceless UI
  Applies no visual style, but encourages you to do so. Target any element and any state without additional legwork. [BEM](http://getbem.com/) classes come shipped. Transition classes too, using [react-transition-group](https://reactcommunity.org/react-transition-group/).

- #### Agnostic DOM
  Take complete control over the DOM. Things like custom markup, accessibility, or additional event handling. Everything beyond core functionality is [extendable](https://www.npmjs.com/package/@trbl/react-html-element).

## Quick Start

### Installation

```bash
$ npm i @trbl/react-collapsibles
$ # or
$ yarn add @trbl/react-collapsibles
```

### Composition

```jsx
  import React from 'react';
  import {
    CollapsibleGroup,
    Collapsible,
    CollapsibleToggler,
    CollapsibleContent
  } from '@trbl/react-collapsibles';

  const App = () => (
    <CollapsibleGroup>
      <Collapsible>
        <CollapsibleToggler>
          ...
        </CollapsibleToggler>
        <CollapsibleContent>
          ...
        </CollapsibleContent>
      </Collapsible>
    </CollapsibleGroup>
  )

  export default App;
```

For working examples, see the [demo app](./demo/App.demo.js).

## Demo

```bash
$ git clone git@github.com:trouble/react-collapsibles.git
$ yarn
$ yarn dev
$ open http://localhost:3000
```

## API

  - [Collapsible](./src/Collapsible/README.md)
  - [CollapsibleContent](./src/CollapsibleContent/README.md)
  - [CollapsibleGroup](./src/CollapsibleGroup/README.md)
  - [CollapsibleToggler](./src/CollapsibleToggler/README.md)
  - [useCollapsible](./src/Collapsible/README.md)
  - [useCollapsibleGroup](./src/CollapsibleGroup/README.md)

## Contribution

[Help us,](https://github.com/trouble/.github/blob/master/CONTRIBUTING.md) or let us [help you help us](https://github.com/trouble/.github/blob/master/SUPPORT.md).

## License

[MIT](https://github.com/trouble/react-collapsibles/blob/master/LICENSE) Copyright (c) TRBL, LLC
