import { useRef, useState } from "react";
import { storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";

const Upload = () => {
  const [avatar, setAvatar] = useState(null);

  const filepickerRef = useRef();

  const uploadAvatar = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setAvatar(readerEvent.target.result);
    };
  };

  const submit = () => {
    const imageId = uuidv4();
    const uploadTask = storage
      .ref(`images/${imageId}`)
      .putString(avatar, "data_url");
    uploadTask.on(
      "state_changed",
      null,
      (error) => {},
      () => {
        storage
          .ref("images")
          .child(imageId)
          .getDownloadURL()
          .then((url) => {
            if (url) {
              alert("Your image was uploaded successfully");
              setAvatar(null);
            }
          });
      }
    );
  };

  return (
    <div className="upload__wrapper">
      <div className="upload__container">
        {!avatar && (
          <div
            className="upload__placeholder"
            onClick={() => filepickerRef.current.click()}
          >
            <span>Upload</span>
          </div>
        )}
        {avatar && (
          <img
            className="upload__content"
            src={avatar}
            alt="img"
            onClick={() => filepickerRef.current.click()}
          />
        )}
        <input hidden onChange={uploadAvatar} ref={filepickerRef} type="file" />
        <button className="upload__btn" onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Upload;
