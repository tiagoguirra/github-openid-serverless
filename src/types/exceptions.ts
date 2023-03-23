export class ErrorAuthenticateException extends Error {}

export class InvalidArgumentException extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'InvalidArgumentException'
  }
}

export class NotFoundException extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'NotFoundException'
  }
}

export class AlreadyExistException extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'AlreadyExistException'
  }
}
export interface JoiException {
  isJoi: boolean
  details: string
}

export type CustomException =
  | ErrorAuthenticateException
  | InvalidArgumentException
  | NotFoundException
  | AlreadyExistException
  | JoiException
  | Error
