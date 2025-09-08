const EventEmitter = require("events");
const eventEmitter = new EventEmitter()

eventEmitter.on('greet', (username) => {
    console.log(`Hello ${username} Welcome to events in NodeJs `);
})

eventEmitter.once("notify", () => {
    console.log("Your'e being notified that this is a event concept");
})
//Emit the event
eventEmitter.emit('greet', "Manjunath");
eventEmitter.emit('greet', "Manju");
eventEmitter.emit("notify")
eventEmitter.emit('greet', "kiran");
eventEmitter.emit("notify")

eventEmitter.on("greet", (username) => {
    console.log(`Hey ${username} you and others are welcome to this group`)
});

eventEmitter.emit('greet', 'mahesh');