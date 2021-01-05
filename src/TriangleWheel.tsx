import { h } from 'preact';
import {
  resolveSvgUrl,
  getSvgArcPath,
  translateWheelAngle,
  getWheelDimensions,
  getWheelHandlePosition,
  getWheelValueFromInput,
  getHandleAtPoint,
  getTriangleWheelDimensions,
  getTriangleWheelHandlePosition,
  IroColor,
  getTriangleWheelValueFromInput,
  getBoxGradients, getTriangleGradients, getHueRingDimensions
} from '../../iro-core';


import { IroHandle } from './Handle';
import {IroHueRing} from "./HueRing";
import {IroTriangle} from "./Triangle";
import {IroComponentProps, IroInputType} from "./ComponentTypes";

const HUE_STEPS = Array.apply(null, {length: 360}).map((_, index) => index);

interface IroTriangleWheelProps extends IroComponentProps {
  colors: IroColor[];
  ringWidth: number;
}

export function IroTriangleWheel(props: IroTriangleWheelProps) {

  const { trianglePoints, cx, cy } = getTriangleWheelDimensions(props);
  const { colors, borderWidth } = props;

  const colorPicker = props.parent;
  const activeColor = props.color;
  const hsv = activeColor.hsv;
  const gradients = getTriangleGradients(props, activeColor);
  const handlePositions = colors.map(color => getTriangleWheelHandlePosition(props, color));
  const trianglePointsString = `
           ${trianglePoints[0].x} ${trianglePoints[0].y},
           ${trianglePoints[1].x} ${trianglePoints[1].y},
           ${trianglePoints[2].x} ${trianglePoints[2].y}
         `

  function handleInput(x: number, y: number, inputType: IroInputType) {
    if (inputType === IroInputType.Start) {
      // getHandleAtPoint() returns the index for the handle if the point 'hits' it, or null otherwise
      const activeHandle = getHandleAtPoint(props, x, y, handlePositions);
      // If the input hit a handle, set it as the active handle, but don't update the color
      if (activeHandle !== null) {
        colorPicker.setActiveColor(activeHandle);
      }
      // If the input didn't hit a handle, set the currently active handle to that position
      else {
        colorPicker.inputActive = true;
        activeColor.hsv = getTriangleWheelValueFromInput(props, x, y);
        props.onInput(inputType, props.id);
      }
    }
    // move is fired when the user has started dragging
    else if (inputType === IroInputType.Move) {
      colorPicker.inputActive = true;
      activeColor.hsv = getTriangleWheelValueFromInput(props, x, y);
    }
    // let the color picker fire input:start, input:move or input:end events
    props.onInput(inputType, props.id);
  }


  const { width, ringWidth } = getHueRingDimensions(props);
  const dWidth = 2 * ringWidth + 4 * borderWidth
  return (
   <div style={{ position: "relative", display: "inline-block" }}>
     <IroHueRing {...props} />
     <div style={{ position: "absolute",
       left: dWidth/2 + (width - dWidth - (width - dWidth)* 1.5 / Math.sqrt(3))/2,
       top: dWidth/2,
       right: dWidth/2,
       bottom: dWidth/2,
       borderRadius: "50%",
     }}>
      <IroTriangle {...props} width={(width - dWidth)* 1.5 / Math.sqrt(3)} rotation={180 + hsv.h} />
     </div>
   </div>
  );
}