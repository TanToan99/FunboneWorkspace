import firebase from "firebase";

export const fetchWorkspaceList = async () => {
  const firestoreRef = firebase.firestore().collection("workspace");
  const workspaces = (await firestoreRef.get()).docs.map(item => item.data())
  return workspaces;
}