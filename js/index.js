require.config({
    baseUrl: './js/',
    paths:{    //相对这个js文件的路径
        mmState: 'tool/mmState',
        mmPromise: 'tool/mmPromise',
        mmRouter: 'tool/mmRouter',
        mmHistory : 'tool/mmHistory'
    },
    shim:{
    }
});

require(["mmState"], function() {
    avalon.config({debug:false});
    var vm = avalon.define({
        $id : 'root',
        userInfo:{name:"小明"}
    });
    avalon.state("home", {
        controller: "root",
        url: "/",
        views: {
            "": { 
                templateUrl: 'home.html'
            }
        }
    }).state("wallet", {
        controller: "root",
        url: "/wallet",
        views: {
            "": {
                templateUrl: 'wallet.html',
                controllerUrl: ["wallet.js"]
            }
        }
    }).state("wallet.recharge", {
        controller: "root",
        url: "/recharge",
        views: {
            "": {
                templateUrl: 'recharge.html',
                controllerUrl: ["recharge.js"]
            }
        }
    }).state("wallet.withdraw", {
        controller: "root",
        url: "/withdraw",
        views: {
            "": {
                templateUrl: 'withdraw.html',
                controllerUrl: ["withdraw.js"]
            }
        }
    }); //avalon.state结束

    avalon.history.start();
    avalon.scan()
});