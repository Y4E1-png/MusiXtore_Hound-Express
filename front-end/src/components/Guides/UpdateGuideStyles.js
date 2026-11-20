import styled from "styled-components";
import { GuideForm } from "./CreateGuidesStyles";

export const UpdatePanel = styled(GuideForm).attrs({ as: "div" })`
  p {
    margin: 0;
  }
`;

export const UpdateMessage = styled.p`
  width: min(520px, calc(100% - 32px));
  margin: 24px auto;
`;

export { ContinueLink as BackLink } from "../Cart/styles";
export { GuideButton, GuideError } from "./CreateGuidesStyles";
