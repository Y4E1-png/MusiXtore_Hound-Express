import { GuideCard, UpdateButton } from "./GuideItemStyles";
import { useNavigate } from "react-router";

const GuideItem = ({ guide }) => {
  const navigate = useNavigate();

  return (
    <GuideCard>
      <strong>Tracking number: {guide.trackingNumber}</strong>
      <p>Status: {guide.currentStatus}</p>
      <p>Created: {new Date(guide.createdAt).toLocaleString()}</p>
      <p>Updated: {new Date(guide.updatedAt).toLocaleString()}</p>
      <UpdateButton type="button" onClick={() => navigate(`/UpdateGuide/${guide.id}`)}>
        Update Guide
      </UpdateButton>
    </GuideCard>
  );
};

export default GuideItem;
