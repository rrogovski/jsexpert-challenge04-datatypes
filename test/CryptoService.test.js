import { describe } from 'mocha';
import { expect } from 'chai';
import sinon from 'sinon';
import chalk from 'chalk';

import CryptoService from '../src/service/CryptoService.js';
import cryptos from './mocks/cryptos.js';
import CryptoRepository from '../src/repository/CryptoRepository.js';

const mock = cryptos;

describe('CryptoService Suite Tests', () => {
    let service = {}, sandbox = {};

    before(() => {
        service = new CryptoService({ repository: new CryptoRepository() });
    })

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    })

    afterEach(() => {
        sandbox.restore();
    })

    it('Should call the repository list', async () => {
        let page = 1, limit = 5;
        sandbox.stub(service, service.list.name).callsFake(async function* () {
            // console.log('page, limit => ', page, limit)
            const _value = mock.slice((page - 1) * limit, page * limit);

            if (!_value.length) return [];

            yield _value;
        });

        let value, done, resultList = [];

        while (!done) {
            ({ value, done } = await service.list().next());
            page += 1;
            resultList = resultList.concat(value);
            // console.log(chalk.red('resultList => '), resultList);
        }

        expect(JSON.stringify(mock)).to.be.deep.equal(JSON.stringify(resultList))
    })
})