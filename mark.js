function getResult(){
    let mtss,phss,chss,sals,total,averge,grade;
    mtss=+mts.value;
    phss=+phs.value;
    chss=+chs.value;
    sals=+sal.value;
    total=mtss+phss+chss+sals;
    averge=total/4;
    if(mtss>=35 && phss>=35 && chss>=35 && sals>=35){
      grade=averge>=90?"A":averge>=80?"B":averge>=70?"c":averge>=60?"D":averge>=50?"E++":"e";
    

    }
    else{
        grade="FAIL";
    }
    tot.value="total marks :"+total;
    avg.value="averge marks :"+averge;
    grad.value="grade marks :"+grade;
  
}
    
