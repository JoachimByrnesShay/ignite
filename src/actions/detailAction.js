import axios from "axios";
import {gameDetailsURL, gameScreenShotsURL} from '../api';

const loadDetail = (id) => async (dispatch) => {
    const detailData = await axios.get(gameDetailsURL(id));
    //console.log("detail data is\n", detailData);
    const screenShotData = await axios.get(gameScreenShotsURL(id));
    console.log("detail:\n", detailData.data);
    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData.data,
            screenShots: screenShotData.data,
        }
    })
}


export default loadDetail;