import Joi from 'joi'
import { UnmarshalledUser } from '../../../domain/user'

const schema = Joi.object({
  id: Joi.string().alphanum().min(3).max(30),
  name: Joi.string().required(),
})

export const validateCreateUser = (
  body: Record<string, unknown>,
): UnmarshalledUser => {
  const validation = schema.validate(body)

  if (validation.error) {
    throw validation.error
  }

  return validation.value
}
