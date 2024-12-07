
for(var i=1;i<=20;i++){
    console.log("for" + i);
    if(10<i && i<13)
        {
            console.log("continue");
            continue;
        }

    if(i>17)
    {
        break;
    }
}

var i = 0;
while(i<10){
    console.log("while" + i);
    i++;
}

var i = 0;
do{
    console.log("do_while" + i);
    i++;
}while(i<10)


