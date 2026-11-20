import { UpdatePanel, UpdateMessage, BackLink, GuideButton, GuideError } from "./UpdateGuideStyles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { fetchGuide, updateGuide } from "../../redux/slices/guideSlice";

const nextStatus = {
  Pending: "In Transit",
  "In Transit": "Delivered",
};

const UpdateGuide = () => {
  const { guideId } = useParams();
  const { guides, status, error } = useSelector((state) => state.guide);
  const guide = guides.find((item) => String(item.id) === guideId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!guide && status === "idle") {
      dispatch(fetchGuide());
    }
  }, [dispatch, guide, status]);

  if (!guide) {
    if (status === "idle" || status === "loading") return <UpdateMessage>Loading...</UpdateMessage>;
    return <UpdateMessage>{error || "Guide not found."} <BackLink to="/Guides">Back to guides</BackLink></UpdateMessage>;
  }

  const newStatus = nextStatus[guide.currentStatus];
  
  const handleUpdate = async () => {
    const result = await dispatch(updateGuide({ guideId, currentStatus: newStatus }));
    if (updateGuide.fulfilled.match(result)) {
      navigate("/Guides");
    }
  };

  return (
    <UpdatePanel>
      <h1>Update Guide</h1>
      <p>Tracking number: {guide.trackingNumber}</p>
      <p>Current status: {guide.currentStatus}</p>
      {newStatus && (
        <GuideButton type="button" onClick={handleUpdate} disabled={status === "loading"}>
          Update to {newStatus}
        </GuideButton>
      )}
      {error && <GuideError>{error}</GuideError>}
      <p><BackLink to="/Guides">Back to guides</BackLink></p>
    </UpdatePanel>
  );
};

export default UpdateGuide;
