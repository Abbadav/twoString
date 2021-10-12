//Given two strings 'a' and string 'b', we have to check if they are anagrams of
//of each other or not and return true/False For example, 
//Input-1-
//String a = "india"
//String b = "nidia"
//output - True

// function string (a, b){
//          if (a === India && b === nidia) {
//              return true;
//         } else if (b === India && a ==!nidia){
//              return false;
//          }else {
//              return true
//          }
//      }
//      console.log(string(a, false))
//      console.log(string(b, true))


     function string (a, b){
                 start = str.charAt(0);
                 end = str.charAt(str.length-1);
                 if (start ==='a' && end !=='b'){
                     return "hackathon";
                 }else if (end === 'b' && start !== 'a'){
                     return "achcthoon";
                 }else if (start === 'a' && end === 'b'){
                     return "true";
                 }else
                     {
                     return "false";
                 }
                     return str;
                 }
            
             console.log("str");