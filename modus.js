function cariModus(arr) {

  var jumlah = {};
  var angka, result, pj = arr.length;

  for (var i = 0; i < pj; i++){
      angka = arr[i];

      if (!jumlah[angka]) {
        jumlah[angka] = 1;
      } else {
        jumlah[angka]++;
      }

      if(jumlah[angka] > 1 && jumlah[angka] < pj) {
        result = angka
      } else if (jumlah[angka] >= pj) {
        result = -1
      }

    }  

    if (!result){
      result = -1
    }

    return result 
    
  }
  
  // TEST CASES
 console.log(cariModus([10, 4, 5, 2, 4])); // 4
 console.log(cariModus([5, 10, 10, 6, 5])); // 5
 console.log(cariModus([10, 3, 1, 2, 5])); // -1
 console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
 console.log(cariModus([7, 7, 7, 7, 7])); // -1