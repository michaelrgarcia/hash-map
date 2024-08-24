export function linkedList(key, value) {
  const next = null;

  return { key, value, next };
}

export function getTail(list) {
  let subject = list;

  while (subject.next !== null) {
    subject = subject.next;
  }

  return subject;
}

function getSize(list) {
  let subject = list;
  let length = 0;

  while (subject.next !== null) {
    if (subject.key) {
      length += 1;
    }

    subject = subject.next;
  }

  return length;
}

function at(list, index) {
  if (list && index > 0) {
    let index2 = 1;
    let subject = list;

    while (index2 !== index) {
      subject = subject.next;
      index2++;
    }

    return subject;
  }

  return null;
}

function pop(list) {
  let penult = null;
  let length = getSize(list);

  if (length === 1) {
    list = null;
  } else {
    penult = at(list, length - 1);
    penult.next = null;
  }
}

function contains(list, value) {
  if (list) {
    let subject = list;

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
}

function find(list, value) {
  if (list) {
    let index = 1;
    let subject = list;

    while (subject.value !== value) {
      if (subject.next === null) {
        return null;
      } else {
        index++;
        subject = subject.next;
      }
    }

    return index;
  }

  return null;
}

function toString(list) {
  let str = null;

  if (list) {
    let subject = list;
    let listString = `(${subject.value})`;

    while (subject.next !== null) {
      listString = listString + " -> " + `(${subject.next.value})`;
      subject = subject.next;
    }

    str = listString += " -> null";
  }

  return str;
}
