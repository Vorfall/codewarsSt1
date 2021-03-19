alf="AEIOUY"
str="This wAAAebsite is for losers LOL"
str=str.split('')
console.log(typeof str)
for(i=0;i<str.length;i++)
{
if(alf.indexOf(str[i].toUpperCase())!==-1)
{
    console.log("1")
    str[i]=""
    console.log(str[i])
}
}
str=str.join("")
console.log(str)


