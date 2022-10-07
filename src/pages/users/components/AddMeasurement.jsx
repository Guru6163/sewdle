import { Divider } from "primereact/divider";
import React, { useEffect, useState, useRef } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { Toast } from "primereact/toast";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { classNames } from "primereact/utils";
import bodyImage from "./images/figures-01.png";
import sleeveImage from "./images/figures-02.png";
import bottomImage from "./images/figures-03.png";
import { addMeasurement, getAllUsers } from "../../../api/api";

function AddMeasurements() {
  const [countries, setCountries] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const [userMeasurement, setUserMeasurement] = useState({});
  const [yesChecked, setYesChecked] = useState(false);
  const [noChecked, setNoChecked] = useState(false);
  const [userName, setUserName] = useState(null);
  const [users, setUsers] = useState([]);
  const [userID, setUserID] = useState();

  const toast = useRef(null);

  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Measurements Updated",
      life: 3000,
    });
  };
  const showError = (message) => {
    toast.current.show({
      severity: "error",
      summary: "Error Message",
      detail: message,
      life: 3000,
    });
  };

  const formik = useFormik({
    initialValues: {
      shoulder: "",
      front_neck_deep: "",
      back_neck_deep: "",
      elbow_length: "",
      arm_hole: "",
      back_cross: "",
      forearm_width: "",
      forearm_length: "",
      upper_chest_width: "",
      lower_chest_width: "",
      wrist_width: "",
      high_waist_width: "",
      mid_waist_width: "",
      low_waist_width: "",
      waist_length: "",
      chest_width: "",
      aasan: "",
      shoulder_to_point: "",
      point_to_point: "",
      floor_length: "",
      thigh_width: "",
      mid_thigh_length: "",
      calves_width: "",
      calves_length: "",
      hip_width: "",
      hip_length: "",
      ankle_width: "",
      ankle_length: "",
      knee_length: "",
      front_cross: "",
      bicep_width: "",
      bicep_length: "",
      full_sleeves_length: "",
      blouse_length: "",
      blouse_closure: "",
      saree_belt_width: "",
      crop_top_length: "",
      profile_name: "Guru",
      height: "12",
      weight: "12",
      gender: "male",
      age: "12",
    },
    validate: (data) => {
      let errors = {};
      if (!data.profile_name) {
        errors.profile_name = "Profile Name is required.";
      }
      if (!data.age) {
        errors.age = "Age is required.";
      }
      if (!data.gender) {
        errors.gender = "Gender is required.";
      }
      if (!data.height) {
        errors.height = "Height is required.";
      }
      if (!data.weight) {
        errors.weight = "Weight is required.";
      }
      return errors;
    },
    onSubmit: (data) => {
      const { user_name, ...rest } = data;
      setFormData(data);
      console.log("Formdata", formData);
      setShowMessage(true);
      addMeasurement(rest, userID)
        .then((res) => showSuccess())
        .catch((err) => showError());
    },
  });

  const isFormFieldValid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = (name) => {
    return (
      isFormFieldValid(name) && (
        <small className="p-error">{formik.errors[name]}</small>
      )
    );
  };

  useEffect(() => {
    getAllUsers().then((data) => {
      setUsers(data.data);
    });
  }, []);

  return (
    <div>
      <Toast ref={toast} />
      <Divider className="mt-5" align="center">
        <h2>Add Measurements</h2>
      </Divider>
      <div className="flex flex-start">
        <form onSubmit={formik.handleSubmit} className="p-fluid">
          <div style={{ width: "98.9vw" }}>
            <div className="flex flex-wrap card mx-8">
              <div
                className="flex justify-content-between"
                style={{ width: "100%" }}
              >
                <div className="flex-wrap" style={{ width: "80%" }}>
                  <div className=" container flex my-2">
                    <label
                      htmlFor="name"
                      className="mt-4"
                      style={{ marginRight: "45px" }}
                    >
                      User Name
                    </label>
                    <p className="mt-4 mr-2">:</p>
                    <div>
                      <Dropdown
                        id="user_name"
                        name="user_name"
                        value={formik.values.user_name}
                        options={users}
                        onChange={(e) => {
                          formik.handleChange(e);
                          formik.values.profile_name = e.value.first_name;
                          formik.values.user_name = e.value.first_name;
                          setUserID(e.value.id);
                        }}
                        optionLabel="first_name"
                        placeholder="Select a User"
                      />
                      {getFormErrorMessage("user_name")}
                    </div>
                  </div>
                  <div className=" container flex my-2">
                    <label htmlFor="name" className="mt-4 mr-5">
                      Profile Name
                    </label>
                    <p className="mt-4 mr-2">:</p>
                    <div>
                      <InputText
                        id="profile_name"
                        name="profile_name"
                        type="text"
                        className="border-none border-bottom-2"
                        style={{ width: "19rem" }}
                        value={formik.values.profile_name}
                        onChange={formik.handleChange}
                      />
                      <div className="text-left">
                        {getFormErrorMessage("profile_name")}
                      </div>
                    </div>
                  </div>
                  <div className=" container flex my-2">
                    <label
                      htmlFor="name"
                      className="mt-4"
                      style={{ marginRight: "102px" }}
                    >
                      Age
                    </label>
                    <p className="mt-4 mr-2">:</p>
                    <div>
                      <InputText
                        id="age"
                        name="age"
                        type="text"
                        className="border-none border-bottom-2"
                        style={{ width: "19rem" }}
                        value={formik.values.age}
                        onChange={formik.handleChange}
                      />
                      <div className="text-left">
                        {getFormErrorMessage("age")}
                      </div>
                    </div>
                  </div>
                  <div className=" container flex my-2">
                    <label
                      htmlFor="name"
                      className="mt-4"
                      style={{ marginRight: "75px" }}
                    >
                      Gender
                    </label>
                    <p className="mt-4 mr-2">:</p>
                    <div>
                      <Dropdown
                        id="gender"
                        name="gender"
                        type="text"
                        options={[
                          { name: "Male", field: "male" },
                          { name: "Female", field: "female" },
                        ]}
                        optionLabel="name"
                        optionValue="field"
                        className="border-none border-bottom-2"
                        style={{ width: "19rem" }}
                        value={formik.values.gender}
                        onChange={formik.handleChange}
                      />
                      <div className="text-left">
                        {getFormErrorMessage("gender")}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap my-2">
                    <div className="flex mr-4">
                      <label htmlFor="name" className="mt-4 mr-8">
                        Height
                      </label>
                      <p className="mt-4 mr-2 ml-1">:</p>
                      <div>
                        <InputText
                          id="height"
                          name="height"
                          type="text"
                          className="border-none border-bottom-2"
                          style={{ width: "19rem" }}
                          value={formik.values.height}
                          onChange={formik.handleChange}
                        />
                        <div className="text-left">
                          {getFormErrorMessage("height")}
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      <label htmlFor="name" className="mt-4 mr-8">
                        Weight
                      </label>
                      <p className="mt-4 mr-2">:</p>
                      <div>
                        <InputText
                          id="weight"
                          name="weight"
                          type="text"
                          className="border-none border-bottom-2"
                          style={{ width: "19rem" }}
                          value={formik.values.weight}
                          onChange={formik.handleChange}
                        />
                        <div className="text-left">
                          {getFormErrorMessage("weight")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-6" style={{ width: "91vw" }}>
                <div className="flex flex-wrap container text-lg">
                  <div
                    className="flex my-2 justify-content-between mr-8 "
                    style={{ width: "340px" }}
                  >
                    <label htmlFor="name" className="mt-2">
                      Shoulder
                    </label>
                    <InputText
                      id="shoulder"
                      type="text"
                      name="shoulder"
                      style={{ width: "10rem" }}
                      value={formik.values.shoulder}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div
                    className="flex my-2 justify-content-between mr-8"
                    style={{ width: "340px" }}
                  >
                    <label htmlFor="name" className="mt-2">
                      Front neck deep
                    </label>
                    <InputText
                      id="front_neck_deep"
                      name="front_neck_deep"
                      type="text"
                      style={{ width: "10rem" }}
                      value={formik.values.front_neck_deep}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div
                    className="flex my-2 justify-content-between mr-8"
                    style={{ width: "340px" }}
                  >
                    <label htmlFor="name" className="mt-2">
                      Mid waist width
                    </label>
                    <InputText
                      id="mid_waist_width"
                      name="mid_waist_width"
                      type="text"
                      style={{ width: "10rem" }}
                      value={formik.values.mid_waist_width}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div
                    className="flex my-2 justify-content-between mr-8"
                    style={{ width: "340px" }}
                  >
                    <label htmlFor="name" className="mt-2">
                      Armhole
                    </label>
                    <InputText
                      id="arm_hole"
                      name="arm_hole"
                      type="text"
                      style={{ width: "10rem" }}
                      value={formik.values.arm_hole}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div
                    className="flex my-2 justify-content-between mr-8"
                    style={{ width: "340px" }}
                  >
                    <label htmlFor="name" className="mt-2">
                      Back cross
                    </label>
                    <InputText
                      id="back_cross"
                      name="back_cross"
                      type="text"
                      style={{ width: "10rem" }}
                      value={formik.values.back_cross}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div
                    className="flex my-2 justify-content-between mr-8"
                    style={{ width: "340px" }}
                  >
                    <label htmlFor="name" className="mt-2">
                      Low waist width
                    </label>
                    <InputText
                      id="low_waist_width"
                      name="low_waist_width"
                      type="text"
                      style={{ width: "10rem" }}
                      value={formik.values.low_waist_width}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div
                    className="flex my-2 justify-content-between mr-8"
                    style={{ width: "340px" }}
                  >
                    <label htmlFor="name" className="mt-2">
                      Upper chest width
                    </label>
                    <InputText
                      id="upper_chest_width"
                      name="upper_chest_width"
                      type="text"
                      style={{ width: "10rem" }}
                      value={formik.values.upper_chest_width}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div
                    className="flex my-2 justify-content-between mr-8"
                    style={{ width: "340px" }}
                  >
                    <label htmlFor="name" className="mt-2">
                      Back neck deep
                    </label>
                    <InputText
                      id="back_neck_deep"
                      name="back_neck_deep"
                      type="text"
                      style={{ width: "10rem" }}
                      value={formik.values.back_neck_deep}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div
                    className="flex my-2 justify-content-between mr-8"
                    style={{ width: "340px" }}
                  >
                    <label htmlFor="name" className="mt-2">
                      Hip width
                    </label>
                    <InputText
                      id="hip_width"
                      name="hip_width"
                      type="text"
                      style={{ width: "10rem" }}
                      value={formik.values.hip_width}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div
                    className="flex my-2 justify-content-between mr-8"
                    style={{ width: "340px" }}
                  >
                    <label htmlFor="name" className="mt-2">
                      Chest width
                    </label>
                    <InputText
                      id="chest_width"
                      name="chest_width"
                      type="text"
                      style={{ width: "10rem" }}
                      value={formik.values.chest_width}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div
                    className="flex my-2 justify-content-between mr-8"
                    style={{ width: "340px" }}
                  >
                    <label htmlFor="name" className="mt-2">
                      High waist width
                    </label>
                    <InputText
                      id="high_waist_width"
                      type="text"
                      name="high_waist_width"
                      style={{ width: "10rem" }}
                      value={formik.values.high_waist_width}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div
                    className="flex my-2 justify-content-between mr-8"
                    style={{ width: "340px" }}
                  >
                    <label htmlFor="name" className="mt-2">
                      Aasan
                    </label>
                    <InputText
                      id="aasan"
                      name="aasan"
                      type="text"
                      style={{ width: "10rem" }}
                      value={formik.values.aasan}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div
                    className="flex my-2 justify-content-between mr-8"
                    style={{ width: "340px" }}
                  >
                    <label htmlFor="name" className="mt-2">
                      Lower chest width
                    </label>
                    <InputText
                      id="lower_chest_width"
                      name="lower_chest_width"
                      type="text"
                      style={{ width: "10rem" }}
                      value={formik.values.lower_chest_width}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div
                    className="flex my-2 justify-content-between mr-8"
                    style={{ width: "340px" }}
                  >
                    <label htmlFor="name" className="mt-2">
                      Bicep width
                    </label>
                    <InputText
                      id="bicep_width"
                      name="bicep_width"
                      type="text"
                      style={{ width: "10rem" }}
                      value={formik.values.bicep_width}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div
                    className="flex my-2 justify-content-between mr-8"
                    style={{ width: "340px" }}
                  >
                    <label htmlFor="name" className="mt-2">
                      Thigh width
                    </label>
                    <InputText
                      id="thigh_width"
                      name="thigh_width"
                      type="text"
                      style={{ width: "10rem" }}
                      value={formik.values.thigh_width}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div
                    className="flex my-2 justify-content-between mr-8"
                    style={{ width: "340px" }}
                  >
                    <label htmlFor="name" className="mt-2">
                      Shoulder to point
                    </label>
                    <InputText
                      id="shoulder_to_point"
                      name="shoulder_to_point"
                      type="text"
                      style={{ width: "10rem" }}
                      value={formik.values.shoulder_to_point}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div
                    className="flex my-2 justify-content-between mr-8"
                    style={{ width: "340px" }}
                  >
                    <label htmlFor="name" className="mt-2">
                      Elbow width
                    </label>
                    <InputText
                      id="elbow_width"
                      name="elbow_width"
                      type="text"
                      style={{ width: "10rem" }}
                      value={formik.values.elbow_width}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div
                    className="flex my-2 justify-content-between mr-8"
                    style={{ width: "340px" }}
                  >
                    <label htmlFor="name" className="mt-2">
                      Calves width
                    </label>
                    <InputText
                      id="calves_width"
                      name="calves_width"
                      type="text"
                      style={{ width: "10rem" }}
                      value={formik.values.calves_width}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div
                    className="flex my-2 justify-content-between mr-8"
                    style={{ width: "340px" }}
                  >
                    <label htmlFor="name" className="mt-2">
                      Point to point
                    </label>
                    <InputText
                      id="point_to_point"
                      name="point_to_point"
                      type="text"
                      style={{ width: "10rem" }}
                      value={formik.values.point_to_point}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div
                    className="flex my-2 justify-content-between mr-8"
                    style={{ width: "340px" }}
                  >
                    <label htmlFor="name" className="mt-2">
                      Forearm width
                    </label>
                    <InputText
                      id="forearm_width"
                      name="forearm_width"
                      type="text"
                      style={{ width: "10rem" }}
                      value={formik.values.forearm_width}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div
                    className="flex my-2 justify-content-between mr-8"
                    style={{ width: "340px" }}
                  >
                    <label htmlFor="name" className="mt-2">
                      Ankle width
                    </label>
                    <InputText
                      id="ankle_width"
                      name="ankle_width"
                      type="text"
                      style={{ width: "10rem" }}
                      value={formik.values.ankle_width}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div
                    className="flex my-2 justify-content-between mr-8"
                    style={{ width: "340px" }}
                  >
                    <label htmlFor="name" className="mt-2">
                      Front cross
                    </label>
                    <InputText
                      id="front_cross"
                      name="front_cross"
                      type="text"
                      style={{ width: "10rem" }}
                      value={formik.values.front_cross}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div
                    className="flex my-2 justify-content-between mr-8"
                    style={{ width: "340px" }}
                  >
                    <label htmlFor="name" className="mt-2">
                      Wrist width
                    </label>
                    <InputText
                      id="wrist_width"
                      name="wrist_width"
                      type="text"
                      style={{ width: "10rem" }}
                      value={formik.values.wrist_width}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap my-2 text-lg">
                  <div
                    className="flex my-2 justify-content-between"
                    style={{ width: "160px" }}
                  >
                    <label htmlFor="name" className="mt-2">
                      Blouse Closure :
                    </label>
                  </div>
                  <Dropdown
                    onChange={formik.handleChange}
                    style={{ width: "200px" }}
                    options={["Front Hooks", "Back Hooks", "Side zip"]}
                  ></Dropdown>
                </div>

                <div className="flex flex-wrap my-2 text-lg">
                  <div
                    className="flex my-2 justify-content-between"
                    style={{ width: "165px" }}
                  >
                    <label htmlFor="name" className="mt-3">
                      Pads Required :
                    </label>
                  </div>
                  <div
                    className="flex my-2 justify-content-between mr-5"
                    style={{ width: "100px" }}
                  >
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
                  <div
                    className="flex my-2 justify-content-between mr-3"
                    style={{ width: "93px" }}
                  >
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
                <div
                  className="flex flex-wrap"
                  style={{ width: "93vw", marginLeft: "-5rem" }}
                >
                  <div className="flex justify-content-between ">
                    {/* Image */}
                    <div>
                      <Image
                        src={bodyImage}
                        alt="Image"
                        width="360px"
                        height="820px"
                      />
                    </div>

                    {/* Top Length */}

                    <div className="my-2">
                      <div style={{ marginBottom: "180px" }}>
                        <h1 className="text-left">Top length</h1>
                      </div>
                      <div
                        className="flex my-1 mr-8"
                        style={{ width: "310px" }}
                      >
                        <InputText
                          id="blouse_length"
                          name="blouse_length"
                          type="text"
                          style={{ width: "11rem", height: "40px" }}
                          value={formik.values.blouse_length}
                          onChange={formik.handleChange}
                        />
                        <label htmlFor="name" className="mt-2 ml-4 text-left">
                          Blouse length
                        </label>
                      </div>
                      <div
                        className="flex my-1 mr-8"
                        style={{ width: "330px" }}
                      >
                        <InputText
                          id="crop_top_length"
                          name="crop_top_length"
                          type="text"
                          style={{ width: "11rem", height: "40px" }}
                          value={formik.values.crop_top_length}
                          onChange={formik.handleChange}
                        />
                        <label htmlFor="name" className="mt-2 ml-4 text-left">
                          Crop top length
                        </label>
                      </div>
                      <div
                        className="flex my-1 mr-8"
                        style={{ width: "330px" }}
                      >
                        <InputText
                          id="waist_length"
                          name="waist_length"
                          type="text"
                          style={{ width: "11rem", height: "40px" }}
                          value={formik.values.waist_length}
                          onChange={formik.handleChange}
                        />
                        <label htmlFor="name" className="mt-2 ml-4">
                          Waist length
                        </label>
                      </div>
                      <div
                        className="flex mt-1 mr-8"
                        style={{ width: "330px", marginBottom: "35px" }}
                      >
                        <InputText
                          id="hip_length"
                          name="hip_length"
                          type="text"
                          style={{ width: "11rem", height: "40px" }}
                          value={formik.values.hip_length}
                          onChange={formik.handleChange}
                        />
                        <label htmlFor="name" className="mt-2 ml-4">
                          Hip length
                        </label>
                      </div>
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
                          <Image
                            src={sleeveImage}
                            alt="Image"
                            width="200px"
                            height="360px"
                          />
                        </div>
                        {/* sleeve box */}
                        <div>
                          <div
                            className="flex mt-7 mr-8"
                            style={{ width: "350px", marginBottom: "30px" }}
                          >
                            <InputText
                              id="bicep_length"
                              name="bicep_length"
                              type="text"
                              style={{ width: "11rem", height: "40px" }}
                              value={formik.values.bicep_length}
                              onChange={formik.handleChange}
                            />
                            <label
                              htmlFor="name"
                              className="mt-2 ml-4 text-left"
                            >
                              Bicep length
                            </label>
                          </div>
                          <div
                            className="flex mr-8"
                            style={{ width: "350px", marginBottom: "30px" }}
                          >
                            <InputText
                              id="elbow_length"
                              name="elbow_length"
                              type="text"
                              style={{ width: "11rem", height: "40px" }}
                              value={formik.values.elbow_length}
                              onChange={formik.handleChange}
                            />
                            <label htmlFor="name" className="mt-2 ml-4">
                              Elbow length
                            </label>
                          </div>
                          <div
                            className="flex mr-8"
                            style={{ width: "350px", marginBottom: "20px" }}
                          >
                            <InputText
                              id="forearm_length"
                              name="forearm_length"
                              type="text"
                              style={{ width: "11rem", height: "40px" }}
                              value={formik.values.forearm_length}
                              onChange={formik.handleChange}
                            />
                            <label htmlFor="name" className="mt-2 ml-4">
                              Forearm length
                            </label>
                          </div>
                          <div
                            className="flex my-2 mr-8"
                            style={{ width: "350px" }}
                          >
                            <InputText
                              id="full_sleeves_length"
                              name="full_sleeves_length"
                              type="text"
                              style={{ width: "11rem", height: "40px" }}
                              value={formik.values.full_sleeves_length}
                              onChange={formik.handleChange}
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
                          <Image
                            src={bottomImage}
                            alt="Image"
                            width="200px"
                            height="370px"
                          />
                        </div>
                        {/* Bottom box */}
                        <div className="mt-8">
                          <div
                            className="flex mr-8 mt-4"
                            style={{ width: "330px", marginBottom: "15px" }}
                          >
                            <InputText
                              id="mid_thigh_length"
                              name="mid_thigh_length"
                              type="text"
                              style={{ width: "11rem", height: "40px" }}
                              value={formik.values.mid_thigh_length}
                              onChange={formik.handleChange}
                            />
                            <label htmlFor="name" className="mt-2 ml-4">
                              Mid thigh length
                            </label>
                          </div>
                          <div
                            className="flex mr-8"
                            style={{ width: "330px", marginBottom: "15px" }}
                          >
                            <InputText
                              id="knee_length"
                              name="knee_length"
                              type="text"
                              style={{ width: "11rem", height: "40px" }}
                              value={formik.values.knee_length}
                              onChange={formik.handleChange}
                            />
                            <label htmlFor="name" className="mt-2 ml-4">
                              Knee length
                            </label>
                          </div>
                          <div
                            className="flex mr-8"
                            style={{ width: "330px", marginBottom: "15px" }}
                          >
                            <InputText
                              id="calves_length"
                              name="calves_length"
                              type="text"
                              style={{ width: "11rem", height: "40px" }}
                              value={formik.values.calves_length}
                              onChange={formik.handleChange}
                            />
                            <label htmlFor="name" className="mt-2 ml-4">
                              Calves length
                            </label>
                          </div>
                          <div
                            className="flex mr-8"
                            style={{ width: "330px", marginBottom: "15px" }}
                          >
                            <InputText
                              id="ankle_length"
                              name="ankle_length"
                              type="text"
                              style={{ width: "11rem", height: "40px" }}
                              value={formik.values.ankle_length}
                              onChange={formik.handleChange}
                            />
                            <label htmlFor="name" className="mt-2 ml-4">
                              Ankle length
                            </label>
                          </div>
                          <div className="flex mr-8" style={{ width: "330px" }}>
                            <InputText
                              id="floor_length"
                              name="floor_length"
                              type="text"
                              style={{ width: "11rem", height: "40px" }}
                              value={formik.values.floor_length}
                              onChange={formik.handleChange}
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

          <Button type="submit" label="Submit" className="my-2 w-15rem" />
        </form>
      </div>
    </div>
  );
}

export default AddMeasurements;
