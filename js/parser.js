let parser ={
    "api": {
        func:function(input){
            return input;
        }
    },
    "deck": {
        func:function(input){
            if(input === undefined){
                return [];
            }
            let result = input.match(/([^\s"]+)|"([^"]*?)"/g);
            let actions = {};
            for(var i = 0; i < result.length; i++){
                result[i] = result[i].replace(/"/g,"");
            }
            //create action object//
            for(var i=0; i < result.length; i++){
                let temp = result[i].split(/=|:/);
                actions[temp[0]] = temp[1];
            }
            console.log(actions);
            return actions;
        }
    },
    "user": {
        func:function(input){

        }
    }
}
