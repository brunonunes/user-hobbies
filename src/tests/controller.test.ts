//controller.test.ts
/// <reference types="jest" />

import 'reflect-metadata'

import { HTTPController } from '../api/http/controller'
import { validateCreateUser } from '../api/http/validation/user'
import { validateCreateHobby } from '../api/http/validation/hobby'
jest.mock('../api/http/controller')

it('Controller to have listUsers', () => {
  const controller = new HTTPController()
  expect(controller).toHaveProperty('listUsers')
})

it('Controller to have createUser', () => {
  const controller = new HTTPController()
  expect(controller).toHaveProperty('createUser')
})

it('Controller to have deleteUser', () => {
  const controller = new HTTPController()
  expect(controller).toHaveProperty('deleteUser')
})

it('Controller to have listHobbiesByUser', () => {
  const controller = new HTTPController()
  expect(controller).toHaveProperty('listHobbiesByUser')
})

it('Controller to have createHobby', () => {
  const controller = new HTTPController()
  expect(controller).toHaveProperty('createHobby')
})

it('Controller to have removeHobby', () => {
  const controller = new HTTPController()
  expect(controller).toHaveProperty('removeHobby')
})

it('Validate createUser', () => {
  const validate = validateCreateUser({
    name: 'Bruno Nunes',
  })
  expect(validate).toHaveProperty('name', 'Bruno Nunes')
})

it('Validate createUser: no name', () => {
  expect(() => {
    validateCreateUser({})
  }).toThrowError('"name" is required')
})

it('Validate createHobby', () => {
  const validate = validateCreateHobby({
    name: 'Running',
    passionLevel: 0,
    year: 2021,
  })
  expect(validate).toHaveProperty('name', 'Running')
  expect(validate).toHaveProperty('passionLevel', 0)
  expect(validate).toHaveProperty('year', 2021)
})

it('Validate createHobby: no name', () => {
  expect(() => {
    validateCreateHobby({
      passionLevel: 0,
      year: 2021,
    })
  }).toThrowError('"name" is required')
})
