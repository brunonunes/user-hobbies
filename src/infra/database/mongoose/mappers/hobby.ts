import { Hobby, UnmarshalledHobby } from '../../../../domain/hobby'

export class HobbyMapper {
  public static toDomain(raw: UnmarshalledHobby): Hobby {
    return Hobby.create({
      id: raw.id,
      user: raw.user,
      passionLevel: raw.passionLevel,
      name: raw.name,
      year: raw.year,
    })
  }
}
