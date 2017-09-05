# fun-router
A HTML custom element implementing the `<fun-router>` tag.

![fun-router in action](https://github.com/Kiricon/fun-router/raw/master/screencapture.gif)

## Setup

### Installation
```
npm i fun-router
```

---

```Html
<script src="node_modules/fun-router/fun-router.js"></script>
```
or if you're bundling
```Javascript
import "fun-router";
// or
require("fun-router");
```


## Usage
```HTML
    <fun-router>
        <home-page path="/"></home-page>
        <div path="/about">
            <div>url: /about </div>
            <h4>About Page</h4>
        </div>
        <foo-bar path="/name/:first/:last"></foo-bar>
    </fun-router>
```