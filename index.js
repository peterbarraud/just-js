const { List } = require('immutable');

var arr1 = [];

for(var i=0; i<40000; i++){
    arr1.push(i);
}

var list1 = List(arr1);


console.log(list1.count());
