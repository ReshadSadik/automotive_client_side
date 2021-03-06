import { useState, useEffect } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  getIdToken,
  signOut,
} from 'firebase/auth';
import initializeFirebase from '../pages/Login/Firebase/firebase.init';

// initialize firebase app
initializeFirebase();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [products, setProducts] = useState([]);
  const [stateChanged, setStateChanged] = useState(1);

  const [admin, setAdmin] = useState(false);

  //get all products start
  useEffect(() => {
    fetch('https://cryptic-bayou-87271.herokuapp.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [stateChanged]);

  // register a new user
  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError('');
        // const newUser = { email, displayName: name };
        // setUser(newUser);
        saveUser(email, name, 'POST');
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {
            setError(error);
          });
        history.replace('/login');
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };
  // check is admin

  useEffect(() => {
    fetch(`https://cryptic-bayou-87271.herokuapp.com/users/admin/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          if (data.role) {
            setAdmin(true);
          } else {
            setAdmin(false);
          }
        }
      });
  }, [user.email]);
  console.log(admin);
  // login user with email and pass
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/dashboard';

        history.replace(destination);
        setError('');
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // log in with google

  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, 'PUT');
        setError('');
        const destination = location?.state?.from || '/dashboard';

        history.replace(destination);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // observer user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        getIdToken(user).then((idToken) => {
          localStorage.setItem('idToken', idToken);
        });
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  // log out user
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  // useEffect(() => {
  //   fetch(`https://cryptic-bayou-87271.herokuapp.com/users/${user.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // setAdmin(data.admin);
  //     });
  // }, [user.email]);

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch('https://cryptic-bayou-87271.herokuapp.com/users', {
      method: method,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    user,
    isLoading,
    error,
    setError,
    setUser,
    registerUser,
    loginUser,
    signInWithGoogle,
    logOut,
    products,
    stateChanged,
    setStateChanged,
    admin,
  };
};

export default useFirebase;
