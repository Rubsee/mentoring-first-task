// interface Company {
//   name: string,
//   catchPhrase: string,
//   bs: string,
// }
//
// interface Geo {
//   lat: string,
//   lng: string,
// }

interface Address {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
}

export interface User {
  id: number,
  name: string,
  email: string,
  address: Address,
  // geo: Geo,
  // phone: string,
  // website: string,
  // company: Company,
}
