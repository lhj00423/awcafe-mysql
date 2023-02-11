import axios from "axios";
import { API_URL } from "../config/apiurl";


//1.액션타입
const GET_DATAS = "GET_DATAS";
const GET_DATAS_SUCCESS = "GET_DATAS_SUCCESS";
const GET_DATAS_ERROR = "GET_DATAS_ERROR";
const GET_DATASS = "GET_DATASS";
const GET_DATASS_SUCCESS = "GET_DATASS_SUCCESS";
const GET_DATASS_ERROR = "GET_DATASS_ERROR";
const GET_DATA = "GET_DATA";
const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
const GET_DATA_ERROR = "GET_DATA_ERROR";


//2.초기값
const initialState = {
    specials : {
        loading : false,
        data : null,
        error : null
    }, 
    special : {
        loading : false,
        data : null,
        error : null
    },
    specialss : {
        loading : false,
        data : null,
        error : null
    },
    eso : {
        loading : false,
        data : null,
        error : null
    },
    frapp : {
        loading : false,
        data : null,
        error : null
    },
    blend : {
        loading : false,
        data : null,
        error : null
    }
    ,
    refres : {
        loading : false,
        data : null,
        error : null
    }
    ,
    fizzio : {
        loading : false,
        data : null,
        error : null
    }
    ,
    tea : {
        loading : false,
        data : null,
        error : null
    }
}

//redux middlewear thunk함수 생성
//thunk함수를 사용해서 액션객체를 디스패치하기 
export const getDatas = (callback) => async dispatch =>{
    dispatch({ type : GET_DATAS }) //요청시작
    //에러핸들링
    try{
        //API_URL = "http://localhost:8080" 
        const response = await callback();
        const data = response.data;
        dispatch({ type : GET_DATAS_SUCCESS , data : data });
    }
    catch(e){
        dispatch({ type : GET_DATAS_ERROR , error : e });
    }
}  
export const getDatass = (callback) => async dispatch =>{
    dispatch({ type : GET_DATASS }) //요청시작
    //에러핸들링
    try{
        //API_URL = "http://localhost:8080" 
        const response = await callback();
        const data = response.data;
        dispatch({ type : GET_DATASS_SUCCESS , data : data });
    }
    catch(e){
        dispatch({ type : GET_DATASS_ERROR , error : e });
    }
}

export const getData = no => async dispatch => {
    dispatch({ type : GET_DATA });
    try{
        const response = await axios.get(`${API_URL}/coldbrew/${no}`);
        const data = response.data
        dispatch({ type : GET_DATA_SUCCESS , data : data})
    }
    catch(e){
        dispatch({ type : GET_DATA_ERROR , error : e})
    }
}

const GET_ESO = "GET_ESO";
const GET_ESO_SUCCESS = "GET_ESO_SUCCESS";
const GET_ESO_ERROR = "GET_ESO_ERROR";

export const getEso = (callback) => async dispatch => {
    dispatch({ type : GET_ESO });
    try{
        const response = await callback();
        const data = response.data
        dispatch({ type : GET_ESO_SUCCESS , data : data})
    }
    catch(e){
        dispatch({ type : GET_ESO_ERROR , error : e})
    }
}

const GET_FRAPP = "GET_FRAPP";
const GET_FRAPP_SUCCESS = "GET_FRAPP_SUCCESS";
const GET_FRAPP_ERROR = "GET_FRAPP_ERROR";

export const getFrapp = (callback) => async dispatch => {
    dispatch({ type : GET_FRAPP });
    try{
        const response = await callback();
        const data = response.data
        dispatch({ type : GET_FRAPP_SUCCESS , data : data})
    }
    catch(e){
        dispatch({ type : GET_FRAPP_ERROR , error : e})
    }
}

const GET_BLEND = "GET_BLEND";
const GET_BLEND_SUCCESS = "GET_BLEND_SUCCESS";
const GET_BLEND_ERROR = "GET_BLEND_ERROR";

export const getBlend = (callback) => async dispatch => {
    dispatch({ type : GET_BLEND });
    try{
        const response = await callback();
        const data = response.data
        dispatch({ type : GET_BLEND_SUCCESS , data : data})
    }
    catch(e){
        dispatch({ type : GET_BLEND_ERROR , error : e})
    }
}

const GET_REFRES = "GET_REFRES";
const GET_REFRES_SUCCESS = "GET_REFRES_SUCCESS";
const GET_REFRES_ERROR = "GET_REFRES_ERROR";

export const getRefres = (callback) => async dispatch => {
    dispatch({ type : GET_REFRES });
    try{
        const response = await callback();
        const data = response.data
        dispatch({ type : GET_REFRES_SUCCESS , data : data})
    }
    catch(e){
        dispatch({ type : GET_REFRES_ERROR , error : e})
    }
}

const GET_FIZZIO = "GET_FIZZIO";
const GET_FIZZIO_SUCCESS = "GET_FIZZIO_SUCCESS";
const GET_FIZZIO_ERROR = "GET_FIZZIO_ERROR";

