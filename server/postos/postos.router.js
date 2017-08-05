(function (){
    
    'use strict';
    
    module.exports = function(app, express, postosApi){
        
        
        var router = express.Router();
        
        //rota criada
        router.post('/postos/getALL', postosApi.getALL);
            
            
            
            
        
        
        app.use('/', router);
        
        
        
    }
    
    
    
    
    
})();