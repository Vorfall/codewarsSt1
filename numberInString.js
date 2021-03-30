strnum=0
x=["1", 1, 2, 3, "3"]
  strstr=0
  for(i=0;i<x.length;i++)
    {
        console.log(typeof(x[i]))
      if(typeof(x[i])==="Number")
        {
          strnum+=x[i]
        }
      else{
        strstr+=parseInt(x[i])
      }
    
    }
  return(strnum-strstr)
