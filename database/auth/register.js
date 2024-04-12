import DB from "../DB";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  getDocs,
  runTransaction,
} from "firebase/firestore";

export default class RegisterUser {
  static registerUser = (userData, setUser, setError) => {
    const { name, surname, username, password, diet } = userData;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        //alert(errorMessage);
        setError(errorMessage);
      });
  };

  storeUserData = async (userData) => {
    try {
      // const [name, setName] = useState(null);
      //   const [surname, setSurname] = useState(null);
      //   const [username, setUsername] = useState(null);
      //   const [password, setPassword] = useState(null);
      //   const [confirmPassword, setConfirmPassword] = useState(null);
      //   const [diet, setDiet] = useState(null);
      //   const [error, setError] = useState(null);
      const data = {
        Name: userData.name,
        Surname: userData.surname,
        Username: userData.username,
        Diet: userData.diet,
        DataUserCreated: new Date(),
      };
      const docRef = await addDoc(collection(DB, "users"), data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      alert(e);
    }
  };
}
