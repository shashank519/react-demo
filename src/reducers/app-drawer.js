const appDrawer = {
  isDrawerOpen: false
};

const appDrawerReducer = (state = appDrawer, action) => {
  switch(action.type){
    case 'TOGGLE_DRAWER': 
      return {...state, isDrawerOpen: !state.isDrawerOpen}
    default:
    return state;
  }
}

export default appDrawerReducer;