import { BackArrow, GuidesSection, GuidesTitle, GuideList, CreateGuideLink } from "./GuidesListStyles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GuideItem from "./GuideItem";
import { fetchGuide } from "../../redux/slices/guideSlice";



const GuidesList = () => {
  const dispatch = useDispatch();
  const {guides, status, error} = useSelector((state) => state.guide)

  useEffect(() => {
    dispatch(fetchGuide());
  }, [dispatch])


  if (status === "loading") {
    return <GuidesSection>Loading...</GuidesSection>
  }

  if (status === "failed") {
    return <GuidesSection>Error: {error}</GuidesSection>
  }


  return (
    <GuidesSection>
      <BackArrow to="/" aria-label="Back to home">←</BackArrow>
      <GuidesTitle>Tracking Guides</GuidesTitle>
      {guides.length > 0 ? (
        <GuideList>
          {guides.map((guide) => (
            <GuideItem 
              key={guide.id} 
              guide={guide} 
            />
          ))}
        </GuideList>
      ) : (
        status === "succeeded" && <p>No hay guías registradas.</p>
      )}
      <CreateGuideLink to="/NewGuide">Create New Guide</CreateGuideLink>
    </GuidesSection>
  )
}

export default GuidesList;