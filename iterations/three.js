// for of
const arr = [1,2,3,4,5]
 for (const number of arr) {
    console.log(number);
 }

 // maps
 const map = new Map([
    ['a', 1],
    ['b', 2],

    ['c', 3],
    ['d', 4]
 ])

 const map2 = new Map()
 map2.set('IN','india')
 map2.set('usa','united states of america')
 map2.set('fr','france')
 map2.set('IN','india')

 console.log(map);
 console.log(map2);

 for (const [key, value] of map) {
    console.log(key, ':-', value);
}


const myObject = {
   game1: 'NFS',
   game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
   
// }