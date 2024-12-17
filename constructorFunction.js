

function Counter(){
    var count = 0;

    this.increment = function(){
        count++;
        console.log(count);
    }

    this.decrement = function(){
        count--;
        console.log(count);
    }

    this.reset = function(){
        count = 0;
        console.log(count);
    }
}

let counter1 = new Counter();
counter1.increment();
counter1.decrement();
counter1.increment();
counter1.increment();
counter1.reset();