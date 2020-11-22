const ftoc = function(f) {
  let celsius = (f - 32) / 1.8
  if (celsius > 0) {
    return parseFloat(celsius.toFixed(1))
  } else {
    return parseFloat(celsius.toFixed(1))
  }
}

const ctof = function(c) {
  let farenheit = c * 1.8 + 32
  if (farenheit > 0) {
    return parseFloat(farenheit.toFixed(1))
  } else {
    return farenheit
  }
}

module.exports = {
  ftoc,
  ctof
}

//f to c = (f − 32) ÷ 1, 8
//c to f = c * 1.8 + 32
