export const projectsQueryKeys = {
    all: ['projects'],
    detail: (projectId) => [...projectsQueryKeys.all, 'detail', projectId],
    list: (filters) => [...projectsQueryKeys.all, 'list', { filters }]
}

export const teamsQueryKeys = {
    all: ['teams'],
    detail: (teamID) => [...teamsQueryKeys.all, 'detail', teamID],
    list: (filters) => [...teamsQueryKeys.all, 'list', { filters }]
}