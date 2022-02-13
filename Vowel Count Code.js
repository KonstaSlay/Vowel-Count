/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.*/

/*function shortcut(string){
  return string.replace(/[aeiou]/g,'')
}*/

function getCount(str) {
  var vowelsCount = 0;
  var vowels = "aeiou"; //гласные
  var i = 0;
  while (i < str.length) {
    if(vowels.indexOf(str[i]) > -1) {
      vowelsCount++;
      i++
    } else {
       i++;
    }
  }
  return vowelsCount;
}

// Решения с Codewars 

function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a","e","i","o","u"];
  for(var i = 0;i < str.length;i++){
    for(var j=0;j<vowels.length;j++){
      if(str[i] === vowels[j]){
        vowelsCount++;
      }
    }
  }
  
  return vowelsCount;
}

function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}