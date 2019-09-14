function checkAB(kata) {
    var cek = '';
    var posA = [];
    var posB = [];
    var selisih = 0;
    for (var i = 0; i < kata.length;i++){
        cek = kata.charAt(i);

        if ( cek === 'a'){
            posA += i
        } else if ( cek === 'b'){
            posB += i
        } 
    }
    
    for (var j = 0; j < posA.length; j++) {
        for(var k=0; k< posB.length;k++){

            if (posA[j] > posB[k]) {

                selisih = posA[j] - posB[k]

            } else if (posB[k] > posA[j]) {

                selisih = posB[k] - posA[j]
            }   
        }
    }

    if (selisih === 4) {
        return true
    } else {
        return false
    }


  }
  
  // TEST CASES
 console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false