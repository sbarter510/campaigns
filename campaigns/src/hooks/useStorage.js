import { useState, useEffect } from "react";
// import {
//   storageRef,
//   uploadBytesResumable,
//   uploadBytes,
//   ref,
// } from "../firebase/firebase";

import { firebaseApp } from "../firebase/firebase";

import {
  getStorage,
  uploadBytesResumable,
  uploadBytes,
  ref,
  getDownloadURL,
} from "@firebase/storage";
// import app from "../firebase/firebase";

// //maybe add a error state for displaying errors to user

export default function useStorage(file) {
  const storage = getStorage(firebaseApp);
  const storageRef = ref(storage, "images");

  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const imageRef = ref(storageRef, file.name);
    console.log(imageRef);
    console.log(file);
    // const storageRef = storage.ref(`images/${file.name}`);
    // storageRef.put(file).then(
    uploadBytesResumable(imageRef, file, { contentType: file.type })
      .then((snap) => {
        console.log("uploading");
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((e) => console.log(e));
      });
  }, []);
  return { progress, url };
}
