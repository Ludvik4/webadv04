console.log('before promice');

var p = new Promise(function(resolve, reject){
    console.log("inside");
    setTimeout(function(){
        resolve();
        console.log("timer")
    }, 3000);
});

p.then(function(){
   console.log('left 3 sec');
    console.log('left 4 sec');
});
console.log('after');