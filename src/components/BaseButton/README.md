# BaseButton

This component is a dropdown menu with checkboxes option to filter data.

## Component props

| Prop     | Required | Type    | Description                   |
| -------- | -------- | ------- | ----------------------------- |
| disabled | false    | boolean | if true disabled button click |
| type     | false    | string  | type of button                |

## How to use:

_Example_

- In vue file from component parent add the component

```html
<template>
  <base-button @click="handleClick">{{ buttonText }}</base-button>
</template>
```

```javascript
<script>
  export default {
    data: () => ({
        buttonText: 'Test button', // you can also get text from translation file
    }),
	methods: {
		handleClick(selected) {
			// do something
		},
	}
  };
</script>
```
