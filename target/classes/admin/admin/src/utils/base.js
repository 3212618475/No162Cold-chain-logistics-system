const base = {
    get() {
        return {
            url : "http://localhost:8080/lenglianwuliuxitong/",
            name: "lenglianwuliuxitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/lenglianwuliuxitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "冷链物流系统"
        } 
    }
}
export default base
