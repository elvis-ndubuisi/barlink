import React from "react";
import Header, { HeaderBtn } from "./Header";
import Divider from "./Divider";
import SliderGroup from "./SliderGroup";
import Input from "./Input";
import { GoDash, GoPlusSmall } from "react-icons/go";
import QRContext from "../../context/QRContext";

const QRAdvSettings = () => {
  const { state, dispatch } = React.useContext(QRContext);
  const [active, setActive] = React.useState(false);

  function advancedSetting(): void {
    setActive(!active);
  }
  return (
    <section>
      <Header onClick={() => setActive(!active)} style={{ cursor: "pointer" }}>
        <span>Advanced</span>
        {active ? <GoDash size={20} /> : <GoPlusSmall size={20} />}
      </Header>
      <Divider />
      {active && (
        <>
          <section>
            <SliderGroup>
              <p>style</p>
              <select
                value="checked value select"
                onChange={(event) => console.log(event.target.value)}
              >
                <option value="option 1">Option 1</option>
                <option value="option 2" selected>
                  Option 2
                </option>
              </select>
            </SliderGroup>
            <SliderGroup>
              <p>error correction</p>
            </SliderGroup>
            <SliderGroup>
              <label htmlFor="">enable CORS</label>
              <Input
                type="checkbox"
                checked={true}
                onChange={(event) => console.log(event.target.value)}
              />
            </SliderGroup>
            <SliderGroup>
              <p>size</p>
              <Input
                type="range"
                defaultValue={state?.size}
                min={100}
                step={5}
                max={250}
                onChange={(event) =>
                  dispatch({
                    type: "MOD_SIZE",
                    payload: { size: event.target.value },
                  })
                }
              />
              <span>{state?.size}</span>
            </SliderGroup>
            <SliderGroup>
              <p>quiet zone</p>
              <Input
                type="range"
                defaultValue={state?.quietZone}
                min={5}
                step={1}
                max={30}
                onChange={(event) =>
                  dispatch({
                    type: "MOD_QUIET_ZONE",
                    payload: { quietZone: event.target.value },
                  })
                }
              />
              <span>{state?.quietZone}</span>
            </SliderGroup>
          </section>
        </>
      )}
      <form></form>
    </section>
  );
};

export default QRAdvSettings;
