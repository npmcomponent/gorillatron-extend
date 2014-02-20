*This repository is a mirror of the [component](http://component.io) module [gorillatron/extend](http://github.com/gorillatron/extend). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/gorillatron-extend`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

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
