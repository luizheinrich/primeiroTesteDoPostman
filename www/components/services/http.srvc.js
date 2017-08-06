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
    
        
        
        /*
        // Outra Função
        var mrRobot = function (){

        $http({
            
            'method': 'POST',
            url: 'http://localhost:3000/postos/mrRobot'
            
        }).then(function sucessCallback(response){
            console.log('A função Mr. Robot deu certo!');
        }, function errorCallback(err) {
            console.log('A função Mr. Robot deu errado!');
  
        });     
    }
        
        */
        
        
        
        
        
        
              

                return {
                getAll: getAll
            }



/*
                return {
                mrRobot: mrRobot 
            }
*/
    
    }
    
  
})();