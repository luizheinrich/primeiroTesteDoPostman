(function(){
    
    "use strict"
    angular.module("myApp").controller("homeCtrl" ,["HttpSrvc", homeCtrl]);
   
    
    
    function homeCtrl(HttpSrvc) {

		var vm = this;


        HttpSrvc.getAll();
        
 

		vm.sortBy = function (propertyName) {

			vm.propertyName = propertyName;
		};


	};
    
    
    
    
    
    
    
    
    
    
    
    
    function homeCtrl(){
    
        var vm = this;

        vm.credentials = 
        
        
        [
       {
            email : "mr.robot@devsufpa.com",
            senha : "1234"
        }]
        
    
    };
   

})();