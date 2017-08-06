(function (){
    
    'use strict';
    
    module.exports = function(app, express, postosApi){
        
        
        var router = express.Router();
        
        //Rota getALL criada
        router.post('/postos/getALL', postosApi.getALL);
        
     //   router.post('/postos/mrRobot', postosApi.mrRobot);
 
        app.use('/', router);
 
    }
    
 /*
    module.exports = function(app, express, postosApi){
        
        
        var router = express.Router();

        //Rota mrRobot criada
        router.post('/postos/mrRobot', postosApi.mrRobot);

        app.use('/', router);
 
    }
    */

    
})();