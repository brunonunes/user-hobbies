import Joi from 'joi'
import { UnmarshalledHobby } from '../../../domain/hobby'

const schema = Joi.object({
  id: Joi.string().alphanum().min(3).max(30),
  passionLevel: Joi.number().integer().min(0).max(3).required(),
  name: Joi.string().required(),
  year: Joi.number().positive().required(),
})

export const validateCreateHobby = (
  body: Record<string, unknown>,
): UnmarshalledHobby => {
  const validation = schema.validate(body)

  if (validation.error) {
    throw validation.error
  }

  return validation.value as UnmarshalledHobby
}
