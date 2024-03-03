export default function genericsSample(){
  // ジェネリック型を使わない場合
  const stringReduce = (array: String[], initialValue: string): string => {
    let result = initialValue
    for(let i=0; i < array.length; i++){
      result += array[i]
    }
    return result
  }

  console.log('Generics basic sample 1:', stringReduce(['May ', 'the ', 'force ', 'be ', 'with ', 'you'], ''))

  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue
    for(let i=0; i < array.length; i++){
      result += array[i]
    }
    return result
  }

  console.log('Generics basic sample 2:', numberReduce([100, 200, 300], 1000))

  type Reduce = {
    (array: string[], initialValue: string):string
    (array: number[], initialValue: number):number
  }

  // ジェネリック型
  type GenericReduce<T> = {
    (array: T[], initialValue: T): T
  }

  const genericsStringReduce: GenericReduce<string> = (array: string[], initialValue: string ) => {
    let result = initialValue
    for(let i=0; i < array.length; i++){
      result += array[i]
    }
    return result
  }

  console.log('Generics basic sample 3:', genericsStringReduce(['MAKE ', 'TYPESCRIPT '], ''))

  const genericNumberReduce: GenericReduce<number> = (array: number[], initialValue: number ) => {
    let result = initialValue
    for(let i=0; i < array.length; i++){
      result += array[i]
    }
    return result
  }

  console.log('Generics basic sample 4:', genericNumberReduce([1, 2, 3, 4], 5))

  // いろいろなジェネリック型の定義
  // 完全な呼び出しシグネチャ(ここのシグネチャにジェネリック型を割り当てる)
  type GenericReduce2 = {
    <T>(array: T[], initialValue: T): T
    <U>(array: U[], iniUialValue: U): U
  }

  // 呼び出しシグネチャの省略記法
  type GenericReduce3<T> = (array: T[], initialValue: T) => T
  type GenericReduce4 = <T>(array: T[], initialValue: T) => T
}