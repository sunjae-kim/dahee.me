import useTeamateService from './teammate.service'
import type Teammate from './teammate.type'

describe('useTeamateService', () => {
  const { createTeams } = useTeamateService()
  let groups: Teammate.Group[]
  let numTeams: number
  const makeGroup = (name: string, numOfMembers: number): Teammate.Group => {
    const members = Array.from({ length: numOfMembers }, (_, i) => ({ name: `${name}${i + 1}` }))
    return { name, members }
  }

  it('각팀은 인원수가 균등하게 나누어져야 한다. 짝수', () => {
    groups = [makeGroup('A', 4), makeGroup('B', 4)]
    numTeams = 2
    const teams = createTeams(groups, numTeams)
    const team1 = teams[0]
    const team2 = teams[1]

    expect(team1.length).toEqual(team2.length)
  })

  it('각팀은 인원수가 균등하게 나누어져야 한다. 홀수', () => {
    groups = [makeGroup('A', 5), makeGroup('B', 4)]
    numTeams = 2
    const teams = createTeams(groups, numTeams)
    const team1 = teams[0]
    const team2 = teams[1]

    expect(team1.length).toEqual(team2.length + 1)
  })

  it('각팀은 인원수가 균등하게 나누어져야 한다. 여러 팀', () => {
    groups = [makeGroup('A', 5), makeGroup('B', 4)]
    numTeams = 3
    const teams = createTeams(groups, numTeams)
    const team1 = teams[0]
    const team2 = teams[1]
    const team3 = teams[2]

    expect(team1.length).toEqual(team2.length)
    expect(team1.length).toEqual(team3.length)
  })

  it('각 팀에는 각 그룹의 멤버들이 균등하게 나누어져야 한다. 짝수', () => {
    groups = [makeGroup('A', 4), makeGroup('B', 4)]
    numTeams = 2
    const teams = createTeams(groups, numTeams)
    const team1 = teams[0]
    const team2 = teams[1]

    console.log(team1)
    console.log(team2)

    const team1GroupA = team1.filter(member => member.includes('A'))
    const team1GroupB = team1.filter(member => member.includes('B'))
    const team2GroupA = team2.filter(member => member.includes('A'))
    const team2GroupB = team2.filter(member => member.includes('B'))

    expect(team1GroupA.length).toEqual(team2GroupA.length)
    expect(team1GroupB.length).toEqual(team2GroupB.length)
  })

  it('각 팀에는 각 그룹의 멤버들이 균등하게 나누어져야 한다. 홀수', () => {
    groups = [makeGroup('A', 5), makeGroup('B', 4)]
    numTeams = 2
    const teams = createTeams(groups, numTeams)
    const team1 = teams[0]
    const team2 = teams[1]

    const team1GroupA = team1.filter(member => member.includes('A'))
    const team1GroupB = team1.filter(member => member.includes('B'))
    const team2GroupA = team2.filter(member => member.includes('A'))
    const team2GroupB = team2.filter(member => member.includes('B'))

    expect(team1GroupA.length).toEqual(3)
    expect(team2GroupA.length).toEqual(2)
    expect(team1GroupB.length).toEqual(team2GroupB.length)
  })

  it('각 팀에는 각 그룹의 멤버들이 균등하게 나누어져야 한다. 여러 팀', () => {
    groups = [makeGroup('A', 5), makeGroup('B', 4)]
    numTeams = 3
    const teams = createTeams(groups, numTeams)
    const team1 = teams[0]
    const team2 = teams[1]
    const team3 = teams[2]

    const team1GroupA = team1.filter(member => member.includes('A'))
    const team1GroupB = team1.filter(member => member.includes('B'))
    const team2GroupA = team2.filter(member => member.includes('A'))
    const team2GroupB = team2.filter(member => member.includes('B'))
    const team3GroupA = team3.filter(member => member.includes('A'))
    const team3GroupB = team3.filter(member => member.includes('B'))

    expect(team1GroupA.length).toBeGreaterThanOrEqual(1)
    expect(team2GroupA.length).toBeGreaterThanOrEqual(1)
    expect(team3GroupA.length).toBeGreaterThanOrEqual(1)
    expect(team1GroupB.length).toBeGreaterThanOrEqual(1)
    expect(team2GroupB.length).toBeGreaterThanOrEqual(1)
    expect(team3GroupB.length).toBeGreaterThanOrEqual(1)
  })

  it('매번 다른 팀이 나와야 한다.', () => {
    groups = [makeGroup('A', 5), makeGroup('B', 4)]
    numTeams = 3
    const teams1 = createTeams(groups, numTeams)
    const teams2 = createTeams(groups, numTeams)
    const teams3 = createTeams(groups, numTeams)

    expect(teams1).not.toEqual(teams2)
    expect(teams1).not.toEqual(teams3)
    expect(teams2).not.toEqual(teams3)
  })
})
