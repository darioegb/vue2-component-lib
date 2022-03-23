# BaseButton

This component is a button.

## Component props

| Prop     | Required | Type    | Description                   |
| -------- | -------- | ------- | ----------------------------- |
| disabled | false    | boolean | If true disabled button click |
| type     | false    | string  | Type of button                |

## Component events

| Prop  | Type | Description                    |
| ----- | ---- | ------------------------------ |
| click | void | Is trigger when button clicked |

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
		handleClick: () => // do something,
	}
  };
</script>
```
