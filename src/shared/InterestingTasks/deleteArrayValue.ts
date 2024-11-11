export const deleteArrayValue = <T>(arr: Array<T>, value: T): Array<T> => {
  const elemIndex = arr.indexOf(value);
  if (elemIndex >= 0) {
    arr.splice(elemIndex, 1);
  }
  return arr;
};

export const deleteArrayValuesCount = <T>(
  arr: Array<T>,
  value: T,
  count: number
): Array<T> => {
  for (let i = 0; i < arr.length && count > 0; ++i) {
    if (arr[i] === value) {
      arr.splice(i, 1);
      --count;
    }
  }
  return arr;
};

export function removeItem<T>(arr: Array<T>, value: T): Array<T> {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}
