import { getKeyIndex, getTail, linkedList, removeAt } from "./linkedList.mjs";

export default function hashMap() {
  let buckets = new Array(16);
  const loadFactor = 0.75;

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

  const has = function (key) {
    const keyToFind = key;
    let keyExists = false;

    buckets.forEach((bucket) => {
      let subject = bucket;

      if (subject.key === keyToFind) {
        keyExists = true;
      }

      while (subject.next !== null) {
        subject = subject.next;

        if (subject.key === keyToFind) {
          keyExists = true;
        }
      }
    });

    return keyExists;
  };

  const set = function (key, value) {
    const hashCode = hash(key);

    const capacity = length();
    const maxBeforeGrowing = Math.round(buckets.length * loadFactor);

    const existingBucket = buckets[hashCode];

    if (hashCode < 0 || hashCode >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    }

    if (capacity > maxBeforeGrowing) {
      const oldSize = buckets.length;
      const arrayOfNodeArrays = entries();

      buckets = new Array(oldSize * 2);

      arrayOfNodeArrays.forEach((nodeArray) => {
        if (nodeArray[0] && nodeArray[1]) {
          const key = nodeArray[0];
          const value = nodeArray[1];

          set(key, value);
        }
      });
    }

    if (has(key)) {
      const headWithDupeKey = buckets.find(
        (bucket) => bucket && bucket.key === key
      );

      if (headWithDupeKey) {
        headWithDupeKey.value = value;
      } else {
        const keyIndex = getKeyIndex(existingBucket, key);
        const node = at(existingBucket, keyIndex);

        node.value = value;
      }
    } else if (existingBucket) {
      const head = existingBucket;
      const tail = getTail(head);

      tail.next = linkedList(key, value);
    } else {
      buckets[hashCode] = linkedList(key, value);
    }

    return buckets;
  };

  const get = function (key) {
    let index = hash(key);
    let value;

    if (buckets[index].key === key) {
      value = buckets[index].value;
    } else {
      // key with same hash is present at index, but is buried somewhere in the linked list

      let subject = buckets[index];

      while (subject.key !== key) {
        subject = subject.next;
      }

      value = subject.value;
    }

    return value;
  };

  const remove = function (key) {
    const hashCode = hash(key);
    let removed = false;

    if (has(key)) {
      const keyIndex = getKeyIndex(buckets[hashCode], key);

      if (keyIndex === 1) {
        buckets[hashCode] = buckets[hashCode].next;
      } else {
        removeAt(buckets[hashCode], keyIndex);
      }

      removed = true;
    }

    return removed;
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
    const bucketKeys = [];

    buckets.forEach((bucket) => {
      if (bucket.key) {
        const { key } = bucket;
        let subject = bucket;

        bucketKeys.push(key);

        while (subject.next !== null) {
          subject = subject.next;
          bucketKeys.push(subject.key);
        }
      }
    });

    return bucketKeys;
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

  return { set, get, has, remove, length, clear, keys, values, entries };
}
