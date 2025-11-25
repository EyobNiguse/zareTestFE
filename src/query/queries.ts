import { useQuery } from "@tanstack/react-query";

import { projectsQueryKeys, teamsQueryKeys } from './query-keys';
import { fetchProjects, fetchProject, fetchTeams } from '../lib/api';
export const useProjectsQuery = (filters) => {
    return useQuery({
        queryKey: projectsQueryKeys.list(filters),
        queryFn: () => fetchProjects(filters),
    });
};

export const useProjectDetailQuery = (id) => {
    return useQuery({
        queryKey: projectsQueryKeys.detail(id),
        queryFn: () => fetchProject(id),
    });

}

export const useTeamsQuery = (filters) => {
    return useQuery({
        queryKey: teamsQueryKeys.list(filters),
        queryFn: () => fetchTeams(filters),
    });
}