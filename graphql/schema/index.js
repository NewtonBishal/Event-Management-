import { buildSchema } from 'graphql';

export default buildSchema(`
type Booking {
    _id:ID!
    user:User! 
    event:Event! 
    createdAt:String! 
    updatedAt:String! 
}
type Event {
  _id:ID!
  title:String!
  description:String! 
  price:Float! 
  date: String! 
  creator:User!
}

type User {
  _id: ID!
  email:String! 
  password:String
  createdEvents: [Event!]
}

input UserInput {
  email:String! 
  password:String! 
}

input EventInput {
  title:String! 
  description: String!
  price: Float!
  date: String!
}

type RootQuery {
  events: [Event!]!
  bookings: [Booking!]!
}

type RootMutation {
  createEvent(eventInput: EventInput): Event
  createUser(userInput: UserInput): User
}
schema {
  query: RootQuery
  mutation: RootMutation
}
`);
