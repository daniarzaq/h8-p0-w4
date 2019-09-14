function urutkanAbjad(str) {
    var urut = [];
    var hasil = '';
    for (var i = 0; i < str.length;i++){
        urut.push(str[i])
        urut.sort()

    }
    for (var i = 0; i < urut.length;i++){
        hasil += urut[i]
       
    }
   
   
    return hasil
}
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'