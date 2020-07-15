const myParseInt = (src: string): number => {
  let res: string = '';
  let index = 0;
  while (!isNaN(src[index] as any)) {
    res += src[index++];
  }
  if (!res.length) {
    return NaN;
  }
  return +res;
};

export const firstTask = () => {
  console.log('=====================');
  console.log('First task');
  console.log('123 ===', myParseInt('123'));
  console.log('123 + 5 ===', myParseInt('123') + 5);
  console.log('1.34 ===', myParseInt('1.34'));
  console.log('1f23 ===', myParseInt('1f23'));
  console.log('f23 ===', myParseInt('f23'));
  console.log('"" ===', myParseInt(''));
};
