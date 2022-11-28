function determainSalary(){
    if(salary >= 79 && grade <= 100)
    {//if percent > 79 --A
      console.log('Grade - A');}

else if(grade >= 60 && grade <= 79)
    {//60<percent<=79 --B
      console.log('Grade - B');}
else if(grade >= 50 && grade <= 59)
    {//50<percent<=59 --C
      console.log('Grade - C');}
else if(grade >= 40 && grade <= 49)
    {//40<percent<=49  --D
      console.log('Grade - D');}
else if(grade<39){
       console.log('Grade - E Candidate failed');
 } else{
    console.log('invalid number');
    }

}
}