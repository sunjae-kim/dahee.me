namespace Teammate {
  export interface Member {
    name: string
  }

  export interface Group {
    name: string
    members: Member[]
  }
}

export default Teammate
