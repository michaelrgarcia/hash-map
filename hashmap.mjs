function hash(key) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = primeNumber * hashCode + key.charCodeAt(i);
    hashCode %= 16;
  }

  return hashCode;
}

function hashMap() {
  const buckets = new Array(16);
  const loadFactor = 0.75;
  let capacity = buckets.length;

  const set = function (key, value) {
    const hashCode = hash(key);

    if (hashCode < 0 || hashCode >= capacity) {
      throw new Error("Trying to access index out of bound");
    } else {
      buckets.splice(hashCode, 0, { key, value });
    }

    return buckets;
  };

  const get = function (key) {
    let index = hash(key);

    if (buckets[index]) {
      return buckets[index];
    }

    return null;
  };

  const has = function (key) {
    const keyToFind = key;
    let keyExists = false;

    buckets.forEach((bucket) => {
      if (bucket.key === keyToFind) {
        keyExists = true;
      }
    });

    return keyExists;
  };

  const remove = function (key) {
    if (has(key)) {
      const matchingBucket = get(key);
      const bucketIndex = buckets.indexOf(matchingBucket);

      buckets.splice(bucketIndex, 1);

      return true;
    }

    return false;
  };

  const length = function () {
    let amountOfKeys = 0;

    buckets.forEach((bucket) => {
      if (bucket.key) {
        amountOfKeys += 1;
      }
    });

    return amountOfKeys;
  };

  const clear = function () {
    buckets.forEach((bucket) => {
      if (bucket) {
        const bucketIndex = buckets.indexOf(bucket);

        buckets.splice(bucketIndex, 1);
      }
    });
  };

  const keys = function () {
    const keys = [];

    buckets.forEach((bucket) => {
      if (bucket.key) {
        const { key } = bucket;
        keys.push(key);
      }
    });

    return keys;
  };

  const values = function () {
    const bucketValues = [];

    buckets.forEach((bucket) => {
      if (bucket.value) {
        const { value } = bucket;
        bucketValues.push(value);
      }
    });

    return bucketValues;
  };

  const entries = function () {
    const pairs = [];

    buckets.forEach((bucket) => {
      if (bucket) {
        const entries = Object.values(bucket); // hash keys and values are stored under a separate key

        pairs.push(entries);
      }
    });

    return pairs;
  };

  return { set, get, has, remove, length, clear, keys, values, entries };
}

let HashMap = hashMap();

/*

// archival purposes

HashMap.set("Carlos", "a lot happening rn");
HashMap.set("Carlos", "hiii");
HashMap.set("ann", "f");

*/
