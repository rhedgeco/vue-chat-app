const auth = {
    namespaced: true,
    state: {
        idToken: null,
        isLoggedIn: null,
        profileName: null,
        profileImage: null
    },
    mutations: {
        logIn(state, data) {
            state.idToken = data.token;
            state.isLoggedIn = true;
            state.profileName = data.name;
            state.profileImage = data.email;
            console.log('logging in ' + state.profileName);
        },
        logOut(state) {
            console.log('logging out ' + state.profileName);
            state.idToken = null;
            state.isLoggedIn = false;
            state.profileName = null;
            state.profileImage = null;
        }
    }
};

export default auth;