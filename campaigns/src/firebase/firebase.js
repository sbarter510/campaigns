import { initializeApp } from "@firebase/app";
import {
  getStorage,
  uploadBytesResumable,
  uploadBytes,
  ref,
} from "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA61fmyenIm6yn-lh08kUloNdcB3W0dOig",
  authDomain: "photo-store-74be6.firebaseapp.com",
  projectId: "photo-store-74be6",
  storageBucket: "photo-store-74be6.appspot.com",
  messagingSenderId: "532144995798",
  appId: "1:532144995798:web:a5b781bf573aff1a587877",
};

const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp, "photo-store-74be6.appspot.com");

const storageRef = ref(storage, "images");

export { firebaseApp, uploadBytesResumable, uploadBytes, storageRef, ref };
