function digitPerkalianMinimum(angka) {
    
    var arr = []
    var result = 0;

    for (var i = 1; i <= angka; i++) {
        var cek = angka / i;
        var strCek = i.toString() + cek.toString();


        if (cek % 1 === 0) {
            arr.push(strCek);

            if (result === 0) {
                result = strCek.length;
            } else {
                if (result > strCek.length) {
                    result = strCek.length;
                }
            }
        }
    }

    return result;
        
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2
