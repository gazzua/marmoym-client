function Record(defaultValues) {
  if (this instanceof Record) {
    throw new Error();
  }
  
  return class Clazz {
    constructor(data) {
      const props = {};
      for (let key in defaultValues) {
        props[key] = {
          writable: false,
          enumerable: true,
          value: data[key] ? data[key] : defaultValues[key],
        }
      }
      Object.defineProperties(this, props);
    }

    /**
     * Some component, e.g. d3 tries to mutate the object thus writable 
     * `false` not applicable. Returns iterable key values as writable.
     */
    clone() {
      let obj = {};
      for (let key in this) {
        obj[key] = this[key];
      }
      return obj;
    }
  }
}

export default Record;
