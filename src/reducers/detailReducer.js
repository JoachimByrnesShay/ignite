const initialState = {game: {}, screenShots: {}, isLoading: true};

const detailReducer = (state=initialState, action)=>{
    switch(action.type){
        case "GET_DETAIL":
            return {
                ...state,
                game: action.payload.game,
                screenShots: action.payload.screenShots,
                isLoading:false,

            };
        case "LOADING_DETAIL": 
            return {
                ...state,
                isLoading:true,
            };
        default: 
            return {...state}
        }
    };

export default detailReducer;