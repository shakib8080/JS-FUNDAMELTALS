var number = 1;
var numbers = [1,3,4,5,6,7];
var friendsAge = [ '23', '25','11' ,'22','33'];
friendsAge.push('011');
friendsAge.pop();
console.log(friendsAge);
friendsAge.unshift('1100');
console.log(friendsAge);
friendsAge.shift();
console.log(friendsAge);
var friendname = ['ashik ','shakib','rsakib','yeakub',];
console.log(friendsAge.indexOf('22'));
console.log(typeof number);
friendname = friendname [3];
console.log(friendname);
friendsAge[3] = '34';
friendname.push('naim');

console.log(friendname.length);
var number= 1.3;
var number2 = 1.1 ;
var allnumber = number + number2 ;


console.log(allnumber .toFixed(0));
console.log(parseFloat (allnumber));
console.log(allnumber.tofixed(1));

console.log(parseInt(allnumber) );
 if(friendsAge.length == 5){
    
     console.log('amio jamu ');
    }
else if (friendname[3] == 'yeakub'){
    console.log('ami khabo');
}

else {
    console.log('jabona ');
}

var eggprice =10 ;
var mangoprice = 20;
var baduge = 30 ;

if (eggprice  == baduge ){
    console.log('ami kinbona ');
}

else if (mangoprice <= baduge ){
    console.log('ami marb');
}
