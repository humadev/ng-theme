import { Example2Module } from './example2.module';

describe('Example2Module', () => {
  let example2Module: Example2Module;

  beforeEach(() => {
    example2Module = new Example2Module();
  });

  it('should create an instance', () => {
    expect(example2Module).toBeTruthy();
  });
});
