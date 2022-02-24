import User from './User.js';

// TODO: Criar um Symbol para a propriedade privada '#kUsers'
class Users {
  #kUsers = Symbol("kUsers");
  constructor() {
    // TODO: inicializar a propriedade privada 'kData' como uma estrutura importante vista no curso
    // kData ou #kUsers?
    this[this.#kUsers] = new Set();
  }

  add(userRaw) {
    const user = new User(userRaw);
    // TODO: inserir valor na estrutura escolhida.
    this[this.#kUsers].add(user);
  }

  hasUsers() {
    // TODO: Como saber se tem informação dentro da estrutura escolhida?
    // return false;
    return !!this[this.#kUsers].size
  }

  // TODO: Me parece que o objeto gerado precisa ser iterável 🤔
  *[Symbol.iterator]() {
    for (const item of this[this.#kUsers]) {
      yield item;
    }
  }
}

export default Users;
