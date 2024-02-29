export default class World {
  mssage: string

  constructor(message: string) {
    this.mssage = message
  }

  public sayHello(elem: HTMLElement | null) {
    if (elem) {
      elem.innerText = this.mssage
    }
  }
}
