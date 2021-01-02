const { connect } = require("net");

const socket = connect(443,"127.0.0.1",()=>{});
socket.on("connect",()=>{
    socket.write(
        "server_hello"
    );
})

socket.on("data",(data)=>{
    console.log(data.toString());
});