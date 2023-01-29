import { shuffle } from 'lodash'
import type Teammate from './teammate.type'

const useTeamateService = () => {
  const createTeams = (groups: Teammate.Group[], numTeams: number) => {
    const teams: string[][] = Array.from({ length: numTeams }, () => [])
    const shuffledGroups = shuffle(
      groups.map(group => {
        const members = shuffle(group.members)
        return { ...group, members }
      }),
    )
    const members = shuffledGroups.flatMap(group => group.members)

    members.forEach((member, i) => {
      teams[i % numTeams].push(member.name)
    })

    return teams
  }

  return {
    createTeams,
  }
}

export default useTeamateService
