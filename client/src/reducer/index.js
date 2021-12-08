const initialState = {
  countries: [],
  allCountries: [],
  activities: [],
  allActivities:[],
  details: [],
 
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };

     case "FILTER_BY_REGION":
      const allCountries = state.allCountries;
      const regionFiltered =
        action.payload === "All"
          ? allCountries
          : allCountries.filter((c) => c.continente === action.payload);
      return {
        ...state,
        countries: regionFiltered,
      }; 
    case "ORDER_BY_NAME":
      let nameFiltered =
        action.payload === "asc"
          ? state.countries.sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.countries.sort((a, b) => {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        countries: nameFiltered,
      };
    case "ORDER_BY_POBLATION":
      let poblationFiltered =
        action.payload === "asc"
          ? state.countries.sort((a, b) => a.poblacion - b.poblacion)
          : state.countries.sort((a, b) => b.poblacion - a.poblacion);
          
      return {
        ...state,
        countries: poblationFiltered,
      };
    case "FIND_BY_NAME":
      let s = state.allCountries;
      let nameSearch = s.filter((c) => c.name === action.payload);
      return {
        ...state,
        countries: nameSearch,
      };
    case "POST_COUNTRIES":
      return {
        ...state,
      };
    case "GET_ACTIVITIES":
      return {
        ...state,
        activities: action.payload,
        allActivities: action.payload
      };
    case "GET_DETAILS":
      return {
        ...state,
        details: action.payload,
      };

      case "FILTER_BY_ACTIVITY":
          const count = state.allCountries;
          const filterCountry = count.filter(c => c.Activities.find(a=>a.name === action.payload))
         
    
        return{
      
          ...state,
          countries:filterCountry
        }
    default:
      return state;
  }
}

export default rootReducer;
