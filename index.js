function magnitudeToNumber(str) {
  const Magnitude = { 'K': 1e3, 'M': 1e6, 'B': 1e9, 'T': 1e12 };
  if (str.search(/[a-z]/ig) !== -1) {
    string = str.replace(/[^a-z]/ig, '').toString().toUpperCase()
    return parseInt(parseFloat(str) * Magnitude[string]);
  } else
    return parseInt(parseFloat(str))
}

module.exports = magnitudeToNumber;