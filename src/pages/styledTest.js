import { Link } from "react-router-dom";
import {
  BoxContainer,
  GradientBoxContainer,
  InnerBoxContainer,
  LayoutContainer,
  MiniBoxContainer,
  MiniTextBox,
  MiniTextContainer,
  TextContainer,
} from "../styles/container";

const StyleTestComponent = (props) => {
  return (
    <LayoutContainer>
      <p><Link to="/">{"< Back"}</Link></p>
      <BoxContainer>
        <InnerBoxContainer>
          <GradientBoxContainer>
            <MiniBoxContainer />
          </GradientBoxContainer>
        </InnerBoxContainer>

        <TextContainer>
          {["M", "A", "R", "Q"].map((letter) => {
            return (
              <MiniTextContainer>
                <MiniTextBox>{letter}</MiniTextBox>
              </MiniTextContainer>
            );
          })}
        </TextContainer>
      </BoxContainer>
    </LayoutContainer>
  );
};

export default StyleTestComponent;
