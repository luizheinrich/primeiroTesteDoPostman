(function () {

    'use strict';
 angular.module('myApp').controller('loginCtrl', ['$rootScope', '$state', loginCtrl]);

    function loginCtrl($rootScope, $state) {
        var vm = this;
        
        
     //   vm.myfield = {}; //linha nova
     //   vm.e = {};       //linha nova
        
        vm.userCredentials = {};
        vm.user = {
                        email: 'mr.robot@devsufpa.com',
                        password: '1234'
                  };
     
        /*
        
vm.submitenter = function (myfield, e){
    
var keycode;
    
    
if (window.event) keycode = window.event.keyCode;
else if (e) keycode = e.which;
else return true;

if (keycode == 13) {
myfield.form.submit();
return false;

} else
return true;
    
}
        
        */
        
        
        
        
        
     
   vm.islogedIn = function (userCredentials) {
   console.log(userCredentials);
             
               if (userCredentials.email !== vm.user.email) {
                alert("Email errado!");

            } else if (userCredentials.password !== vm.user.password) {
                alert("Senha errada!");


            } else {
                $rootScope.isLogedIn = true;
                $state.go('restrito');

            }
        };
        
        
        
        
    }
         


})();








