define('withdraw', [], function () {
    var vm = avalon.define({
        $id: "withdraw"
    });

    return avalon.controller(function($ctrl) {
        $ctrl.$vmodels = [vm];
        $ctrl.$onEnter = function() {
            
        }
    })
});