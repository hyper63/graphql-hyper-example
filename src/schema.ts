import { makeExecutableSchema } from '@graphql-tools/schema'

const typeDefs = /* GraphQL */`
  type Disclosure {
    _id: String
    name: String
    content: String
  }
  
  type Partner {
    _id: String!
    name: String
    slug: String
    logoUrl: String
    colorHex: String
  }

  type Issuer {
    _id: String!
    name: String
    slug: String
    logoUrl: String
    orderIdQueryParam: String
  }

  type Offer {
    _id: String!
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
    _id: String
    issuerId: String
    cpaValue: Int
    annualFee: Int
    introPurchaseAPR: Int
    introBalanceTransferAPR: Int
    regularPurchaseAPR: Int
    regularBalanceTransferAPR: Int
    cachAdvanceAPR: Int
    penaltyAPR: Int
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
    phoneNumber: String
    phoneNumberVerbiage: String
    promoOffer: String
    promoOfferStartDate: String
    promoOfferEndDate: String
    tags: [String]
    name: String
    imageURL: String
    highlights: [Highlights]
    marketingBullets: String
  }

  type Offer {
    _id: String
    name: String
    productId: String

  }

  input ProductInput {
    _id: String
    name: String
  }

  type Query {
    products: [Product]
    offers: [Offer]

  }

  type Mutation {
    createProduct(input: ProductInput) : Product
  }
  
`

const resolvers = {
  Query: {
    products: () => [{ _id: '1', name: 'product 1' }, { _id: '2', name: 'product 2' }],
    offers: () => [{ _id: '1', name: 'offer 1', productId: '1' }, { _id: '2', name: 'offer 2', productId: '1' }]
  },
  Mutation: {
    createProduct: (p: any, x: any, ctx: any) => {
      //console.log(x)
      //console.log(ctx)
      //return { _id: '1', name: 'foobar' }
      return ctx.product.create(x.input)
    }
  }
}

export const schema = makeExecutableSchema({ typeDefs, resolvers })