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


## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars.githubusercontent.com/u/1282980?v=3" width="100px;"/><br /><sub>Ben Briggs</sub>](http://beneb.info)<br />[💻](https://github.com/ben-eb/babel-plugin-precompile-charcodes/commits?author=ben-eb) [📖](https://github.com/ben-eb/babel-plugin-precompile-charcodes/commits?author=ben-eb) 👀 [⚠️](https://github.com/ben-eb/babel-plugin-precompile-charcodes/commits?author=ben-eb) |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors] specification. Contributions of
any kind welcome!


## License

MIT © [Ben Briggs](http://beneb.info)


[all-contributors]: https://github.com/kentcdodds/all-contributors
[ci]:      https://travis-ci.org/ben-eb/babel-plugin-precompile-charcodes
[deps]:    https://gemnasium.com/ben-eb/babel-plugin-precompile-charcodes
[npm]:     http://badge.fury.io/js/babel-plugin-precompile-charcodes
