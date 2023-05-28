// Yarbet => [Y,A,B,E,T] => string => string[]
//[Y,A,B,E,T] => Yarbet=> string => string[]

export function parseStr(input: string) : string[];
export function parseStr(input: string[]) : string;
export function parseStr(input: number) : boolean;



//export function parseStr(input: string | string[]): string | string[] {
//  if (Array.isArray(input)) {
//    return input.join(''); // string
//  } else {
//    return input.split(''); //string[]
//  }
//}

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else if (typeof input == 'string'){
    return input.split(''); //string[]
  } else if (typeof input == 'number'){
    return true; //boolean
  }
}

const rtaArray = parseStr('Yarbet');
rtaArray.reverse();
//if(Array.isArray(rtaArray)){
//  rtaArray.reverse();
//}
console.log('rtaArray', 'Yarbet =>', rtaArray );

const rtaStr = parseStr(['Y', 'A', 'R', 'B', 'E', 'T'])

rtaStr.toLocaleLowerCase();
//if(typeof rtaStr === 'string'){
//  rtaStr.toLocaleLowerCase();
//}
console.log ('rtaStr', "['Y', 'A', 'R', 'B', 'E', 'T'] => " ,rtaStr);

const rtaBoolean = parseStr(12);



