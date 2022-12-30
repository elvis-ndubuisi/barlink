/* Inherits QRcode Context */
import React from "react";
import QRPreview from "../QR/QRPreview";
import QRContext from "../../context/QRContext";
import styled from "styled-components";
import Input from "../QR/Input";

const EyeAdvSetting = () => {
  const { state, dispatch } = React.useContext(QRContext);
  /* First and Third Element in Array */
  const [tl_inner, setTl_inner] = React.useState(0); //  Top/left inner eye
  const [tr_inner, setTr_inner] = React.useState(0); //  Top/Right inner eye
  const [bl_inner, setBl_inner] = React.useState(0); //  Bottom/Left inner eye
  const [tl_outer, setTl_outer] = React.useState(0); //  Top/left outer eye
  const [tr_outer, setTr_outer] = React.useState(0); //  Top/Right outer eye
  const [bl_outer, setBl_outer] = React.useState(0); //  Bottom/Left outer eye
  /* Second and Fourth Elemet in Array */
  const [tl_inner2, setTl_inner2] = React.useState(0); //  Top/left inner eye
  const [tr_inner2, setTr_inner2] = React.useState(0); //  Top/Right inner eye
  const [bl_inner2, setBl_inner2] = React.useState(0); //  Bottom/Left inner eye
  const [tl_outer2, setTl_outer2] = React.useState(0); //  Top/left outer eye
  const [tr_outer2, setTr_outer2] = React.useState(0); //  Top/Right outer eye
  const [bl_outer2, setBl_outer2] = React.useState(0); //  Bottom/Left outer eye

  React.useEffect(() => {
    const eye = [
      {
        // top/left eye
        outer: [tl_outer, tl_outer2, tl_outer, tl_outer2],
        inner: [tl_inner, tl_inner2, tl_inner, tl_inner2],
      },
      {
        // top/right eye
        outer: [tr_outer, tr_outer2, tr_outer, tr_outer2],
        inner: [tr_inner, tr_inner2, tr_inner, tr_inner2],
      },
      {
        // bottom/left eye
        outer: [bl_outer, bl_outer2, bl_outer, bl_outer2],
        inner: [bl_inner, bl_inner2, bl_inner, bl_inner2],
      },
    ];
    dispatch({ type: "MOD_EYE_RADIUS", payload: { eyeRadius: eye } });
  }, [
    tl_inner,
    setTl_inner,
    tr_inner,
    setTr_inner,
    bl_inner,
    setBl_inner,
    tl_outer,
    setTl_outer,
    tr_outer,
    setTr_outer,
    bl_outer,
    setBl_outer,
    tl_inner2,
    setTl_inner2,
    tr_inner2,
    setTr_inner2,
    bl_inner2,
    setBl_inner2,
    tl_outer2,
    setTl_outer2,
    tr_outer2,
    setTr_outer2,
    bl_outer2,
    setBl_outer2,
  ]);

  React.useEffect(() => {
    // console.log(state.eyeRadius[0]);
  }, []);

  return (
    <Wrapper>
      <QRPreview />
      <Section>
        {/* Top Left */}
        <Set>
          <h4>Top-Left Eye</h4>
          <div>
            <Label>
              Inner-Start
              <Input
                type="range"
                defaultValue={0}
                min={0}
                max={10}
                onChange={(event) => setTl_inner(event.target.valueAsNumber)}
              />
            </Label>
            <Label>
              Inner-End
              <Input
                type="range"
                defaultValue={0}
                min={0}
                max={10}
                onChange={(event) => setTl_inner2(event.target.valueAsNumber)}
              />
            </Label>
          </div>
          <div>
            <Label>
              Outer-Start
              <Input
                type="range"
                defaultValue={0}
                min={0}
                max={10}
                onChange={(event) => setTl_outer(event.target.valueAsNumber)}
              />
            </Label>
            <Label>
              Outer-End
              <Input
                type="range"
                defaultValue={0}
                min={0}
                max={10}
                onChange={(event) => setTl_outer2(event.target.valueAsNumber)}
              />
            </Label>
          </div>
        </Set>
        {/* Top Right */}
        <Set>
          <h4>Top-Right Eye</h4>
          <div>
            <Label>
              Inner-Start
              <Input
                type="range"
                min={0}
                max={10}
                defaultValue={0}
                onChange={(event) => setTr_inner(event.target.valueAsNumber)}
              />
            </Label>
            <Label>
              Inner-End
              <Input
                type="range"
                min={0}
                max={10}
                defaultValue={0}
                onChange={(event) => setTr_inner2(event.target.valueAsNumber)}
              />
            </Label>
          </div>
          <div>
            <Label>
              Outer-Start
              <Input
                type="range"
                min={0}
                max={10}
                defaultValue={0}
                onChange={(event) => setTr_outer(event.target.valueAsNumber)}
              />
            </Label>
            <Label>
              Outer-End
              <Input
                type="range"
                min={0}
                max={10}
                defaultValue={0}
                onChange={(event) => setTr_outer2(event.target.valueAsNumber)}
              />
            </Label>
          </div>
        </Set>
        {/* Bottom Left */}
        <Set>
          <h4>Bottom-Left Eye</h4>
          <div>
            <Label>
              Inner-Start
              <Input
                type="range"
                min={0}
                max={10}
                defaultValue={0}
                onChange={(event) => setBl_inner(event.target.valueAsNumber)}
              />
            </Label>
            <Label>
              Inner-End
              <Input
                type="range"
                min={0}
                max={10}
                defaultValue={0}
                onChange={(event) => setBl_inner2(event.target.valueAsNumber)}
              />
            </Label>
          </div>
          <div>
            <Label>
              Outer-Start
              <Input
                type="range"
                min={0}
                max={10}
                defaultValue={0}
                onChange={(event) => setBl_outer(event.target.valueAsNumber)}
              />
            </Label>
            <Label>
              Outer-End
              <Input
                type="range"
                min={0}
                max={10}
                defaultValue={0}
                onChange={(event) => setBl_outer2(event.target.valueAsNumber)}
              />
            </Label>
          </div>
        </Set>
      </Section>
    </Wrapper>
  );
};

/* Styled Components */
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.4em;
`;

const Set = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3em;

  > div {
    width: 100%;
    display: flex;
    gap: 0.4em;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.4em;
  width: 100%;
`;

export default EyeAdvSetting;
