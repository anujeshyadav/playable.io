import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardTitle, Button } from "reactstrap";
import "../../../assets/scss/plugins/extensions/dropzone.scss";
import { BsUpload } from "react-icons/bs";
import { useDropzone } from "react-dropzone";

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
    <section>
      <Button.Ripple
        color="primary"
        outline
        className="my-1 mb-2"
        onClick={open}
      >
        Upload Images
      </Button.Ripple>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <div className="imageupload">
          <p className="mx-1">
            <BsUpload size={25} /> Drop files here Upload videos, images or GIFs
            for later use in your posts
          </p>
        </div>
      </div>

      <aside className="thumb-container">{thumbs}</aside>
    </section>
  );
}

class DropzoneProgrammatically extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Drop Image here or Upload</CardTitle>
        </CardHeader>
        <CardBody>
          <ProgrammaticallyDropzone />
        </CardBody>
      </Card>
    );
  }
}

export default DropzoneProgrammatically;
