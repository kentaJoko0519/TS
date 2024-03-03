export default function tupleSamplel() {
  // 一般的なタプルの型定義
  let responce: [number, string] = [200, "OK"]
  // responce = [400, "Bad Request", "missing"]
  // responce = ["400",  "Bad Request"]
  console.log("Tuple sample1:", responce)

  // 可変長引数を使ったタプル
  const girlfriends: [string, ...string[]] = ["kana", "keiko", "toki"]
  girlfriends.push("misa")
  console.log("Tuple sample2:", girlfriends)
}