function panggilBuah(){
  var buah = ['Pisang','Jeruk','Apel','Mangga']
    console.log(buah);
    buah.pop()
    console.log(buah)
    var buah2 = buah.shift()
    return buah
}
console.log(panggilBuah())
