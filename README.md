# Romão.js

Lib for executing tasks forever(while Romao isAlive()) every second. Usage:

## Spoiler

Returns infinite

## Usage

Code below:

```javascript
const Romao = require('.');
let task = () => {
  console.log("Executing task")
}

let Joao = new Romao(task);
```

## Author

Samir Fares