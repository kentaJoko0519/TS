export default function genericsAdvancedSample(){
  // map関数のシグネチャ
  type map<T, U> = (array: T[], fn: (item: T) => U) => U[]

  const mapStringsToNumbers: map<string, number> = (array, fn) => {
    let result = []
    for (let i = 0; i < array.length; i++){
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }

  const numbers = mapStringsToNumbers(["123","456", "789"], (item) => Number(item))
  console.log("Generics advenced sample1:", numbers)

  const mapNumbersToStrings: map<number, string> = (array, fn) => {
    let result = []
    for (let i = 0; i < array.length; i++){
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }

  const strings = mapNumbersToStrings(numbers, (item) => String(item))
  console.log("Generics advenced sample1:", strings)
}