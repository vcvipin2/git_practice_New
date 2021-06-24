const randomMessage = (message) => {
    const messsage = ['Why did the chicken cross the road?','The sky is blue today','I love rain, when I am inside.'];
    let randomIndex = Math.floor(Math.random() * message.length);
    console.log(message[randomIndex]);
}

randomMessage();