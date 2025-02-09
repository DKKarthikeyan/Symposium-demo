const aStudents = [ 
    { name: 'Abishek', id: 1}, 
    { name: 'Sanjay', id: 2}, 
    { name: 'Durai', id: 3} ,
    { name: 'DK', id: 4} 
  ];
  
  const aMarks = [ 
    { mark: 65, id: 2}, 
    { mark: 100, id: 1}, 
    { mark: 85, id: 3} ,
    { mark: -1, id: 4} 
  ];
  
  const mergedArray = aStudents.map(student => ({
    ...student,
    mark: aMarks.find(markObj => markObj.id === student.id)?.mark || 0  
  }));
  
  console.log(mergedArray);
  
