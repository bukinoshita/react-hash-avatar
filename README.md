
# react-hash-avatar [![Build Status](https://travis-ci.org/bukinoshita/react-hash-avatar.svg?branch=master)](https://travis-ci.org/bukinoshita/react-hash-avatar)

> React hash avatar algorithm

## Install
```
$ npm install --save react-hash-avatar
```

## Usage
```js
import reactHashAvatar from 'react-hash-avatar'
import renderHTML from 'react-render-html'

export default () => (
  <div>
    {renderHTML(reactHashAvatar('uid', { size: 100 }))}
  </div>
)
```

## API
### reactHashAvatar(uid, { size })

#### uid
Type: `string`<br/>
Required

#### size
Type: `number`<br/>
Required

## Demo

![](https://media.giphy.com/media/3og0IAXrjGYpBG4SJy/giphy.gif)

## Related

- [hash-avatar](https://github.com/bukinoshita/hash-avatar) — :rainbow: Hash avatar algorithm

## License
[MIT](https://github.com/bukinoshita/react-hash-avatar/blob/master/LICENSE) &copy; Bu Kinoshita

Thanks to [rauchg](https://twitter.com/rauchg)
