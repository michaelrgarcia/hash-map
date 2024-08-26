import { getTail, linkedList } from "./linkedList.mjs";

export default function hashMap() {
  let buckets = new Array(16);
  const loadFactor = 0.75;

  const maxBeforeGrowing = Math.round(buckets.length * loadFactor);

  const hash = function (key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode %= buckets.length;
    }

    return hashCode;
  };

  const length = function () {
    let amountOfKeys = 0;

    buckets.forEach((bucket) => {
      if (bucket && bucket.key) {
        let subject = bucket;

        amountOfKeys += 1;

        while (subject.next !== null) {
          if (subject.key) {
            amountOfKeys += 1;
          }

          subject = subject.next;
        }
      }
    });

    return amountOfKeys;
  };

  const set = function (key, value) {
    const hashCode = hash(key);
    const capacity = length();

    if (hashCode < 0 || hashCode >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    }

    // need to fix "entries" before implementing this

    if (capacity > maxBeforeGrowing) {
      const oldSize = buckets.length;

      buckets = new Array(oldSize * 2);

      buckets.forEach((bucket) => {
        if (bucket.key && bucket.value) {
          set(bucket.key, bucket.value);
        }
      });
    }

    if (buckets[hashCode]) {
      const head = buckets[hashCode];
      const tail = getTail(head);

      tail.next = linkedList(key, value);
    } else {
      buckets[hashCode] = linkedList(key, value);
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
        let subject = bucket;

        bucketValues.push(value);

        while (subject.next !== null) {
          subject = subject.next;
          bucketValues.push(subject.value);
        }
      }
    });

    return bucketValues;
  };

  const entries = function () {
    const pairs = [];

    buckets.forEach((bucket) => {
      if (bucket && bucket.key && bucket.value) {
        let subject = bucket;
        const { key, value } = subject;

        pairs.push([key, value]);

        while (subject.next !== null) {
          subject = subject.next;
          pairs.push([subject.key, subject.value]);
        }
      }
    });

    return pairs;
  };

  return { set, get, has, remove, length, clear, keys, values, entries };
}
