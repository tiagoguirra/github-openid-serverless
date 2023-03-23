import { mockApiEvent } from '../mock/api.mock'
import { handler } from './discovery'

describe('OpenId dicovery handler suit test', () => {
  it.each(['localhost:3000', 'my-api.com.br', 'custom.api'])(
    'should return configuration by host %s',
    async (host) => {
      expect.assertions(2)
      const response = await handler({
        ...mockApiEvent,
        headers: {
          Host: host,
          'Content-Type': 'application/json'
        },
        requestContext: {
          ...mockApiEvent.requestContext,
          stage: 'test'
        }
      })

      expect(response.statusCode).toEqual(200)
      expect(response.body).toEqual(
        JSON.stringify(
          {
            issuer: `https://${host}/test`,
            authorization_endpoint: `https://${host}/test/authorize`,
            token_endpoint: `https://${host}/test/token`,
            token_endpoint_auth_methods_supported: [
              'client_secret_basic',
              'private_key_jwt'
            ],
            token_endpoint_auth_signing_alg_values_supported: ['RS256'],
            userinfo_endpoint: `https://${host}/test/userinfo`,
            jwks_uri: `https://${host}/test/.well-known/jwks.json`,
            scopes_supported: ['openid', 'read:user', 'user:email'],
            response_types_supported: [
              'code',
              'code id_token',
              'id_token',
              'token id_token'
            ],
            subject_types_supported: ['public'],
            userinfo_signing_alg_values_supported: ['none'],
            id_token_signing_alg_values_supported: ['RS256'],
            request_object_signing_alg_values_supported: ['none'],
            display_values_supported: ['page', 'popup'],
            claims_supported: [
              'sub',
              'name',
              'preferred_username',
              'profile',
              'picture',
              'website',
              'email',
              'email_verified',
              'updated_at',
              'iss',
              'aud'
            ]
          },
          null,
          2
        )
      )
    }
  )
})
