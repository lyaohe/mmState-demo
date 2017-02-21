define('recharge', [], function () {
    var vm = avalon.define({
        $id: "recharge",
        payType:{alipay:1,wechat:3}
    });

    return avalon.controller(function($ctrl) {
        $ctrl.$vmodels = [vm];
        $ctrl.$onEnter = function() {
            
        }
    })
});