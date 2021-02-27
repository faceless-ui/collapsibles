# Collapsible Toggler

Lorem

## Usage

Nest anywhere within a [Collapsible](../Collapsible/README.md) to control the nearest [CollapsibleContent](../CollapsibleContent/README.md).

```jsx
  import React from 'react';
  import { Collapsible } from '@faceless-ui/collapsible';

  export default SomeComponent = () => (
    <Collapsible>
      ...
      <CollapsibleToggler>
        ...
      <CollapsibleToggler>
    </Collapsible>
  )
```

Can also be nested multiple times over, but will only ever control the nearest [CollapsibleContent](../CollapsibleContent/README.md) within its ancestral tree.

```jsx
  return (
    <Collapsible>
      ...
      <CollapsibleContent />
      <CollapsibleToggler />
      <Collapsible>
        ...
        <CollapsibleContent />
        <CollapsibleToggler />
      </Collapsible>
    </Collapsible>
  )
```

Customize the markup, add additional click behavior, anything you want.

```jsx
  import React from 'react';
  import { Collapsible } from '@faceless-ui/collapsible';

  export default SomeComponent = () => (
    <Collapsible
      id="some-id"
      className="some-additional-class"
      htmlElement="span"
      htmlAttributes={{
        aria-label: 'Click to toggle the collapsible.',
        onClick: () => console.count()
      }}
    >
      ...
    </Collapsible>
  )
```

## Accessibility

Complies with the [WAI-ARIA](https://www.w3.org/WAI/intro/aria) guidelines as they relate to [Accordion Header](https://www.w3.org/TR/wai-aria-practices-1.1/#accordion), all of which can be modified at your discretion.

- #### `htmlElement`
  Defaults to `button`.

- #### `role`
  Defaults to `button`.

- #### `aria-expanded`
  Toggled `true` or `false` based on the status of the controlled collapsible.

- #### `aria-controls`
  Defaults to the `id` of the controlled collapsible.

## Classes

```scss
  .collapsible__toggler {
    ...
    &--is-open { ... }
    &--is-disabled { ... }
    ...
    &--appear { ... }
    &--appearActive { ... }
    &--appearDone { ... }
    &--enter { ... }
    &--enterActive { ... }
    &--enterDone { ... }
    &--exit { ... }
    &--exitActive { ... }
    &--exitDone { ... }
  }
```

## Props

- #### `disable`
  Type: `Bool`\
  Optional
  Notes: When `true` prevents the event handler from controlling the modal.

- #### `id`
  Type: `String`\
  Optional

- #### `className`
  Type: `String`\
  Optional

- #### `style`
  Type: `Boolean`\
  Optional

- #### `htmlElement`
  Type: `String`\
  Optional\
  Default: `button`\
  Notes: Changes may effect [accessibility](#accessibility).

- #### `htmlAttributes`
  Type: `Object`\
  Optional\
  Notes: Changes may effect [accessibility](#accessibility).
