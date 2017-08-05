(function () {
    
    'use strict';
    
    angular.module("myApp").factory("HttpSrvc", ['$http', HttpSrvc]);
    
    function HttpSrvc($http) {
        var getAll = function (){
            
            
            
            
            
    
            
            
        
        
        $http({
            
            'method': 'POST',
            url: 'http://localhost:3000/postos/getALL'
            
        }).then(function sucessCallback(response){
            console.log('deu certo');
        }, function errorCallback(err) {
            console.log('deu errado');
            
            
        });
        
        
    }
    
        
        
    return {
        getAll: getAll
        
        
    }
    
    
    }
})();