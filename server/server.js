const {} = require("crypto");
const {Server} = require("net");
const {setServer} = require("./global.js");
const {Port} = require("./config.js");
const chalk = require("chalk");//命令行彩色显示
const main = ()=>{
    const server = new Server((socket)=>{
        //socket断开的事件
        socket.on("close",(had_error)=>{
            if(had_error){
                console.log(chalk`{red [Error]:} ${socket.remoteAddress} connection closed!`);
            }
        });
        //socket出错
        socket.on("error",(err)=>{
            console.log(chalk`{red [Error]:} socket ${socket.remoteAddress} error!`);
        });
        //socket传来了数据
        socket.on("data",(data)=>{
            console.log(data.toString());
            socket.write("client_hello");
        });
        //socket已经连接
        socket.on("connect",()=>{
            console.log(chalk`{green [info]:} connected to ${socket.remoteAddress}`);
        });
    });
    setServer(server);
    server.listen(Port,()=>{
        console.log(chalk`{yellow [Info]:} Server run at ${Port}`);
    });
};

//导出Main函数
module.exports = main;