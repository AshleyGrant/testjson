import { AsYouType } from 'libphonenumber-js';

export class App {
  public message = 'Hello world';
}

// handler for creating new AsYouTypeFormmatter instances
function createFormatter() {
  return new AsYouType('US');
}
