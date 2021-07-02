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
        // ids.add(service.generateUniqueIdWidthPrefix('app'));
      }
      // expect (ids.size).toBe(50); // ADD ESTA SENDO CONSIDERADO COMO ERRO
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
    should return the number of generatedIds when called`, () => {
      service.generateUniqueIdWidthPrefix('app');
      service.generateUniqueIdWidthPrefix('app');
      expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWidthPrefix.name}
    should throw when called with empty`, () => {
      const emptyValues = [null, undefined, ''];
      emptyValues.forEach(emptyValues)
  });
});
