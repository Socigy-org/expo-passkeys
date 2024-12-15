export type Guid = `${string}-${string}-${string}-${string}`

export interface CreatePasskeyResponse {
  id: string
  rawId: string

  type: 'public-key'
  response: {
    clientDataJSON: string,
    attestationObject: string
  }
}

export interface SignInWithPasskeyResponse {
  id: string
  rawId: string

  type: 'public-key'
  response: {
    clientDataJSON: string,
    authenticatorData: string,
    userHandler?: string,
    signature: string
  }
}