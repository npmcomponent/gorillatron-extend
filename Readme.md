
# extend

  Merge properties from two objects into one new object.

## Installation

    $ component install gorillatron/extend

## API

### extend( deep, objects... )

Like jquery extend, but doesnt mutate passed objects, only returns a fresh object with the extended properties.

```js

var defaults = {
  hide: false,
  delay: 1500,
  css: {
    color: 'blue'
  }
}

var settings = extend(true, defaults,{
  delay: 1700,
  css: {
    border: '1px solid red'
  }
})

expect(settings).to.eql({
  hide: false,
  delay: 1700,
  css: {
    color: 'blue',
    border: '1px solid red'
  }
})

```

## License

  MIT
