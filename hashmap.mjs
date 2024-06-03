import { linkedList } from "./linkedList.mjs";

function HashMap() {
    let buckets = [];
    let capacity = buckets.length;
    let load_factor = 0.75;

    if (index < 0 || index >= capacity) {
        throw new Error("Trying to access index out of bound");
    }

    const hash = function(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode %= 16;
        }

        return hashCode;
    }

    const set = function(key, value) {

    }


    return { hash }
}

const list = linkedList();

