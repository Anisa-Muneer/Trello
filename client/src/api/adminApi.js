import axiosInterceptorInstance from "../utils/adminRequest";

const adminApi = axiosInterceptorInstance;

export async function addList(values) {
    try {
        const data = await adminApi.post("/addList", values);
        return data;
    } catch (err) {
        console.log(err.message);
    }
}

export async function fetchTodo() {
    try {
        const data = await adminApi.get("/toDoList");
        return data;
    } catch (err) {
        console.log(err.message);
    }
}

export const adminSignup = (data) => {
    console.log(data);
    return adminApi.post('/auth/signup', data, {
        withCredentials: true,
    })
}

export async function manageList(id) {
    return adminApi.post(`/manageList/${id}`)
}