import { Entity } from './entity'

export interface UnmarshalledUser {
  id: string
  name: string
}

export interface UserProps {
  id?: string
  name: string
}

export class User extends Entity<UserProps> {
  private constructor({ id, ...data }: UserProps) {
    super(data, id)
  }

  public static create(props: UserProps): User {
    const instance = new User(props)
    return instance
  }

  public unmarshal(): UnmarshalledUser {
    return {
      id: this.id,
      name: this.name,
    }
  }

  get id(): string {
    return this._id
  }

  get name(): string {
    return this.props.name
  }
}
