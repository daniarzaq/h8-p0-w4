function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var result =  [];
    var tarif = 2000;
    var totalTarif = 0;

    if (arrPenumpang.length > 0){
        for (var i = 0; i < arrPenumpang.length; i++) {
            var data = {};

            data.penumpang = arrPenumpang[i][0]
            data.naikDari = arrPenumpang[i][1] 
            data.tujuan = arrPenumpang[i][2]  
            
            totalTarif = (rute.indexOf(arrPenumpang[i][2]) - rute.indexOf(arrPenumpang[i][1])) * tarif

            data.bayar = totalTarif

            result.push(data);
            }
        } else {
            return result = []
        }

    return result
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]