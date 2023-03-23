# Github OpenID Serverless Wrapper for Cognito

The AWS Cognito provides a solutions for authentication like identity federation (Login with Google, Facebook etc...), but it's not compatible with GitHub because Cognito implements OAIDC (OpenId Connect) and GiHub only provides OAuth2.0 endpoints.

To solve limitations, this project create a wrap to your GitHub OAuth app with OpenId connect layer, providing a layer connection with Cognito and GitHub.

Project based on [github-cognito-openid-wrapper](https://github.com/TimothyJones/github-cognito-openid-wrapper), but developed with serverless framework to make easy and fast to release.

## About

This project create a layer between Cognito and GitHub, allowing you to use GitHub as an OpenID Identity Provider (IdP) for federation with a Cognito User Pool.

Read de docs from cognito [OIDC User Pool IdP authentication flow](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-oidc-flow.html).

Endpoint to [OpenID Connect Core Spec](https://openid.net/specs/openid-connect-core-1_0.html):

- Authorization - used to start the authorisation process ([spec](https://openid.net/specs/openid-connect-core-1_0.html#AuthorizationEndpoint))
- Token - used to exchange an authorisation code for an access and ID token ([spec](https://openid.net/specs/openid-connect-core-1_0.html#TokenEndpoint))
- UserInfo - used to exchange an access token for information about the user ([spec](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo))
- jwks - used to describe the keys used to sign ID tokens ([implied by spec](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata))

- Configuration - used to discover configuration of this OpenID implementation's
  endpoints and capabilities. ([spec](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfig))


### Developed with

- [NodeJS](https://nodejs.org/)
- [Serveless](https://serverless.com/)
- [Typescript](https://www.typescriptlang.org/)

## Getting Started

### Requirements

1. `nodeJs` na versão `14.x`
2. `serverless` versão `3.22.x`

### Installation

```bash
yarn install
```

### Create and configure Cognito



### Deployment on AWS


### Run local

**With debugger mode**

```bash
yarn debug
```

> This mode runs with node inpection to provider debugger on editors like VS Code.

**Without debugger mode**

```bash
serverless offline
```