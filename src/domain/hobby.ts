import { Entity } from './entity'

export interface UnmarshalledHobby {
  id?: string
  user: string
  passionLevel: number
  name: string
  year: number
}

export class Hobby extends Entity<UnmarshalledHobby> {
  private constructor(props: UnmarshalledHobby) {
    const { id, ...data } = props
    super(data, id)
  }

  public static create(props: UnmarshalledHobby): Hobby {
    const instance = new Hobby(props)
    return instance
  }

  public unmarshal(): UnmarshalledHobby {
    return {
      id: this.id,
      user: this.user,
      passionLevel: parseInt(this.passionLevel.toString()),
      name: this.name,
      year: parseInt(this.year.toString()),
    }
  }

  get id(): string {
    return this._id
  }

  get user(): string {
    return this.props.user
  }

  get passionLevel(): number {
    return this.props.passionLevel
  }

  get name(): string {
    return this.props.name
  }

  get year(): number {
    return this.props.year
  }
}
