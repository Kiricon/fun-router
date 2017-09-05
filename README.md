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
and for making links that don't redirect

```HTML
<fun-link href="/">
    <fun-tab>Home</fun-tab>
</fun-link>
<fun-link href="/about">
    <fun-tab>About</fun-tab>
</fun-link>
```

All elements contained in the `<fun-router>` tags can specify the path that they are to dispaly on by adding the attribute `path` to the element.

For path/url variables/arguments simple denote the by prceding the word with a `:`. 

Url arguments will be applied to their element as an attribute. 

Example:
```HTML
<fun-router>
    <div path="/name/:foo/:bar"></div>
</fun-router>
```
```
http://example.com/name/john/doe
```

will display the div when visiting that url and apply two attriburtes to the element
```HTML
<div path="/name/:foo/:bar" foo="john" bar="doe"></div>
```
