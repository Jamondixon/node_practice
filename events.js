const events = require("events")

const emitter = new events.EventEmitter()

emitter.on("cusomEvent", (message, user) => {
    console.log(`${user}: ${message}`)
})

// emitter.emit("customEvent","Hello World", "Computer")
// emitter.emit("customEvent", "Thats pretty cool huh?", "Alex")

process.stdin.on("data", data => {
    const input = data.toString().trim()
    if (input === "exit") {
        emitter.emit("customEvent", "goodbye!", "process")
        process.exit()
    }
    emitter.emit("customEvent", input, "terminal")
})