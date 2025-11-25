
import axios from "axios";


export const BASE_URL = "http://localhost:3001";
const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

export const fetchProjects = async (filters) => {
    const { data } = await axiosInstance.get("/api/projects", { params: filters });
    return data;
}
export const fetchProject = async (id) => {
    const { data } = await axiosInstance.get(`/api/projects/${id}`);
    return data;
}

export const fetchTeams = async (filters) => {
    const { data } = await axiosInstance.get(`/api/team`, { params: filters });
    return data;
}
export const fetchTeam = async (id) => {
    const { data } = await axiosInstance.get(`/api/team/${id}`);
    return data;
}
export const createProject = async (project) => {
    const { data } = await axiosInstance.post(`/api/projects`, project);
    return data;
}
export const updateProject = async (id, projectData) => {
    const { data } = await axiosInstance.put(`/api/projects/${id}`, projectData);
    return data;
}
export const deleteProject = async (id) => {
    const { data } = await axiosInstance.delete(`/api/projects/${id}`);
    return data;
}
export const createTeam = async (team) => {
    const { data } = await axiosInstance.post(`/api/team`, team);
    return data;
}
export const updateTeam = async (id, teamData) => {
    const { data } = await axiosInstance.put(`/api/team/${id}`, teamData);
    return data;
}
export const deleteTeam = async (id) => {
    const { data } = await axiosInstance.delete(`/api/team/${id}`);
    return data;
}

