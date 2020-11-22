const removeFromArray = function(...args) {
   const array = args[0]
   const newArray = []
   array.forEach(i => {
       if(!args.includes(i)) {
           newArray.push(i)
       }
   })
   return newArray
}

module.exports = removeFromArray
