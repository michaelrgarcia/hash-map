import { linkedList } from "./linkedList.mjs";

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
  const load_factor = 0.75; // if growth was implemented, i'd use this
  let capacity = buckets.length;

  const set = function (key, value) {
    let hashCode = hash(key);

    if (hashCode < 0 || hashCode >= capacity) {
      throw new Error("Trying to access index out of bound");
    } else {
      let list = linkedList();
      list.append(key, value);
      buckets[hashCode] = list.head();
    }

    return buckets;
  };

  const get = function (key) {
    let index = hash(key);

    if (buckets[index]) {
      return buckets[index];
    } else {
      return null;
    }
  };

  const has = function (key) {
    let keyExists = false;

    buckets.forEach((bucket) => {
      if (bucket && bucket.hasOwnProperty([key])) {
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
      if (bucket) {
        amountOfKeys += 1;
      }
    });

    return amountOfKeys;
  };

  return { set, get, has, remove, length };
}

let HashMap = hashMap();

console.log(HashMap.set("machine gun", "jimi"));
// console.log(HashMap.get("one of these days"));
console.log(HashMap.has("machine gun"));
console.log(HashMap.remove("machine gun"));
console.log(HashMap.has("machine gun"));
console.log(HashMap.get("machine gun"));

console.log(HashMap.set("hello", "gg"));
console.log(HashMap.set("joni mitchell", "fdsf"));
console.log(HashMap.set("mark kozelek", "gfg"));

console.log(HashMap.length());

/*

// archival purposes

HashMap.set("Carlos", "a lot happening rn");
HashMap.set("Carlos", "hiii");
HashMap.set("ann", "f");

*/
