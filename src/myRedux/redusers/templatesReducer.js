import {
    GET_TEMPLATES_BEGIN,
    GET_TEMPLATES_SUCCESS,
    GET_TEMPLATES_FAIL
} from "../actions/templatesActions/getTemplatesAction"

const initState = {
    templates: [],
    loading: false,
    error: null
};

export default function templatesReducer(state = initState,action) {
  // console.log(action.type + " ! ! ! ! !")

    switch(action.type) {
        case GET_TEMPLATES_BEGIN:
          return {
            ...state,
            loading: true,
            error: null
          };
    
        case GET_TEMPLATES_SUCCESS:
        // console.log("SUCYAS")
          return {
            ...state,
            loading: false,
            templates: action.payload.templates
          };
    
        case GET_TEMPLATES_FAIL:
          return {
            ...state,
            loading: false,
            error: action.payload.error,
            templates: []
          };
    
        default:
          return state;
      }
}