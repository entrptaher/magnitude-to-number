function magnitudeToNumber(str){
  const Magnitude = {
    'M': 1e6,
    'B': 1e9,
    'T': 1e12
  }

  function findOne(haystack, arr) {
    return arr.find(function (v) {
        return haystack.indexOf(v) >= 0;
    });
  };

  function textToInt(str){
    str = str.replace(/[^0-9]/g, '');
    return parseInt(str, 10);
  }

  try{
    const key = findOne(str.toUpperCase().split(''), Object.keys(Magnitude))
    if(key){
      return parseInt(parseFloat(str) * Magnitude[key])
    }
    return textToInt(str);
  }catch(e){
    return textToInt(str);
  }
}

module.exports = magnitudeToNumber;