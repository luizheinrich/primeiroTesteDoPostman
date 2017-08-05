(function(){
    
    'use strict';   //garante q erros impeçam de compilar
    
    // permite exportar um módulo para outro módulo
    module.exports = {
        
        getALL:  function(req, res){
        
        console.log(req.body)
        res.json(req.body);
        
        
        
    }
        
        
        
    }
    
    
    
})();