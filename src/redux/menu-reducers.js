let initialState = {
  menuItem: [
    { name: "Profile", url: "/profile", id:"1" },
    { name: "Dialogs", url: "/dialogs", id:"2" },
    { name: "News", url: "/naws", id:"3" },
    { name: "Music", url: "/music", id:"4" },
    { name: "Users", url: "/users", id:"5" },
    { name: "Settings", url: "/settings", id:"6" }
  ]
};

const menuReducer = (state = initialState, action) => {
  return state;
};

export default menuReducer;