export const getFizzio = (callback) => async dispatch => {
    dispatch({ type : GET_FIZZIO });
    try{
        const response = await callback();
        const data = response.data
        dispatch({ type : GET_FIZZIO_SUCCESS , data : data})
    }
    catch(e){
        dispatch({ type : GET_FIZZIO_ERROR , error : e})
    }
}

const GET_TEA = "GET_TEA";
const GET_TEA_SUCCESS = "GET_TEA_SUCCESS";
const GET_TEA_ERROR = "GET_TEA_ERROR";

export const getTea = (callback) => async dispatch => {
    dispatch({ type : GET_TEA });
    try{
        const response = await callback();
        const data = response.data
        dispatch({ type : GET_TEA_SUCCESS , data : data})
    }
    catch(e){
        dispatch({ type : GET_TEA_ERROR , error : e})
    }
}

//3.리듀서 만들기
export default function special(state=initialState,action){
    switch(action.type){
        case GET_DATAS :
            return{
                ...state,
                specials : {
                    loading : true,
                    data : null,
                    error : null
                }
            };
        case GET_DATAS_SUCCESS :
            return{
                ...state,
                specials : {
                    loading : false,
                    data : action.data,
                    error : null
                }
            };
        case GET_DATAS_ERROR :
            return{
                ...state,
                specials : {
                    loading : false,
                    data : null,
                    error : action.error
                }
            };
        case GET_DATA :
            return{
                ...state,
                special : {
                    loading : true,
                    data : null,
                    error : null
                }
            };
        case GET_DATA_SUCCESS :
            return{
                ...state,
                special : {
                    loading : false,
                    data : action.data,
                    error : null
                }
            };
        case GET_DATA_ERROR :
            return{
                ...state,
                special : {
                    loading : false,
                    data : null,
                    error : action.error
                }
            };
            case GET_DATASS :
            return{
                ...state,
                specialss : {
                    loading : true,
                    data : null,
                    error : null
                }
            };
        case GET_DATASS_SUCCESS :
            return{
                ...state,
                specialss : {
                    loading : false,
                    data : action.data,
                    error : null
                }
            };
        case GET_DATASS_ERROR :
            return{
                ...state,
                specialss : {
                    loading : false,
                    data : null,
                    error : action.error
                }
            };
            case GET_ESO :
                return{
                    ...state,
                    eso : {
                        loading : true,
                        data : null,
                        error : null
                    }
                };
            case GET_ESO_SUCCESS :
                return{
                    ...state,
                    eso : {
                        loading : false,
                        data : action.data,
                        error : null
                    }
                };
            case GET_ESO_ERROR :
                return{
                    ...state,
                    eso : {
                        loading : false,
                        data : null,
                        error : action.error
                    }
                };
                case GET_FRAPP :
                return{
                    ...state,
                    frapp : {
                        loading : true,
                        data : null,
                        error : null
                    }
                };
            case GET_FRAPP_SUCCESS :
                return{
                    ...state,
                    frapp : {
                        loading : false,
                        data : action.data,
                        error : null
                    }
                };
            case GET_FRAPP_ERROR :
                return{
                    ...state,
                    frapp : {
                        loading : false,
                        data : null,
                        error : action.error
                    }
                };
            case GET_BLEND :
                return{
                    ...state,
                    blend : {
                        loading : true,
                        data : null,
                        error : null
                    }
                };
            case GET_BLEND_SUCCESS :
                return{
                    ...state,
                    blend : {
                        loading : false,
                        data : action.data,
                        error : null
                    }
                };
            case GET_BLEND_ERROR :
                return{
                    ...state,
                    blend : {
                        loading : false,
                        data : null,
                        error : action.error
                    }
                };
                case GET_REFRES :
                    return{
                        ...state,
                        refres : {
                            loading : true,
                            data : null,
                            error : null
                        }
                    };
                case GET_REFRES_SUCCESS :
                    return{
                        ...state,
                        refres : {
                            loading : false,
                            data : action.data,
                            error : null
                        }
                    };
                case GET_REFRES_ERROR :
                    return{
                        ...state,
                        refres : {
                            loading : false,
                            data : null,
                            error : action.error
                        }
                    };
                    case GET_FIZZIO :
                        return{
                            ...state,
                            fizzio : {
                                loading : true,
                                data : null,
                                error : null
                            }
                        };
                    case GET_FIZZIO_SUCCESS :
                        return{
                            ...state,
                            fizzio : {
                                loading : false,
                                data : action.data,
                                error : null
                            }
                        };
                    case GET_FIZZIO_ERROR :
                        return{
                            ...state,
                            fizzio : {
                                loading : false,
                                data : null,
                                error : action.error
                            }
                        };
                        case GET_TEA :
                        return{
                            ...state,
                            tea : {
                                loading : true,
                                data : null,
                                error : null
                            }
                        };
                    case GET_TEA_SUCCESS :
                        return{
                            ...state,
                            tea : {
                                loading : false,
                                data : action.data,
                                error : null
                            }
                        };
                    case GET_TEA_ERROR :
                        return{
                            ...state,
                            tea : {
                                loading : false,
                                data : null,
                                error : action.error
                            }
                        };
        default :
            return state;
    }
}