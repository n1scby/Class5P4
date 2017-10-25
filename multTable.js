

for (var i=1; i<=12; i++)
{
    console.log("The " + i + "'s table");
    for (var j=1; j<=12; j++)
    {
        console.log(i + " x " + j + " = " + i*j);
    }
    if (i<12)
    { console.log("----------");}
}