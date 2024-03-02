export default function objectSample(){
  const a: object = {
    name: "jo",
    age: 21
  }
  // a.name

  // オブジェクトリテラル記法で型定義
  let country: {
    langage: string
    name: string
  } = {
    langage: "japanese",
    name: "japan"
  }
  console.log("Object sample 1:", country)

  country = {
    langage: "Engish",
    name: "UK"
  }
  console.log("Object sample 2:", country)

  // オプショナルとreadonly
  let jo: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 21,
    lastName: "Kenta",
    firstName: "Joko"
  }
  jo.gender = "man"
  jo.lastName = "kennnn"
  // jo.firstName = "Takahashi" //readonlyのためエラー
  console.log("Object sample 3:", jo)

  // インデックスシグネチャ
  const caption: {
    [countryName: string]: string
  } = {
    Japan: "Tokyo",
    UK: "Rondon"
  }
  caption.Jarmany = "Ruku"
  caption.Canada = "Ottawa"

  console.log("Object sample 4:", caption)
}