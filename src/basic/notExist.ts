export default function notExistSample(){
  let name = null
  console.log('notExist sample 1:', typeof name, name)

  // name = 3
  if(!name){
    console.log('primitive sample 2:', "猫")
  } else {
    console.log('primitive sample 2:', "犬")
  }

  let age = undefined
  console.log('notExist sample 4:', typeof age, age)

  // age = 3
  if(!age){
    console.log('primitive sample 2:', "猫")
  } else {
    console.log('primitive sample 2:', "犬")
  }
}