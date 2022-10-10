import React, { useState, useEffect } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { getAllProfiles } from "../../../api/api";
import { useLocation, useNavigate } from "react-router-dom";

function ShowProfilePopup({ displayBasic, setDisplayBasic, userId }) {
  const [profiles, setProfiles] = useState([]);
  const navigate = useNavigate();
  const [selectedProfile, setSelectedProfile] = useState([]);
  const [profileId, setProfileId] = useState("");

  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
  };

  const onHide = (name) => {
    setSelectedProfile([]);
    dialogFuncMap[`${name}`](false);
  };
  useEffect(() => {
    getAllProfiles(userId).then((res) => setProfiles(res.data));
  }, [userId]);

  return (
    <div>
      <Dialog
        header="Profiles"
        visible={displayBasic}
        style={{ width: "30vw" }}
        onHide={() => onHide("displayBasic")}
      >
        <div className="flex flex-column justify-content-center align-items-center">
          <Dropdown
            placeholder="Select Profile"
            options={profiles}
            onChange={(e) => {
              setSelectedProfile(e.target.value);
              setProfileId(e.target.value.user_id);
            }}
            value={selectedProfile}
            optionLabel="profile_name"
            style={{ width: "300px" }}
          />
          <Button
            disabled={
             !selectedProfile.profile_name
            }
            style={{ width: "300px", margin: "10px" }}
            label="Proceed"
            onClick={() => {
              if (selectedProfile.profile_name) {
                navigate(`${userId}/${selectedProfile.profile_name}`);
              }
            }}
          ></Button>
        </div>
      </Dialog>
    </div>
  );
}

export default ShowProfilePopup;
