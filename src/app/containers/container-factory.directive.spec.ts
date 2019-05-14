import { ContainerComponentFactoryDirective } from './generic-container.directive';

describe('GenericContainerDirective', () => {
  it('should create an instance', () => {
    const directive = new ContainerComponentFactoryDirective();
    expect(directive).toBeTruthy();
  });
});
