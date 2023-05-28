// Yarbet => [Y,A,B,E,T] => string => string[]
//[Y,A,B,E,T] => Yarbet=> string => string[]


function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); //string[]
  }
}

const rtaArray = parseStr('Yarbet');
//rtaArray.reverse();
if(Array.isArray(rtaArray)){
  rtaArray.reverse();
}
console.log('rtaArray', 'Nico =>', rtaArray );

const rtaStr = parseStr(['Y', 'A', 'R', 'B', 'E', 'T'])
rtaStr

//rtaStr.toLocaleLowerCase();
if(typeof rtaStr === 'string'){
  rtaStr.toLocaleLowerCase();
}
console.log ('rtaStr', "['Y', 'A', 'R', 'B', 'E', 'T'] => " ,rtaStr);


