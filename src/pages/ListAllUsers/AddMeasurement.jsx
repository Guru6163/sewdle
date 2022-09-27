import { Divider } from "primereact/divider";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Image } from 'primereact/image';
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { classNames } from "primereact/utils";
import bodyImage from "./images/figures-01.png";
import sleeveImage from "./images/figures-02.png";
import bottomImage from "./images/figures-03.png";
import { addMeasurement } from '../../api/api';

function AddMeasurements() {
  const [countries, setCountries] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const [userMeasurement, setUserMeasurement] = useState({});
  const [yesChecked, setYesChecked] = useState(false);
  const [noChecked, setNoChecked] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      date: null,
      country: null,
      accept: false,
    },
    validate: (data) => {
      let errors = {};

      if (!data.name) {
        errors.name = "Name is required.";
      }

      if (!data.email) {
        errors.email = "Email is required.";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
      ) {
        errors.email = "Invalid email address. E.g. example@email.com";
      }

      if (!data.password) {
        errors.password = "Password is required.";
      }

      if (!data.accept) {
        errors.accept = "You need to agree to the terms and conditions.";
      }

      return errors;
    },
    onSubmit: (data) => {
      setFormData(data);
      setShowMessage(true);

      formik.resetForm();
    },
  });

  const dialogFooter = (
    <div className="flex justify-content-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => setShowMessage(false)}
      />
    </div>
  );
  const passwordHeader = <h6>Pick a password</h6>;
  const passwordFooter = (
    <React.Fragment>
      <Divider />
      <p className="mt-2">Suggestions</p>
      <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: "1.5" }}>
        <li>At least one lowercase</li>
        <li>At least one uppercase</li>
        <li>At least one numeric</li>
        <li>Minimum 8 characters</li>
      </ul>
    </React.Fragment>
  );

  const handleClick = async () => {
    const body = {
      ...userMeasurement,
      profile_name: "dummy3",
      height: "6 ft",
      weight: "75 kg",
      gender: "male",
      age: "25"
    }
    const response = await addMeasurement(body);

    if (response.status === 204 || response.status === 200) {
      console.log(body);
      // toast.current.show({
      //   severity: "success",
      //   summary: "Submit Successful",
      //   detail: "",
      //   life: 3000,
      // });
    } else {
      // toast.current.show({
      //   severity: "error",
      //   summary: "Error Occurred",
      //   detail: "",
      //   life: 3000,
      // });
    }

  }

  return (
    <div>
      <Divider className="mt-5" align="center">
        <h2>Add Measurements</h2>
      </Divider>
      <div className="flex flex-start">
        <form onSubmit={formik.handleSubmit} className="p-fluid">
          <div style={{ width: "98.9vw" }}>
            <div className="flex flex-wrap card mx-8">
              <div className="flex justify-content-between" style={{ width: "100%" }}>
                <div className="flex-wrap" style={{ width: "80%" }}>
                  <div className=" container flex my-2">
                    <label htmlFor="name" className="mt-4 mr-4">
                      Profile Name
                    </label>
                    <p className="mt-4 mr-2">:</p>
                    <div>
                      <InputText
                        id="profileName"
                        type="text"
                        className="border-none border-bottom-2"
                        style={{ width: "19rem" }}
                        value={userMeasurement.profile_name}
                        onChange={(e) => 
                          setUserMeasurement({ ...userMeasurement, profile_name: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className=" container flex my-2">
                    <label htmlFor="name" className="mt-4 mr-4">
                      Age
                    </label>
                    <p className="mt-4 mr-2">:</p>
                    <div>
                      <InputText
                        id="age"
                        type="text"
                        className="border-none border-bottom-2"
                        style={{ width: "19rem" }}
                        value={userMeasurement.age}
                        onChange={(e) => setUserMeasurement({ ...userMeasurement, age: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className=" container flex my-2">
                    <label htmlFor="name" className="mt-4 mr-4">
                      Gender
                    </label>
                    <p className="mt-4 mr-2">:</p>
                    <div>
                      <InputText
                        id="gender"
                        type="text"
                        className="border-none border-bottom-2"
                        style={{ width: "19rem" }}
                        value={userMeasurement.gender}
                        onChange={(e) => setUserMeasurement({ ...userMeasurement, gender: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap my-2">
                    <div className="flex mr-4">
                      <label htmlFor="name" className="mt-4 mr-2">
                        Height
                      </label>
                      <p className="mt-4 mr-2">:</p>
                      <div>
                        <InputText
                          id="height"
                          type="text"
                          className="border-none border-bottom-2"
                          style={{ width: "28rem" }}
                          value={userMeasurement.height}
                          onChange={(e) => setUserMeasurement({ ...userMeasurement, height: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="flex">
                      <label htmlFor="name" className="mt-4 mr-3">
                        Weight
                      </label>
                      <p className="mt-4 mr-3">:</p>
                      <div>
                        <InputText
                          id="weight"
                          type="text"
                          className="border-none border-bottom-2"
                          style={{ width: "19rem" }}
                          value={userMeasurement.weight}
                          onChange={(e) => setUserMeasurement({ ...userMeasurement, weight: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-6" style={{ width: "91vw" }}>
                <div className="flex flex-wrap container text-lg">
                  <div className="flex my-2 justify-content-between mr-8 " style={{ width: "340px" }}>
                    <label htmlFor="name" className="mt-2">
                      Shoulder
                    </label>
                    <InputText
                      id="shoulder"
                      type="text"
                      style={{ width: "10rem" }}
                      value={userMeasurement.shoulder}
                      onChange={(e) => setUserMeasurement({ ...userMeasurement, shoulder: e.target.value })}
                    />
                  </div>
                  <div className="flex my-2 justify-content-between mr-8" style={{ width: "340px" }}>
                    <label htmlFor="name" className="mt-2">
                      Front neck deep
                    </label>
                    <InputText
                      id="frontneckdeep"
                      type="text"
                      style={{ width: "10rem" }}
                      value={userMeasurement.front_neck_deep}
                      onChange={(e) => setUserMeasurement({ ...userMeasurement, front_neck_deep: e.target.value })}
                    />
                  </div>
                  <div className="flex my-2 justify-content-between mr-8" style={{ width: "340px" }}>
                    <label htmlFor="name" className="mt-2">
                      Mid waist width
                    </label>
                    <InputText
                      id="midwaistwidth"
                      type="text"
                      style={{ width: "10rem" }}
                      value={userMeasurement.mid_waist_width}
                      onChange={(e) => setUserMeasurement({ ...userMeasurement, mid_waist_width: e.target.value })}
                    />
                  </div>
                  <div className="flex my-2 justify-content-between mr-8" style={{ width: "340px" }}>
                    <label htmlFor="name" className="mt-2">
                      Armhole
                    </label>
                    <InputText
                      id="armhole"
                      type="text"
                      style={{ width: "10rem" }}
                      value={userMeasurement.arm_hole}
                      onChange={(e) => setUserMeasurement({ ...userMeasurement, arm_hole: e.target.value })}
                    />
                  </div>
                  <div className="flex my-2 justify-content-between mr-8" style={{ width: "340px" }}>
                    <label htmlFor="name" className="mt-2">
                      Back cross
                    </label>
                    <InputText
                      id="backcross"
                      type="text"
                      style={{ width: "10rem" }}
                      value={userMeasurement.back_cross}
                      onChange={(e) => setUserMeasurement({ ...userMeasurement, back_cross: e.target.value })}
                    />
                  </div>
                  <div className="flex my-2 justify-content-between mr-8" style={{ width: "340px" }}>
                    <label htmlFor="name" className="mt-2">
                      Low waist width
                    </label>
                    <InputText
                      id="lowwaistwidth"
                      type="text"
                      style={{ width: "10rem" }}
                      value={userMeasurement.low_waist_width}
                      onChange={(e) => setUserMeasurement({ ...userMeasurement, low_waist_width: e.target.value })}
                    />
                  </div>
                  <div className="flex my-2 justify-content-between mr-8" style={{ width: "340px" }}>
                    <label htmlFor="name" className="mt-2">
                      Upper chest width
                    </label>
                    <InputText
                      id="upperchestwidth"
                      type="text"
                      style={{ width: "10rem" }}
                      value={userMeasurement.upper_chest_width}
                      onChange={(e) => setUserMeasurement({ ...userMeasurement, upper_chest_width: e.target.value })}
                    />
                  </div>
                  <div className="flex my-2 justify-content-between mr-8" style={{ width: "340px" }}>
                    <label htmlFor="name" className="mt-2">
                      Back neck deep
                    </label>
                    <InputText
                      id="backneckdeep"
                      type="text"
                      style={{ width: "10rem" }}
                      value={userMeasurement.back_neck_deep}
                      onChange={(e) => setUserMeasurement({ ...userMeasurement, back_neck_deep: e.target.value })}
                    />
                  </div>
                  <div className="flex my-2 justify-content-between mr-8" style={{ width: "340px" }}>
                    <label htmlFor="name" className="mt-2">
                      Hip width
                    </label>
                    <InputText
                      id="hipwidth"
                      type="text"
                      style={{ width: "10rem" }}
                      value={userMeasurement.hip_width}
                      onChange={(e) => setUserMeasurement({ ...userMeasurement, hip_width: e.target.value })}
                    />
                  </div>
                  <div className="flex my-2 justify-content-between mr-8" style={{ width: "340px" }}>
                    <label htmlFor="name" className="mt-2">
                      Chest width
                    </label>
                    <InputText
                      id="chestwidth"
                      type="text"
                      style={{ width: "10rem" }}
                      value={userMeasurement.chest_width}
                      onChange={(e) => setUserMeasurement({ ...userMeasurement, chest_width: e.target.value })}
                    />
                  </div>
                  <div className="flex my-2 justify-content-between mr-8" style={{ width: "340px" }}>
                    <label htmlFor="name" className="mt-2">
                      High waist width
                    </label>
                    <InputText
                      id="highwaistwidth"
                      type="text"
                      style={{ width: "10rem" }}
                      value={userMeasurement.high_waist_width}
                      onChange={(e) => setUserMeasurement({ ...userMeasurement, high_waist_width: e.target.value })}
                    />
                  </div>
                  <div className="flex my-2 justify-content-between mr-8" style={{ width: "340px" }}>
                    <label htmlFor="name" className="mt-2">
                      Aasan
                    </label>
                    <InputText
                      id="aasan"
                      type="text"
                      style={{ width: "10rem" }}
                      value={userMeasurement.aasan}
                      onChange={(e) => setUserMeasurement({ ...userMeasurement, aasan: e.target.value })}
                    />
                  </div>
                  <div className="flex my-2 justify-content-between mr-8" style={{ width: "340px" }}>
                    <label htmlFor="name" className="mt-2">
                      Lower chest width
                    </label>
                    <InputText
                      id="lowerchestwidth"
                      type="text"
                      style={{ width: "10rem" }}
                      value={userMeasurement.lower_chest_width}
                      onChange={(e) => setUserMeasurement({ ...userMeasurement, lower_chest_width: e.target.value })}
                    />
                  </div>
                  <div className="flex my-2 justify-content-between mr-8" style={{ width: "340px" }}>
                    <label htmlFor="name" className="mt-2">
                      Bicep width
                    </label>
                    <InputText
                      id="bicepwidth"
                      type="text"
                      style={{ width: "10rem" }}
                      value={userMeasurement.bicep_width}
                      onChange={(e) => setUserMeasurement({ ...userMeasurement, bicep_width: e.target.value })}
                    />
                  </div>
                  <div className="flex my-2 justify-content-between mr-8" style={{ width: "340px" }}>
                    <label htmlFor="name" className="mt-2">
                      Thigh width
                    </label>
                    <InputText
                      id="thighwidth"
                      type="text"
                      style={{ width: "10rem" }}
                      value={userMeasurement.thigh_width}
                      onChange={(e) => setUserMeasurement({ ...userMeasurement, thigh_width: e.target.value })}
                    />
                  </div>
                  <div className="flex my-2 justify-content-between mr-8" style={{ width: "340px" }}>
                    <label htmlFor="name" className="mt-2">
                      Shoulder to point
                    </label>
                    <InputText
                      id="shouldertopoint"
                      type="text"
                      style={{ width: "10rem" }}
                      value={userMeasurement.shoulder_to_point}
                      onChange={(e) => setUserMeasurement({ ...userMeasurement, shoulder_to_point: e.target.value })}
                    />
                  </div>
                  <div className="flex my-2 justify-content-between mr-8" style={{ width: "340px" }}>
                    <label htmlFor="name" className="mt-2">
                      Elbow width
                    </label>
                    <InputText
                      id="elbowwidth"
                      type="text"
                      style={{ width: "10rem" }}
                      value={userMeasurement.elbow_width}
                      onChange={(e) => setUserMeasurement({ ...userMeasurement, elbow_width: e.target.value })}
                    />
                  </div>
                  <div className="flex my-2 justify-content-between mr-8" style={{ width: "340px" }}>
                    <label htmlFor="name" className="mt-2">
                      Calves width
                    </label>
                    <InputText
                      id="calveswidth"
                      type="text"
                      style={{ width: "10rem" }}
                      value={userMeasurement.calves_width}
                      onChange={(e) => setUserMeasurement({ ...userMeasurement, calves_width: e.target.value })}

                    />
                  </div>
                  <div className="flex my-2 justify-content-between mr-8" style={{ width: "340px" }}>
                    <label htmlFor="name" className="mt-2">
                      Point to point
                    </label>
                    <InputText
                      id="pointtopoint"
                      type="text"
                      style={{ width: "10rem" }}
                      value={userMeasurement.point_to_point}
                      onChange={(e) => setUserMeasurement({ ...userMeasurement, point_to_point: e.target.value })}

                    />
                  </div>
                  <div className="flex my-2 justify-content-between mr-8" style={{ width: "340px" }}>
                    <label htmlFor="name" className="mt-2">
                      Forearm width
                    </label>
                    <InputText
                      id="forearmwidth"
                      type="text"
                      style={{ width: "10rem" }}
                      value={userMeasurement.forearm_width}
                      onChange={(e) => setUserMeasurement({ ...userMeasurement, forearm_width: e.target.value })}
                    />
                  </div>
                  <div className="flex my-2 justify-content-between mr-8" style={{ width: "340px" }}>
                    <label htmlFor="name" className="mt-2">
                      Ankle width
                    </label>
                    <InputText
                      id="anklewidth"
                      type="text"
                      style={{ width: "10rem" }}
                      value={userMeasurement.ankle_width}
                      onChange={(e) => setUserMeasurement({ ...userMeasurement, ankle_width: e.target.value })}

                    />
                  </div>
                  <div className="flex my-2 justify-content-between mr-8" style={{ width: "340px" }}>
                    <label htmlFor="name" className="mt-2">
                      Front cross
                    </label>
                    <InputText
                      id="frontcross"
                      type="text"
                      style={{ width: "10rem" }}
                      value={userMeasurement.front_cross}
                      onChange={(e) => setUserMeasurement({ ...userMeasurement, front_cross: e.target.value })}
                    />
                  </div>
                  <div className="flex my-2 justify-content-between mr-8" style={{ width: "340px" }}>
                    <label htmlFor="name" className="mt-2">
                      Wrist width
                    </label>
                    <InputText
                      id="wristwidth"
                      type="text"
                      style={{ width: "10rem" }}
                      value={userMeasurement.wrist_width}
                      onChange={(e) => setUserMeasurement({ ...userMeasurement, wrist_width: e.target.value })}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap my-2 text-lg">
                  <div className="flex my-2 justify-content-between" style={{ width: "160px" }}>
                    <label htmlFor="name" className="mt-2">
                      Blouse Closure :
                    </label>

                  </div>
                  <div className="flex my-2 justify-content-between mr-3" style={{ width: "220px" }}>
                    <label htmlFor="name" className="mt-2 mr-2">
                      Front hooks
                    </label>
                    <InputText
                      style={{ width: "6rem" }}
                    />
                  </div>
                  <div className="flex my-2 justify-content-between mr-3" style={{ width: "220px" }}>
                    <label htmlFor="name" className="mt-2 mr-2">
                      Back hooks
                    </label>
                    <InputText
                      style={{ width: "6rem" }}

                    />
                  </div>
                  <div className="flex my-2 justify-content-between" style={{ width: "180px" }}>
                    <label htmlFor="name" className="mt-2 mr-2">
                      Side zip
                    </label>
                    <InputText
                      style={{ width: "6rem" }}

                    />
                  </div>

                </div>

                <div className="flex flex-wrap my-2 text-lg">
                  <div className="flex my-2 justify-content-between" style={{ width: "165px" }}>
                    <label htmlFor="name" className="mt-3">
                      Pads Required :
                    </label>

                  </div>
                  <div className="flex my-2 justify-content-between mr-5" style={{ width: "100px" }}>
                    <label htmlFor="name" className="mt-3 mr-2">
                      Yes
                    </label>
                    <Checkbox
                    inputId="binary"
                    className="mt-3"
                    checked={yesChecked}
                    onChange={(e) => setYesChecked(e.checked)}
                    />
                  </div>
                  <div className="flex my-2 justify-content-between mr-3" style={{ width: "93px" }}>
                    <label htmlFor="name" className="mt-3 mr-1">
                      No
                    </label>
                    <Checkbox
                    inputId="binary"
                    className="mt-3"
                    checked={noChecked}
                    onChange={(e) => setNoChecked(e.checked)}
                    />
                  </div>

                </div>
              </div>




              <div>
                <div className="flex flex-wrap" style={{ width: "93vw", marginLeft: "-5rem" }}>
                  <div className="flex justify-content-between ">
                    {/* Image */}
                    <div>
                      <Image src={bodyImage} alt="Image" width="360px" height="820px" />
                    </div>

                    {/* Top Length */}

                    <div className="my-2">
                      <div style={{ marginBottom: "185px" }}>
                        <h1 className="text-left">Top length</h1>
                      </div>
                      <div className="flex my-1 mr-8" style={{ width: "310px" }}>
                        <InputText
                          id="blouselength"
                          type="text"
                          style={{ width: "11rem", height: "40px" }}
                          value={userMeasurement.blouse_length}
                          onChange={(e) => setUserMeasurement({ ...userMeasurement, blouse_length: e.target.value })}
                        />
                        <label htmlFor="name" className="mt-2 ml-4 text-left">
                          Blouse length
                        </label>
                      </div>
                      <div className="flex my-1 mr-8" style={{ width: "330px" }}>
                        <InputText
                          id="croptoplength"
                          type="text"
                          style={{ width: "11rem", height: "40px" }}
                          value={userMeasurement.crop_top_length}
                          onChange={(e) => setUserMeasurement({ ...userMeasurement, crop_top_length: e.target.value })}
                        />
                        <label htmlFor="name" className="mt-2 ml-4 text-left">
                          Crop top length
                        </label>
                      </div>
                      <div className="flex my-1 mr-8" style={{ width: "330px" }}>
                        <InputText
                          id="waistlength"
                          type="text"
                          style={{ width: "11rem", height: "40px" }}
                          value={userMeasurement.waist_length}
                          onChange={(e) => setUserMeasurement({ ...userMeasurement, waist_length: e.target.value })}
                        />
                        <label htmlFor="name" className="mt-2 ml-4">
                          Waist length
                        </label>
                      </div>
                      <div className="flex mt-1 mr-8" style={{ width: "330px", marginBottom: "35px" }}>
                        <InputText
                          id="hiplength"
                          type="text"
                          style={{ width: "11rem", height: "40px" }}
                          value={userMeasurement.hip_length}
                          onChange={(e) => setUserMeasurement({ ...userMeasurement, hip_length: e.target.value })}
                        />
                        <label htmlFor="name" className="mt-2 ml-4">
                          Hip length
                        </label>
                      </div>
                      {/* <div className="flex mr-8" style={{ width: "330px", marginBottom: "35px" }}>
                        <InputText
                          id="midthighlength"
                          type="text"
                          style={{ width: "11rem", height: "40px" }}
                          value={userMeasurement.mid_thigh_length}
                          onChange={(e) => setUserMeasurement({ ...userMeasurement, mid_thigh_length: e.target.value })}
                        />
                        <label htmlFor="name" className="mt-2 ml-4">
                          Mid thigh length
                        </label>
                      </div>
                      <div className="flex mr-8" style={{ width: "330px", marginBottom: "30px" }}>
                        <InputText
                          id="kneelength"
                          type="text"
                          style={{ width: "11rem", height: "40px" }}
                          value={userMeasurement.knee_length}
                          onChange={(e) => setUserMeasurement({ ...userMeasurement, knee_length: e.target.value })}
                        />
                        <label htmlFor="name" className="mt-2 ml-4">
                          Knee length
                        </label>
                      </div>
                      <div className="flex mr-8" style={{ width: "330px", marginBottom: "50px" }}>
                        <InputText
                          id="calveslength"
                          type="text"
                          style={{ width: "11rem", height: "40px" }}
                          value={userMeasurement.calves_length}
                          onChange={(e) => setUserMeasurement({ ...userMeasurement, calves_length: e.target.value })}
                        />
                        <label htmlFor="name" className="mt-2 ml-4">
                          Calves length
                        </label>
                      </div>
                      <div className="flex mr-8" style={{ width: "330px", marginBottom: "40px" }}>
                        <InputText
                          id="anklelength"
                          type="text"
                          style={{ width: "11rem", height: "40px" }}
                          value={userMeasurement.ankle_length}
                          onChange={(e) => setUserMeasurement({ ...userMeasurement, ankle_length: e.target.value })}
                        />
                        <label htmlFor="name" className="mt-2 ml-4">
                          Ankle length
                        </label>
                      </div>
                      <div className="flex my-2 mr-8" style={{ width: "330px" }}>
                        <InputText
                          id="floorlength"
                          type="text"
                          style={{ width: "11rem", height: "40px" }}
                          value={userMeasurement.floor_length}
                          onChange={(e) => setUserMeasurement({ ...userMeasurement, floor_length: e.target.value })}
                        />
                        <label htmlFor="name" className="mt-2 ml-4">
                          Floor length
                        </label>
                      </div> */}

                    </div>

                  </div>



                  <div>

                    {/* Sleeve Length */}
                    <div>
                      {/* heading */}
                      <div>
                        <h1 className="text-left ml-5">Sleeve length</h1>
                      </div>
                      {/* sleeve image */}
                      <div className="flex " style={{ width: "100%" }}>
                        <div>
                          <Image src={sleeveImage} alt="Image" width="200px" height="360px" />
                        </div>
                        {/* sleeve box */}
                        <div>
                          <div className="flex mt-7 mr-8" style={{ width: "350px", marginBottom: "30px" }}>
                            <InputText
                              id="biceplength"
                              type="text"
                              style={{ width: "11rem", height: "40px" }}
                              value={userMeasurement.bicep_length}
                              onChange={(e) => setUserMeasurement({ ...userMeasurement, bicep_length: e.target.value })}
                            />
                            <label htmlFor="name" className="mt-2 ml-4 text-left">
                              Bicep length
                            </label>
                          </div>
                          <div className="flex mr-8" style={{ width: "350px", marginBottom: "30px" }}>
                            <InputText
                              id="elbowlength"
                              type="text"
                              style={{ width: "11rem", height: "40px" }}
                              value={userMeasurement.elbow_length}
                              onChange={(e) => setUserMeasurement({ ...userMeasurement, elbow_length: e.target.value })}
                            />
                            <label htmlFor="name" className="mt-2 ml-4">
                              Elbow length
                            </label>
                          </div>
                          <div className="flex mr-8" style={{ width: "350px", marginBottom: "20px" }}>
                            <InputText
                              id="forearmlength"
                              type="text"
                              style={{ width: "11rem", height: "40px" }}
                              value={userMeasurement.forearm_length}
                              onChange={(e) => setUserMeasurement({ ...userMeasurement, forearm_length: e.target.value })}
                            />
                            <label htmlFor="name" className="mt-2 ml-4">
                              Forearm length
                            </label>
                          </div>
                          <div className="flex my-2 mr-8" style={{ width: "350px" }}>
                            <InputText
                              id="fullsleeveslength"
                              type="text"
                              style={{ width: "11rem", height: "40px" }}
                              value={userMeasurement.full_sleeves_length}
                              onChange={(e) => setUserMeasurement({ ...userMeasurement, full_sleeves_length: e.target.value })}
                            />
                            <label htmlFor="name" className="mt-2 ml-4">
                              Full sleeves length
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="mt-2">
                      {/* heading */}
                      <div>
                        <h1 className="text-left ml-6">Bottom length</h1>
                      </div>
                      {/* Bottom image */}
                      <div className="flex " style={{ width: "100%" }}>
                        <div>
                          <Image src={bottomImage} alt="Image" width="200px" height="370px" />
                        </div>
                        {/* Bottom box */}
                        <div className="mt-8">
                          <div className="flex mr-8 mt-4" style={{ width: "330px", marginBottom: "15px" }}>
                            <InputText
                              id="midthighlength"
                              type="text"
                              style={{ width: "11rem", height: "40px" }}
                              value={userMeasurement.mid_thigh_length}
                              onChange={(e) => setUserMeasurement({ ...userMeasurement, mid_thigh_length: e.target.value })}
                            />
                            <label htmlFor="name" className="mt-2 ml-4">
                              Mid thigh length
                            </label>
                          </div>
                          <div className="flex mr-8" style={{ width: "330px", marginBottom: "15px" }}>
                            <InputText
                              id="kneelength"
                              type="text"
                              style={{ width: "11rem", height: "40px" }}
                              value={userMeasurement.knee_length}
                              onChange={(e) => setUserMeasurement({ ...userMeasurement, knee_length: e.target.value })}
                            />
                            <label htmlFor="name" className="mt-2 ml-4">
                              Knee length
                            </label>
                          </div>
                          <div className="flex mr-8" style={{ width: "330px", marginBottom: "15px" }}>
                            <InputText
                              id="calveslength"
                              type="text"
                              style={{ width: "11rem", height: "40px" }}
                              value={userMeasurement.calves_length}
                              onChange={(e) => setUserMeasurement({ ...userMeasurement, calves_length: e.target.value })}
                            />
                            <label htmlFor="name" className="mt-2 ml-4">
                              Calves length
                            </label>
                          </div>
                          <div className="flex mr-8" style={{ width: "330px", marginBottom: "15px" }}>
                            <InputText
                              id="anklelength"
                              type="text"
                              style={{ width: "11rem", height: "40px" }}
                              value={userMeasurement.ankle_length}
                              onChange={(e) => setUserMeasurement({ ...userMeasurement, ankle_length: e.target.value })}
                            />
                            <label htmlFor="name" className="mt-2 ml-4">
                              Ankle length
                            </label>
                          </div>
                          <div className="flex mr-8" style={{ width: "330px" }}>
                            <InputText
                              id="floorlength"
                              type="text"
                              style={{ width: "11rem", height: "40px" }}
                              value={userMeasurement.floor_length}
                              onChange={(e) => setUserMeasurement({ ...userMeasurement, floor_length: e.target.value })}
                            />
                            <label htmlFor="name" className="mt-2 ml-4">
                              Floor length
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Button type="submit" label="Submit" onClick={handleClick} className="my-2 w-15rem" />

        </form>
      </div>
    </div>
  );
}

export default AddMeasurements;
