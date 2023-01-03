function netSalaryCalculator(){
    // calculating the kra using their respective ranges
    var grossIncome = document.getElementById("grossIncome").value
    if(grossIncome<=24000){
        var  kra = (grossIncome*0.1)
      document.getElementById("kra").innerHTML=(`Your KRA deduction is ${kra}`)
    } if(grossIncome>24000 && grossIncome<=32333){
     var kra =(grossIncome* 0.25)
     document.getElementById("kra").innerHTML=(`Your deduction is ${kra}`)
    } if(grossIncome>32333){
    var kra =(grossIncome* 0.35)
    document.getElementById("kra").innerHTML=(`Your KRA deduction is ${kra}`)
    }
    //calculating the nhif using respective ranges
    if (grossIncome<=5999){
        nhif =(150)
        document.getElementById("nhif").innerHTML=(`Your NHIF deduction is = Ksh.${nhif}`)
    }else if (grossIncome>=6000 && grossIncome<=7999){
        nhif =(300)
        document.getElementById("nhif").innerHTML=(`Your NHIF deduction is = Ksh.${nhif}`)
    } else if (grossIncome>=8000 && grossIncome<=11999){
         nhif =(400)
         document.getElementById("nhif").innerHTML=(`Your NHIF deduction is = Ksh.${nhif}`)
    }else if (grossIncome>=12000 && grossIncome<=14999){
         nhif =(500)
         document.getElementById("nhif").innerHTML=(`Your NHIF deduction is = Ksh.${nhif}`)
    }else if (grossIncome>=15000 && grossIncome<=19999){
        nhif =(600)
        document.getElementById("nhif").innerHTML=(`Your NHIF deduction is = Ksh.${nhif}`)
    }else if (grossIncome>=20000 && grossIncome<=24999){
        nhif =(750)
        document.getElementById("nhif").innerHTML=(`Your NHIF deduction is = Ksh.${nhif}`)
    }else if (grossIncome>=25000 && grossIncome<=29999){
        nhif =(850)
        document.getElementById("nhif").innerHTML=(`Your NHIF deduction is = Ksh.${nhif}`)
    }else if (grossIncome>=30000 && grossIncome<=34999){
        nhif =(900)
        document.getElementById("nhif").innerHTML=(`Your NHIF deduction is = Ksh.${nhif}`)
    }else if (grossIncome>=35000 && grossIncome<=39999){
        nhif =(950)
        document.getElementById("nhif").innerHTML=(`Your NHIF deduction is = Ksh.${nhif}`)
    }else if (grossIncome>=40000 && grossIncome<=44999){
        nhif =(1000)
        document.getElementById("nhif").innerHTML=(`Your NHIF deduction is = Ksh.${nhif}`)
    }else if (grossIncome>=45000 && grossIncome<=49999){
        nhif =(1100)
        document.getElementById("nhif").innerHTML=(`Your NHIF deduction is = Ksh. ${nhif}`)
    }else if (grossIncome>=50000 && grossIncome<=59999){
        nhif =(1200)
        document.getElementById("nhif").innerHTML=(`Your NHIF deduction is = Ksh. ${nhif}`)
    }else if (grossIncome>=60000 && grossIncome<=69999){
        nhif =(1300)
        document.getElementById("nhif").innerHTML=(`Your NHIF deduction is = Ksh. ${nhif}`)
    }else if (grossIncome>=70000 && grossIncome<=79999){
       nhif =(1400)
       document.getElementById("nhif").innerHTML=(`Your NHIF deduction is = Ksh. ${nhif}`)
    }else if (grossIncome>=80000 && grossIncome<=89999){
        nhif =(1500)
        document.getElementById("nhif").innerHTML=(`Your NHIF deduction is = Ksh. ${nhif}`)
    }else if (grossIncome>=90000 && grossIncome<=99999){
        nhif =(1600)
        document.getElementById("nhif").innerHTML=(`Your NHIF deduction is = Ksh. ${nhif}`)
    }else if (grossIncome>=100000){
         nhif =(1700)
         document.getElementById("nhif").innerHTML=(`Your NHIF deduction is = Ksh.${nhif}`)
    }
    //calculating the nssf 
    if(grossIncome <= 3000 && grossIncome>=0 ){
        nssf =(grossIncome*0.06)
        document.getElementById("nssf").innerHTML= (`Your NSSF deduction is = Ksh. ${nssf}`)
    }else if (grossIncome>=4500){
        nssf = (270)
        document.getElementById("nssf").innerHTML=(`Your NSSF deduction is = Ksh.${nssf}`)
    }
      var  netSalary = (grossIncome -nssf -kra -(nhif-(nhif*0.15)))
          document.getElementById("netSalary").innerHTML=`You net salary is Ksh. ${netSalary}`

}
