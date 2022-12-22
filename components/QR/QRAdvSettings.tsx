import React from "react";
import Header, { HeaderBtn } from "./Header";
import Divider from "./Divider";
import SliderGroup from "./SliderGroup";
import Input, { Select } from "./Input";
import { GoChevronUp, GoChevronDown } from "react-icons/go";
import QRContext from "../../context/QRContext";

const QRAdvSettings = () => {
  const { state, dispatch } = React.useContext(QRContext);
  const [active, setActive] = React.useState(false);

  return (
    <section>
      <Header onClick={() => setActive(!active)} style={{ cursor: "pointer" }}>
        <span>Advanced</span>
        {active ? <GoChevronUp size={20} /> : <GoChevronDown size={20} />}
      </Header>
      <Divider />
      {active && (
        <>
          <section>
            <SliderGroup>
              <p>style</p>
              <Select
                value={state.qrStyle}
                onChange={(event) =>
                  dispatch({
                    type: "MOD_STYLE",
                    payload: { qrStyle: event.target.value },
                  })
                }
              >
                <option value="squares">Squares</option>
                <option value="dots">Dots</option>
              </Select>
            </SliderGroup>
            <SliderGroup>
              <p>error correction</p>
              <Select
                value={state.ecLevel}
                onChange={(event) =>
                  dispatch({
                    type: "MOD_EC_LEVEL",
                    payload: { ecLevel: event.target.value },
                  })
                }
              >
                <option value="L">L</option>
                <option value="M">M</option>
                <option value="Q">Q</option>
                <option value="H">H</option>
              </Select>
            </SliderGroup>
            <SliderGroup>
              <label htmlFor="">enable CORS</label>
              <Input
                type="checkbox"
                checked={state.enableCORs}
                onChange={(event) =>
                  dispatch({
                    type: "MOD_CORS",
                    payload: { enableCORs: event.target.checked },
                  })
                }
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
