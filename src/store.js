import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseReducer } from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore";
import notifyReducer from "./reducers/notifyReducer";
import settingsReducer from "./reducers/settingReducers";

const firebaseConfig = {
  apiKey: "AIzaSyBgzBzu58ZSai4YbHJJQlbq7QrlOkehyhA",
  authDomain: "clientpanel-firebase.firebaseapp.com",
  databaseURL: "https://clientpanel-firebase.firebaseio.com",
  projectId: "clientpanel-firebase",
  storageBucket: "clientpanel-firebase.appspot.com",
  messagingSenderId: "1029386780792",
  appId: "1:1029386780792:web:71ccc692818e87809eed8d",
  measurementId: "G-G240RGSLN3",
};

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};
// Init firebase instance
firebase.initializeApp(firebaseConfig);
// Init firestore
// firebase.firestore();
firebase.firestore();

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notify: notifyReducer,
  settings: settingsReducer,
});

if (localStorage.getItem("settings") == null) {
  // Default settings
  const defaultSettings = {
    allowRegistration: true,
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: false,
  };
  localStorage.setItem("settings", JSON.stringify(defaultSettings));
}
// Create initial state

const initialState = {
  settings: JSON.parse(localStorage.getItem("settings")),
};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export { store, rrfProps };
