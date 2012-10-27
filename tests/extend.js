
var expect = require( "expect.js" ),
    extend = require( "../index.js" )

describe("extend", function() {

  it("should return object extended with properties from the passed objects", function() {

    var obj = { lol: 'lol' }

    expect( extend(obj, {foo: 'bar'}) )
      .to.eql({ 
        foo: 'bar', 
        lol: 'lol' 
      })

    expect( extend(obj, {lorem: 'ipsum'}, {a: 'a'}) )
      .to.eql({
        lol: 'lol', 
        lorem: 'ipsum', 
        a: 'a'
      })

  })

  it("should return an object with all properties from the merged objects", function() {

    var obja = {
      s: "s",
      n: 1,
      o: {
        oo: {},
        not: true
      }
    }

    var objb = {
      n: 2,
      o: {
        foo: 'bar'
      }
    }

    expect( extend(obja, objb) )
      .to.eql({
        s: 's',
        n: 2,
        o: {
          foo: 'bar'
        }
      })

  })

  it("should deep extend where key is object if first parameter is true", function() {

    var obj = {
      foo: 'lol',
      o: {
        a: 'a',
        b: 'b'
      }
    }

    expect( extend(true, obj, {o: {a: 1}}) )
      .to.eql({
        foo: 'lol',
        o: {
          a: 1,
          b: 'b'
        }
      })

    obj = {
      a: {
        b: {
          c: 'c'
        }
      }
    }

    expect( extend(true, obj, {a:{b:{c: 'f'}}}) )
      .to.eql({
        a: {
          b: {
            c: 'f'
          }
        }
      })

  })

  it("should not modify/mutate passed objects", function() {

    var obja = {a: 'lol'},
        objb = {a: 'foo', b: 'b'}


    extend( obja, objb )

    expect( obja ).to.eql( {a: 'lol'} )
    expect( objb ).to.eql( {a: 'foo', b: 'b'} )

  })

})