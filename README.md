# babel-plugin-precompile-charcodes [![Build Status](https://travis-ci.org/ben-eb/babel-plugin-precompile-charcodes.svg?branch=master)][ci] [![NPM version](https://badge.fury.io/js/babel-plugin-precompile-charcodes.svg)][npm] [![Dependency Status](https://gemnasium.com/ben-eb/babel-plugin-precompile-charcodes.svg)][deps]

> Convert character code getters into plain integers.


## Install

With [npm](https://npmjs.org/package/babel-plugin-precompile-charcodes) do:

```
npm install babel-plugin-precompile-charcodes --save-dev
```


## Example

Convert `str.charCodeAt(0)` to a plain integer, useful for parsers/tokenizers.

### Input

```js
const at = '@'.charCodeAt(0);
```

### Output

```js
const at = 64;
```


## Usage

In your Babel configuration:

```json
{
  "plugins": ["precompile-charcodes"]
}
```


## Contributing

Pull requests are welcome. If you add functionality, then please add unit tests
to cover it.


## License

MIT © [Ben Briggs](http://beneb.info)


[ci]:      https://travis-ci.org/ben-eb/babel-plugin-precompile-charcodes
[deps]:    https://gemnasium.com/ben-eb/babel-plugin-precompile-charcodes
[npm]:     http://badge.fury.io/js/babel-plugin-precompile-charcodes
