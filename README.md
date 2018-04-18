# dining
ucla dining hall activity scraper

# Demo
```bash
$ git clone https://github.com/ryanmjacobs/dining
$ cd dining
$ npm install
$ node app.js
```
outputs:
```json
{
  "Covel": 0.15,
  "De Neve": 0.36,
  "FEAST": 0.29,
  "Bruin Plate": 0.4
}
```

## Library Usage
```bash
$ npm install ucla-dining
```

```javascript
const dining = require("dining");
dining.get_activity().then(activity => console.log(activity));
```
