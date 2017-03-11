import { uuid } from '../_util/uuid';

export class User {
  constructor(
    public name: string,
    public avatarSrc: string,
    public id: string) {

    // fake a uuid
    this.id = uuid();

  }
}
