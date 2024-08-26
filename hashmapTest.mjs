import hashMap from "./hashmap.mjs";

const HashMap = hashMap();

HashMap.set("apple", "red");
HashMap.set("banana", "yellow");
HashMap.set("carrot", "orange");
HashMap.set("dog", "brown");
HashMap.set("elephant", "gray");
HashMap.set("frog", "green");
HashMap.set("grape", "purple");
HashMap.set("hat", "black");
HashMap.set("ice cream", "white");
HashMap.set("jacket", "blue");
HashMap.set("kite", "pink");
HashMap.set("lion", "golden");
HashMap.set("apple", "oranges are better");
HashMap.set("moon", "silver");

console.log(HashMap.set("grape", "green grapes are better"));

/*

console.log(HashMap.set("dog", "zep"));
HashMap.remove("dog");
console.log(HashMap.set("hat", "cap"));

*/

console.log(HashMap.keys());
