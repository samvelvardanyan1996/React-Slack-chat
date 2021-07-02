import firebase from "../firebase";

export const handleSignOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => console.log("signed out!"))
}