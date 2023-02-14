import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardTitle, Button } from "reactstrap";
import "../../../assets/scss/plugins/extensions/dropzone.scss";
import { BsUpload } from "react-icons/bs";
import { useDropzone } from "react-dropzone";
import { AiOutlineFileGif } from "react-icons/ai";
import { FcAddImage } from "react-icons/fc";
import axios from "axios";
import PropTypes from "prop-types";

function ProgrammaticallyDropzone(props) {
  const [text, setText] = useState(null);
  const [myStatus, setMyStatus] = useState("");

  const statuscheck = (props) => {
    setMyStatus(props.status);
    return statuscheck();
  };
  // return statuscheck();
  console.log(myStatus);

  console.log(props);
  // setText(props.status);
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: "audio/*,video/*,image/*",

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

  if (props.status === "ok") {
    console.log(files, props.text);
    axios
      .post(`http://13.127.168.84:3000/user/add_fb_post`, {
        post: props.text,
        mediaUrls: files,
      })
      .then((res) => {
        console.log(res.data.data);
        // props.status("");
        console.log(props.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // const thumbs = files.map((file) => (
  //   <div className="dz-thumb" key={file.name}>
  //     <div className="dz-thumb-inner">
  //       <img src={file.preview} className="dz-img" alt={file.name} />
  //     </div>
  //   </div>
  // ));

  // useEffect(
  //   () => () => {
  //     files.forEach((file) => URL.revokeObjectURL(file.preview));
  //   },
  //   [files]
  // );

  return (
    <span>
      <FcAddImage
        data-placement="top"
        title="Add images,GIF & video"
        onClick={open}
        color="green"
        id="fcadd"
        size={30}
      >
        {" "}
        Add Images & video
      </FcAddImage>
      <input {...getInputProps()} />
      {console.log(files)}
    </span>
  );
}

class DropzoneProgrammatically extends React.Component {
  render() {
    return (
      <span>
        <ProgrammaticallyDropzone
          text={this.props.text}
          status={this.props.status}
        />
      </span>
    );
  }
}

export default DropzoneProgrammatically;
