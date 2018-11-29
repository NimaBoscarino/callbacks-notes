function backward (array, func) {
  for (var i = array.length - 1; i >= 0; i--) {
    func(array[i])
  }
}

backward(['hello', 'lighthouse labs', 'and', 'world'], function (word) {
  console.log(word)
})

function backward2 (array, func) {
  for (var i = array.length - 1; i >= 0; i--) {
    func(array[i], i)
  }
}

var coolArray = ['hello', 'lighthouse labs', 'and', 'world']

backward2(coolArray, function (word, i) {
  console.log(`The word at index ${i} is "${word}"`)
})
