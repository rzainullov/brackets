module.exports = function check(str, bracketsConfig) {
  if(str.length == 0 || str.length == 1){
    return str.length == 0 ? true : false;
    }
  else{
    let a = str.split('');
    for(let i = 0; i < a.length; i++){
      for(let j = 0; j < bracketsConfig.length; j++){
        for(let k = 1; k < 2; k++){
            if(bracketsConfig[j][1] == a[i] && bracketsConfig[j][0] !== bracketsConfig[j][1]  ){
                 if(bracketsConfig[j][0] == a[i-1]){
                    a.splice(i - 1,2)
                    let b = a.join('')
                    return check(b,bracketsConfig);
                   } else {
                     return false
                   }
            } 
            else if(bracketsConfig[j][1] == a[i] && bracketsConfig[j][0] == bracketsConfig[j][1] && a[i] == a[i+1]) {
              a.splice(i,2)
              let b = a.join('')
              return check(b,bracketsConfig);
            } 
            
        }
             
       }
    }
    return false;
  }
}
