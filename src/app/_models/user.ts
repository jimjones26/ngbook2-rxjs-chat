import { uuid } from '../_util/uuid';

export class User {
  public id: string;

  constructor(
    public name: string,
    public avatarSrc: string) {

    // fake a uuid
    this.id = uuid();

  }
}
