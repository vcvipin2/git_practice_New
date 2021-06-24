const random = ['Why did the chicken cross the road?','Do you know what time it is?','I love rain, when I am inside'];
var randomMessage = (arr) => {
    let index = Math.floor(Math.random() * 3);
    console.log(`Your random message generated is ${arr[index]}`);
}

randomMessage(random);
