function changeMe(arr) {
    
    
    for (var i = 0; i < arr.length; i++){
        var result = {};
        var date = new Date()
        var age  = date.getFullYear() - arr[i][3]

            if (!age) {
                age = 'Invalid Birth Year'
            }      
        
        result.firstName = arr[i][0]
        result.lastName = arr[i][1]
        result.gender  = arr[i][2]
        result.age = age
        
        console.log(i+1 +'. ' + arr[i][0] + ' '+ arr[i][1] + ':');
        
        console.log(result)
    }   
     
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""