//自己定义跨文件的数据共享模块
module.exports = {
    /**
     * @type {import("net").Server|null}
     */
    Server:null,
    /**
     * 
     * @param {import("net").Server} server 
     */
    setServer:function(server){
        this.Server = server;
    }
};