module.exports = function check(str, bracketsConfig) {
  if(str.length == 0 || str.length == 1){
    return str.length == 0 ? true : false;
    }
  else{
    let a = str.split('');
    for(let i = 0; i < a.length; i++){
      for(let j = 0; j < bracketConfig.length; j++){
        for(let k = 1; k < 2; k++){
            if(bracketConfig[j][1] == a[i] && bracketConfig[j][0] !== bracketConfig[j][1]  ){
                 if(bracketConfig[j][0] == a[i-1]){
                    a.splice(i - 1,2)
                    let b = a.join('')
                    return bruckets(b,bracketConfig);
                   } else {
                     return false
                   }
            } 
            else if(bracketConfig[j][1] == a[i] && bracketConfig[j][0] == bracketConfig[j][1]) {
              a.splice(i,2)
              let b = a.join('')
              return bruckets(b,bracketConfig);
            } 
        }
             
       }
    }
  }
}
