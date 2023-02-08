import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardTitle, Button } from "reactstrap";
import "../../src/assets/scss/plugins/extensions/dropzone.scss";

import { BsUpload } from "react-icons/bs";
import { useDropzone } from "react-dropzone";
import { AiOutlineFileGif } from "react-icons/ai";
import { FcAddImage } from "react-icons/fc";

function ProgrammaticallyDropzone(props) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: "image/*",

    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div className="dz-thumb" key={file.name}>
      <div className="dz-thumb-inner">
        <img src={file.preview} className="dz-img" alt={file.name} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <span>
      <FcAddImage onClick={open} color="green" id="fcadd" size={30} />

      <input {...getInputProps()} />
      {console.log(files)}

      {/* <aside  size="25px" className="thumb-container">
        {thumbs}
      </aside> */}
    </span>
  );
}

class DropzoneProgrammatically extends React.Component {
  render() {
    return (
      <span>
        <ProgrammaticallyDropzone />
      </span>
    );
  }
}

export default DropzoneProgrammatically;
