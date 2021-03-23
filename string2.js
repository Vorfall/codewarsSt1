accum="RqaEzty"
newArr=[]
const capitalizeUpper = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
const capitalizeLower = (s) => {
                if (typeof s !== 'string') return ''
    return s.charAt(0).toLowerCase() + s.slice(1)
  }

for(i=0;i<accum.length;i++){
    letter=accum[i]
    letter+"";    newArr.push(capitalizeUpper(letter))
    newArr.push(stringReturn(capitalizeLower(letter),i))
    

    newArr.push("-")



}
if(newArr[newArr.length-1]==="-")
{
    newArr[newArr.length-1]=""
}

newArr=newArr.join("")
console.log(newArr)


function stringReturn(let,count) {
    str=""
    for(i=0;i<count;i++){
    str+=let
    }
    return str
  }

