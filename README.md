[![NPM](https://img.shields.io/npm/v/@trbl/react-collapsibles)](https://www.npmjs.com/@trbl/react-collapsibles)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@trbl/react-collapsibles?label=zipped)
[![Supported by TRBL](https://img.shields.io/badge/supported_by-TRBL-black)](https://github.com/trouble)

# React Collapsibles

Now you see it, now you don't.

## Quick Start

### Installation

```bash
$ yarn add @trbl/react-collapsibles
```

### Composition

```jsx
  import React from 'react';
  import { Collapsible, CollapsibleGroup } from '@trbl/react-collapsibles';

  const App = () => {
    return (
      <Collapsible clickableNode={<p>Click to open</p>}>
        ...
      </Collapsible>
      <CollapsibleGroup
        allowMultiple={false}
        collapsibles={[
          {
            clickableNode: <p>Click to open</p>,
            children: <p>this</p>,
          },
          {
            clickableNode: <p>Or click to open</p>,
            children: <p>this instead</p>,
          },
        ]}
      />
    )
  }

  export default App;
```

## Demo

To demo locally, clone the repo and

```bash
$ yarn
$ yarn dev
$ open http://localhost:3000
```

## Documentation

All available props can be found via the references below:

  - [Collapsible](/src/Collapsible/README.md)
  - [CollapsibleGroup](/src/CollapsibleGroup/README.md)

## Contribution

[Help us,](https://github.com/trouble/.github/blob/master/CONTRIBUTING.md) or let us [help you help us](https://github.com/trouble/.github/blob/master/SUPPORT.md).

## License

[MIT](https://github.com/trouble/react-collapsibles/blob/master/LICENSE) Copyright (c) TRBL, LLC
