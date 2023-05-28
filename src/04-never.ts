const withoutEnd = () => {
  while (true){
    console.log('nunca deberías parar de aprender');
  }
}

const fail = (message: string) => {
  throw new Error(message);
}

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'Es un string';
  } else if (Array.isArray(input) ) {
    return 'Es un array';
  }
  return fail('not match');
}

console.log(example('hola'));
console.log(example([1,1,1,1,1]));
console.log(example(12212)); // detiene
console.log(example('Hola después del fail'));
