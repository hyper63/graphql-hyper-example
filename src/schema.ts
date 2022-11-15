import { makeExecutableSchema } from '@graphql-tools/schema'

const typeDefs = /* GraphQL */`
  type Disclosure {
    id: String
    name: String
    content: String
  }
  
  type Partner {
    id: String!
    name: String
    slug: String
    logoUrl: String
    colorHex: String
  }

  type Issuer {
    id: String!
    name: String
    slug: String
    logoUrl: String
    orderIdQueryParam: String
  }

  type Offer {
    id: String!
    name: String
    passwordHash: String
    passwordSalt: String
    slug: String
    partnerId: String
    productIds: [String]
    headline: String
    subtitle: String
  }

  type Highlights {
    header: String
    detals: String
  }

  type Product {
    id: String
    issuerId: String
    cpaValue: Int
    annualFee: Int
    introPurchaseAPR?: Int
    introBalanceTransferAPR?: Int
    regularPurchaseAPR?: Int
    regularBalanceTransferAPR: Int
    cachAdvanceAPR: Int
    penaltyAPR?: Int
    balanceTransferFee: String
    cashAdvanceFee: String
    latePaymentFee: Int
    fxFee: String
    merchantRewardsRate: String
    otherRewardsRate: String
    signUpBonus: String
    ratesAndFeesLink: String
    ratesAndFeesLinkParameters: String
    applyNowLink: String
    applyNowLinkParameters: String
    phoneNumber?: String
    phoneNumberVerbiage?: String
    promoOffer: String
    promoOfferStartDate?: String
    promoOfferEndDate?: String
    tags?: [String]
    name: String
    imageURL: String
    highlights: [Highlights]
    marketingBullets: String
  }

  type Offer {
    id: String
    name: String
    productId: String

  }

  type Query {
    products: [Product]
    offers: [Offer]
  }
  
`

const resolvers = {
  Query: {
    products: () => [{ id: '1', name: 'product 1' }, { id: '2', name: 'product 2' }],
    offers: () => [{ id: '1', name: 'offer 1', productId: '1' }, { id: '2', name: 'offer 2', productId: '1' }]
  }
}

export const schema = makeExecutableSchema({ typeDefs, resolvers })