export function linkedList () {
    let first = null;
    let last =  null;
    
    let length = 0;

    const head = () => {return first};

    const tail = function() {
        if (!last) {
            return first;
        } else {
            return last;
        }
    };

    const append = function(value) {
        const newLast = node (value, null);

        if (!first) {
            first = newLast;
        } else {
            last.next = newLast;
            last = newLast;
        }

        length += 1;
        
    }

    const prepend = function(value) { 
        const newFirst = node (value, null);

        if (first) {
            newFirst.next = first; 
        } 

        first = newFirst;
        length += 1;
    }



    const size = () => {return length};

    const at = function() {
        if (first) {
            return function(index, current = 1, subject = first) {
                if (current === index) {
                    return subject;
                } else {
                    return at(index, current + 1, subject.next);
                }
            }
        } else {
            return "This linked list is empty."
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
    
    const find = function(value) {
        if (first) {
            let index = 1;
            let subject = first;

            while (subject !== null && subject.value !== value) {
                if (index === length) {
                    return null;
                } else {
                    index++;
                    subject = subject.next;
                }
            }

            let indexCopy = index;
            index = 1;
            subject = first;

            return indexCopy;
        } else {
            return "This linked list is empty.";
        }
    }

    const toString = function() {
        if (first) {
            let index = 1;
            let subject = first;
            let listString = `(${subject.value})`;
    
            while (index !== length) {
                listString = listString + " -> " + `(${subject.next.value})`;
                index++;
                subject = subject.next;
            }

            index = 1;
            subject = first;
            return listString += " -> null";
        } else {
            return "This linked list is empty.";
        }
    }

    return { append, prepend, size, head, tail, at, pop, contains, find, toString };
}

export function node (data, data2) {
    const value = data;
    const next = data2;

    return { value, next };
}

const list = linkedList();

/* Example:

list.prepend(value);
console.log(list.head());

*/




