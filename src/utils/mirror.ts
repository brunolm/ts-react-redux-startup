export default function mirror<T>(prefix = '', obj: T): T {
  return Object.keys(obj).reduce((a, prop) => {
    if (typeof obj[prop] === 'object') {
      a[prop] = mirror(prefix, obj[prop]);
    }
    else if (typeof obj[prop] === 'undefined') {
      a[prop] = `${prefix}${prop}`;
    }
    else {
      a[prop] = obj[prop];
    }
    return a;
  }, { } as T);
}
