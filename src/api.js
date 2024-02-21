
import apiKey from "./apiKey.js"

const base_url = `https://api.rawg.io/api/`
// const popular_games = `https://api.rawg.io/api/games?dates=2024,01`

const getCurrentMonth = ()=>{
    const month = new Date().getMonth() + 1;
    if(month < 10){
        return `0${month}`
    } else {
        return `${month}`
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate();
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
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;
console.log(popularGamesURL());