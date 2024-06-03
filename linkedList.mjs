function linkedList () {
    let last = node ("3", null);
    let middle = node ("2", last);
    let first = node ("1", middle);
    
    let length = 3;

    const head = () => {return first};

    const tail = () => {return last};

    const append = function(value) {
        const newLast = node (value, null);

        last.next = newLast;
        last = newLast;
        length += 1;
    }

    const prepend = function(value) {
        const nextNode = node (first.value, first.next);
        const newFirst = node (value, nextNode);

        first = newFirst;
        length += 1;
    }

    const size = () => {return length};

    const at = function(index, current = 1, subject = first) {
        if (current === index) {
            return subject;
        } else {
            return at(index, current + 1, subject.next);
        }
    }

    const pop = function() {
        if (length > 1) {
            let penult = list.at(length - 1);

            last = penult;
            penult.next = null;
            length -= 1;
        }
    }

    const contains = function(value, current = 1, subject = first) {
        if (value === subject.value) {
            return true;
        } else if (length === current) {
            return false;
        } else {
            return contains(value, current + 1, subject.next);
        }
    }
    
    const find = function(value, current = 1, subject = first) {
        if (value === subject.value) {
            return current;
        } else if (length === current) {
            return null;
        } else {
            return find(value, current + 1, subject.next);
        }
    }

    const toString = function(current = 1, subject = first, listString = `(${subject.value})`) {
        if (length === current) {
            listString = listString + " -> null";
            return listString;   
        } else {
            listString = listString + " -> " + `(${subject.next.value})`;
            
            return toString(current + 1, subject.next, listString);
        }

    }

    return { append, prepend, size, head, tail, at, pop, contains, find, toString };
}

function node (data, data2) {
    const value = data;
    const next = data2;

    return { value, next };
}

const list = linkedList();

/* Example:

list.prepend(value);
console.log(list.head());

*/




