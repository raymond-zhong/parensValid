function parensValid(str){
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if(count<0){
      return false;
    } else if (str[i]=='(') {
      count ++;
    }else if (str[i]==')') {
      count--;
    }
  }
if (count==0) {
  return true;
}else {
  return false;
}
}
