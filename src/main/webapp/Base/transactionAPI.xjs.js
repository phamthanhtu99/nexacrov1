//XJS=transactionAPI.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        this.transactionDB = function ()
        {
        	 var id = "getAll";
             var url = "http://localhost:8080/login";
             var reqDs = "dsInput =dsInput";
             var respDs = "ds_tranction=IDDataset";
             var args = "";
             var callback = "received";
             this.transaction(id, url, reqDs, respDs, args, callback, true, 0, false);
        };


        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
