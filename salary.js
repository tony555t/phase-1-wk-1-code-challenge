function grossSalary(salary){
    //payee COMPUTATION
    if(salary >= 24000) 
    {
      console.log(salary * 0.01);}

else if(salary >= 24001 &&  salary <= 32333)
    {
      console.log(salary*0.25);}
else {
    
      console.log(salary*0.3);}
return payee()

}
///nhif COMPUTATION
function nhif(salary){
if(salary >= 5999){ 
    return(150);
    }else if(salary >7999){
    return(300);
    } else if(salary >11999){
    return( 500);
    }else if(salary >14999){
      return(500);
    }else if(salary >19999){
      return( 600);
    }
    else if(salary >24999){
      return(750);
   } else if(salary >29999){
    return( 850);
    }else if(salary >34999){
      return(900);
    }else if(salary >39999){
      return( 950);
    }
    else if(salary >44999){
      return(1000);
    } else if(salary >49999){
        return( 1100);
        }else if(salary >59999){
          return(1200);
        }else if(salary >69999){
          return( 1300);
        }
        else if(salary >79999){
          return(1400);
        } 
        else if(salary >89999){
            return( 1500);
            }else if(salary >99999){
              return(1600);
            }else 
              return( 1700);
            }
       // nssf COMPUTATION
       function nssf(salary){
        if(  salary<= 6000){
            return(salary* 0.6);
        }else 
         return (salary*0.6);
        
       } 
       let taxableincome = grossSalary()-(nssf()+nhif())
       let netsalary=taxableincome-Payee()
        return salary
       
    
