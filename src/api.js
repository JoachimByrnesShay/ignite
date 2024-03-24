
import apiKey from "./apiKey.js"

const base_url = `https://api.rawg.io/api/`
// const popular_games = `https://api.rawg.io/api/games?dates=2024,01`

 

const getCurrentMonth = ()=>{
   // const month = new Date(new Date().getMonth() + 1);
   const now = new Date();
   const current = new Date(now.getFullYear(), now.getMonth()+1, 1);
   const month = current.getMonth();
    if(month < 10){
        return `0${month}`
    } else {
        return `${month}`
    }
}

const getCurrentDay = () => {
    const now = new Date();
    const current = new Date(now.getFullYear(), now.getMonth()+1, 1);
    // const day = new Date().getDate();
    const day = current.getDate();
    if(day < 10){
        return `0${day}`
    } else {
        return `${day}`
    }
}

const currentYear = new Date().getFullYear();
const currentDate = `${currentYear}-${getCurrentMonth()}-${getCurrentDay()}`;
const lastYearDate = `${currentYear - 1}-${getCurrentMonth()}-${getCurrentDay()}`;
const nextYearDate = `${currentYear + 1}-${getCurrentMonth()}-${getCurrentDay()}`;
const popular_games = `games?token&key=${apiKey}&dates=${lastYearDate},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?token&key=${apiKey}&dates=${currentDate},${nextYearDate}&ordering=-added&page_size=10`;
const new_games = `games?token&key=${apiKey}&dates=${lastYearDate},${currentDate}&ordering=-released&page_size=10`;


export const popularGamesURL = () => `${base_url}${popular_games}`;
// export const popularGamesURL = ()=>"https://api.rawg.io/api/games?token&key=18134781ea904b9ea7206d3e9f600925&dates=2023-03-23,2024-03-23";
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}?token&key=${apiKey}`;
//https://api.rawg.io/api/games/962674?token&key=18134781ea904b9ea7206d3e9f600925

// https://api.rawg.io/api/games/?token&key=18134781ea904b9ea7206d3e9f600925&dates=2023-3-23,2024-3-23&ordering=-rating&page_size=10

export const gameScreenShotsURL = (game_id) => `${base_url}games/${game_id}/screenshots?token&key=${apiKey}`;

// console.log(popularGamesURL());
export const searchGameURL = (game_name) => `${base_url}games?token&key=${apiKey}&search=${game_name}&page_size=10`;