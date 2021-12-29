import axios from "axios";

const instanceAuth = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "28c8a194-1bbc-4ba0-897f-4f6bf8037c92"
    },

})

export const autAPI = {
    isLogin() {
        return instanceAuth.get("/auth/me")
    }
}

const instance = {
    domen: "https://imdb-api.com/en/API/",
    key: "k_hflr49q2",
    lang: "ru",
    searchMovie: "SearchMovie",
    getStartMovie: "MostPopularMovies",
    Title: "Title"
}

export const FilmsAPI = {
    searchMovie(name) {
        return axios.get(`${instance.domen}${instance.searchMovie}/${instance.key}/${name}`)
    },

    getStartMovie() {
        return axios.get(`${instance.domen}${instance.getStartMovie}/${instance.key}`)
    },
    getFilmDesc(id) {
        return axios.get(`${instance.domen}${instance.Title}/${instance.key}/${id}`)
    }
}

class Request {
    constructor(domen, path) {
        this.domen = domen;
        this.path = path
    }
}

const instanceNews = {
    anime: new Request("https://api.waifu.im", "random/"),
    memes: new Request("https://api.imgflip.com/get_memes", null),
    dog: new Request("https://dog.ceo/api/breeds/image/random/50", null)
}

//https://api.waifu.im/

export const NewsAPI = {
    getDog() {
        return axios.get(`${instanceNews.dog.domen}`)
    },

    getMemes() {
        return axios.get(`${instanceNews.memes.domen}`)
    },
    // getZooAnimal() {
    //     return axios.get(`${instanceNews.})
    //}
}