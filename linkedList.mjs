export function linkedList() {
  let first = null;

  let length = 0;

  const head = () => {
    return first;
  };

  const tail = function () {
    if (first) {
      let subject = first;
      while (subject.next !== null) {
        subject = subject.next;
      }

      return subject;
    } else {
      return null;
    }
  };

  const append = function (key, value) {
    const newLast = node(key, value, null);
    if (!first) {
      first = newLast;
    } else {
      tail().next = newLast;
    }

    length += 1;
  };

  const prepend = function (key, value) {
    const newFirst = node(key, value, null);

    if (first) {
      newFirst.next = first;
    }

    first = newFirst;
    length += 1;
  };

  const size = () => {
    return length;
  };

  const at = function (index) {
    if (first && index > 0) {
      let index2 = 1;
      let subject = first;

      while (index !== index2) {
        index2++;
        subject = subject.next;
      }

      return subject;
    } else {
      return null;
    }
  };

  const pop = function () {
    let penult = null;

    if (length === 1) {
      first = penult;
    } else {
      penult = list.at(length - 1);
      penult.next = null;
    }

    length -= 1;
  };

  const contains = function (value) {
    if (first) {
      let subject = first;

      while (value !== subject.value) {
        if (subject.next === null) {
          return false;
        } else {
          subject = subject.next;
        }
      }

      return true;
    } else {
      return "This linked list is empty.";
    }
  };

  const find = function (value) {
    if (first) {
      let index = 1;
      let subject = first;

      while (subject.value !== value) {
        if (subject.next === null) {
          return null;
        } else {
          index++;
          subject = subject.next;
        }
      }

      return index;
    } else {
      return null;
    }
  };

  const toString = function () {
    if (first) {
      let subject = first;
      let listString = `(${subject.value})`;

      while (subject.next !== null) {
        listString = listString + " -> " + `(${subject.next.value})`;
        subject = subject.next;
      }

      return (listString += " -> null");
    } else {
      return null;
    }
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
  };
}

export function node(key, value, nextVal) {
  const nodeKey = key;
  const nodeVal = value;
  const obj = {};

  obj[nodeKey] = nodeVal;
  obj.next = nextVal;

  return obj;
}

const list = linkedList();

/* Example:

list.prepend(value);
console.log(list.head());

*/
