
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