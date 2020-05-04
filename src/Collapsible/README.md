# Collapsible

Renders no DOM of its own. Provides a context layer for [CollapsibleContent] and [CollapsibleToggler].

## Usage

```jsx

```

## Props

- #### `classPrefix`
  Type: `String` or `Boolean`\
  Optional\
  Default: trbl\
  Notes: If `string`, prepends onto every class name. Useful for unique namespacing within complex stylesheets. Will inherit from [CollapsibleGroup](../CollapsibleGroup/README.md), if nested. Alternatively, just add additional class names to [any](../CollapsibleContent/README.md#className) [component](../CollapsibleContent/README.md#className). Set to `false` to disable prefixing altogether.

- #### `openOnInit`
  - Type: `Boolean`\
  - Optional\
  - Default: `false`\
  - Notes: If `true`, will open on mount, even if nested within [CollapsibleGroup](../CollapsibleGroup/README.md) with [allowMultiple](../CollapsibleGroup/README.md#allowMultiple) set to `false`.

- #### `onToggle`
  - Type: `Callback`\
  - Optional\
  - Notes: Will execute your function every time the modal open or closes.

- #### `transTime`
  Type: `Number`\
  Optional\
  Default: `1000`\
  Notes: Determines the duration by which transition classes are applied, in milliseconds.

- #### `transCurve`
  - Type:\
  - Optional\
  - Default:\
  - Notes:

 ## Provided Context

- #### `rootClass`
  - Type: `String`\
  - Optional\
  - Default:\
  - Notes:

- #### `classPrefix`
  Type: `String`\
  Notes: See [classPrefix](#classPrefix) above.

- #### `openOnInit`
  - Type: `Boolean`\
  - Optional\
  - Default:\
  - Notes:

- #### `isOpen`
  - Type: `Boolean`\
  - Optional\
  - Default:\
  - Notes:

- #### `handleClick`
  - Type: `Method`\
  - Optional\
  - Default:\
  - Notes:

- #### `transTime`
  Type: `Number`\
  Notes: See [transTime](#transTime) above.

- #### `transCurve`
  Type: `Number`\
  Notes: See [transCurve](#transCurve) above.
