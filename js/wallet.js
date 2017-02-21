define('wallet', [], function () {
    var vm = avalon.define({
        $id: "wallet",
        p:[],
        amount:999
    });

    return avalon.controller(function($ctrl) {
        $ctrl.$vmodels = [vm];
        $ctrl.$onEnter = function() {
            $.ajax({
                url:"a.json",
                type:"get ",
                success: function (data) {
                    vm.p = data
                }
            });
        }
    })
});