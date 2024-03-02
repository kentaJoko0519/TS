export default function typeAliasSample(){
  // 型エイリアス
  type country = {
    capital: string
    language: string
    name: string
  }

  const japan: country = {
    capital: "Tokyo",
    language: "Japanese",
    name: "Japan"
  }
  console.log("Object alias sample1:", japan)

  let USA: country = {
    capital: "Washinton, D.C",
    language: "Engilish",
    name: "United States of America"
  }
  console.log("Object alias sample2:", USA)

  // 合併型（Union）と交差型（Intersection）
  type Knight = {
    hp: number
    sp: number
    wepon: string
    swordskill: string
  }

  type Wizard = {
    hp: number
    mp: number
    wepon: string
    magicskill: string
  }

  // 合併型。。。Knight または Wizard の型を持つ
  type Adv = Knight | Wizard

  // 交差型。。。Knight と Wizard の型、両方を持つ
  type Paladin = Knight & Wizard

  // Knight寄りの冒険者
  const Adv1: Adv = {
    hp: 100,
    sp: 30,
    wepon: "木の剣",
    swordskill: "回転切り"
  }

  // Wizard寄りの冒険者
  const Adv2: Adv = {
    hp: 80,
    mp: 50,
    wepon: "木の杖",
    magicskill: "ファイアーボウル"
  }

  console.log("Object alias sample3:", Adv1)
  console.log("Object alias sample4:", Adv2)

  const Adv3: Paladin = {
    hp: 300,
    sp: 100,
    mp: 100,
    wepon: "魔剣",
    swordskill: "五連斬り",
    magicskill: "ウィンドカッター"
  }

  console.log("Object alias sample5:", Adv3)
}