

function extend( deep ) {
  var out, objs, i, obj, prop, val

  out = {}

  typeof deep === "boolean" ? ( objs = [].slice.call(arguments, 1), deep = deep ) :
                              ( objs = [].slice.call(arguments, 0), deep = false )

  for( i = 0; i < objs.length; i++ ) {

    obj = objs[ i ]

    for( prop in obj ) {
      val = obj[ prop ]
      if( deep && typeof val === "object" && typeof out[prop] === "object") {
        out[ prop ] = extend( out[prop], val )
      } else {
        out[ prop ] = val
      }
      
    }
  }

  return out
}

module.exports = extend