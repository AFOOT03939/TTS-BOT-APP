import axiosClient from "../../AxiosClient";

export const getAudio = async (text) => {
    const response = await axiosClient.get("/tts", {
        params: { text },
        responseType: "blob"
    });

    return response.data;
};