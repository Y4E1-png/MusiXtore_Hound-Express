import { GuideForm, TrackingInput, GuideButton, GuideError } from "./CreateGuidesStyles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { createGuide } from "../../redux/slices/guideSlice";

const CreateGuides = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const { status, error } = useSelector((state) => state.guide);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(createGuide(trackingNumber.trim()));
    if (createGuide.fulfilled.match(result)) {
      navigate("/Guides");
    }
  };

  return (
    <GuideForm onSubmit={handleSubmit}>
      <h1>Create New Guide</h1>
      <label htmlFor="trackingNumber">Tracking number</label>
      <TrackingInput
        id="trackingNumber"
        type="text"
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
        maxLength={15}
        required
      />
      <GuideButton type="submit" disabled={status === "loading" || !trackingNumber.trim()}>
        Create Guide
      </GuideButton>
      {error && <GuideError>{error}</GuideError>}
    </GuideForm>
  );
};

export default CreateGuides;
