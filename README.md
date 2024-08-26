# hash-map

An implementation of the hash map data structure in JavaScript. Features a modified linked list data structure.

### List of functions

1. ```set(key, value)``` takes two arguments, the first is a key and the second is a value that is assigned to this key

2. ```get(key)``` takes one argument as a key and returns the value that is assigned to this key. If a key is not found, it will return ```null```.

3. ```has(key)``` takes a key as an argument and returns ```true``` or ```false``` based on whether or not the key is in the hash map.

4. ```remove(key)``` takes a key as an argument. If the given key is in the hash map, it will remove the entry with that key and return ```true```. If the key isn’t in the hash map, it will return ```false```.

5. ```length()``` returns the number of stored keys in the hash map.

6. ```clear()``` removes all entries in the hash map.

7. ```keys()``` returns an array containing all the keys inside the hash map.

8. ```values()``` returns an array containing all the values.

9. ```entries()``` returns an array that contains each key, value pair. Example: ```[[firstKey, firstValue], [secondKey, secondValue]]```

