import { User, UnmarshalledUser } from '../../../../domain/user'

export class UserMapper {
  public static toDomain(raw: UnmarshalledUser): User {
    return User.create({
      id: raw.id,
      name: raw.name,
    })
  }
}
