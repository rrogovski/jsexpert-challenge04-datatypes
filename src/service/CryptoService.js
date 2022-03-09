import Crypto from '../entity/Crypto.js';
import CryptoRepository from '../repository/CryptoRepository.js';

class CryptoService {
  constructor({ repository } = {}) {
    this.repository = repository || new CryptoRepository();
  }
  async *list() {
    // TODO: implementar generator que chama a repository fazendo a paginação
    const localData = data => new Crypto(data);

    let page = 1, limit = 5;
    while (true) {
      const response = await this.repository.list(page);
      page++;
      // console.log('response => ', response);
      const data = response.data;

      yield data.map(localData);
    }
  }
}

export default CryptoService;
