import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {

  let service: UniqueIdService = null;
  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWidthPrefix.name}
    should generate id when called with prefix`, () => {
      const id = service.generateUniqueIdWidthPrefix('app');
      expect (id.startsWith('app-')).toBeTrue(); // expect(id).toContain('app-');
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWidthPrefix.name}
    should not generate duplicate ids when called multiple times`, () => {
      const ids = new Set();
      for (let i = 0; i < 50; i++){
        ids.add(service.generateUniqueIdWidthPrefix('app'));
      }
      expect (ids.size).toBeTruthy(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
    should return the number of generatedIds when called`, () => {
      service.generateUniqueIdWidthPrefix('app');
      service.generateUniqueIdWidthPrefix('app');
      expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWidthPrefix.name}
    should throw when called with empty`, () => {
      const emptyValues = [null, undefined, '', '0', '1'];
      emptyValues.forEach(emptyValue => {
        expect(() => service.generateUniqueIdWidthPrefix(emptyValue))
        .withContext(`Empty value: ${emptyValue }`)
        .toThrow();

        /*
         expect(true).toBeTrue(); Aguarda valor primitivo literal
         expect(true).toBe(true); Aguarda se os tipos literais são idênticos
         expect(true).toBeTruthy(); Retorno mais genérico entre as opções
        */

      });
  });
});
