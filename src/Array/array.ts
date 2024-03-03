export default function arraySample() {
  // シンプルな配列の型定義
  const colors: string[] = ["red", "blue"]
  colors.push("yellow")
  // colors.push(123) //エラー
  console.log("Array sample1:", colors)

  const even: Array<number> = [1,2,3,4]
  even.push(5)
  // even.push("6") //エラー
  console.log("Array sample2:", even)

  const ids: (string | number)[] = ["ABC", 123]
  ids.push("DEF")
  ids.push(456)
  // ids.push(true) //エラー
  console.log("Array sample3:", ids)

  // 配列の型推論
  const generateSomeArray = () => {
    const _someArray = [] //any
    _someArray.push(123) // number[]
    _someArray.push("ABC") // (string | number)[]
    return _someArray
  }

  const someArray = generateSomeArray()
  someArray.push(456)
  // someArray.push(true) //エラー
  console.log("Array sample4:", someArray)

  // イミュータブルな配列
  const commands: readonly string[] = ["git add .", "git commit", "git push"]
  // commands.push("git fetch")
  // commands[2] = "git pull"
  console.log("Array sample5:", commands)
}