

const isConstructorObj = {};

export default function useConstructor(callback, key) {
  if (!isConstructorObj[key]) {
    isConstructorObj[key] = true;
    callback();
  }
}
