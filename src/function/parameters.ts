// オプションパラメーターを持つ関数
export const isUserStudentIn = (userID: string, username?: string):boolean => {
  if(userID === 'ABC') {
    console.log("Function parameters sample 1 User is sign in:", username)
    return true
  } else {
    console.log("Function parameters sample 2 User is not signed in.")
    return false
  }
}

//デフォルトパラメーターを持つ関数
export const isUserStudentIn2 = (userID: string, username: string = "No Name"):boolean => {
  if(userID === 'ABC') {
    console.log("Function parameters sample 3 User is sign in:", username)
    return true
  } else {
    console.log("Function parameters sample 4 User is not signed in.")
    return false
  }
}

//レストパラメータを持つ関数
export const sumPrice = (...price: number[]) => {
  return price.reduce((prevTotal: number, price: number) => {
    return prevTotal + price
  }, 0)
}