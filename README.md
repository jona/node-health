# About
Add health route to your node app

# Dependencies
1. Express (tested on >=4.x)

# Usage

First, you'll need to install with something like this:

```bash
npm install git+https://github.com/jona/node-health.git --save
```

Next, you'll add the require and add it to the app:

```javascript
health = require('node-health');
...
app.use(health);
```

**Note**: Make sure you add it before any authentication middleware
