import { h } from 'preact';
import {
  getSvgArcPath,
  translateWheelAngle,
  getHandleAtPoint,
  IroColor,
  getHueRingDimensions, getHueRingHandlePosition, getHueRingValueFromInput, translateHueRingAngle
} from '../../iro-core';


import { IroComponentWrapper} from './ComponentWrapper';
import { IroHandle } from './Handle';
import {IroComponentProps, IroInputType} from "./ComponentTypes";

const HUE_STEPS = Array.apply(null, {length: 360}).map((_, index) => index);
const HUE_GRADIENT_CLOCKWISE = 'conic-gradient(red, yellow, lime, aqua, blue, magenta, red)';
const HUE_GRADIENT_ANTICLOCKWISE = 'conic-gradient(red, magenta, blue, aqua, lime, yellow, red)';

interface IroHueRingProps extends IroComponentProps {
  colors: IroColor[];
  ringWidth: number;
}

export function IroHueRing(props: IroHueRingProps) {

  const { width, radius, cx, cy, ringWidth, borderWidth } = getHueRingDimensions(props);
  const { colors } = props;

  const colorPicker = props.parent;
  const activeColor = props.color;
  const handlePositions = colors.map(color => getHueRingHandlePosition(props, color));
  console.log(handlePositions[activeColor.index])

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
        activeColor.hsv = getHueRingValueFromInput(props, x, y);
        props.onInput(inputType, props.id);
      }
    }
    // move is fired when the user has started dragging
    else if (inputType === IroInputType.Move) {
      colorPicker.inputActive = true;
      activeColor.hsv = getHueRingValueFromInput(props, x, y);
    }
    // let the color picker fire input:start, input:move or input:end events
    props.onInput(inputType, props.id);
  }

  return (
    <IroComponentWrapper {...props} onInput={ handleInput }>
      {(uid, rootProps, rootStyles) => (
        <div
          { ...rootProps }
          className="IroHueRing"
          width={ width }
          height={ width }
          style={{...rootStyles, position: "relative"}}
        >
          <svg
              className="IroHueRingSvg"
              width={ width }
              height={ width }
              style={ rootStyles }>

         <g className="IroHueRingGroup" stroke-width={ ringWidth } fill="none">
           { HUE_STEPS.map(angle => (
             <path
               key={ angle }
               d={ getSvgArcPath(cx, cy, radius - ringWidth/2, angle, angle + 1.5) }
               stroke={ `hsl(${translateHueRingAngle(props, angle)}, 100%, 50%)` }
             />
           ))}
         </g>

         <circle
           className="IroHueRingBorder"
           cx={ cx }
           cy={ cy }
           r={ radius }
           fill="none"
           stroke={ props.borderColor }
           stroke-width={ borderWidth }
         />

          <circle
              className="IroHueRingBorder"
              cx={ cx }
              cy={ cy }
              r={ radius - ringWidth }
              fill="none"
              stroke={ props.borderColor }
              stroke-width={ borderWidth }
          />
          </svg>

         <IroHandle
            isActive={ true }
            index={ activeColor.index }
            fill={ `hsl(${activeColor.hsl.h}, 100%, 50%)` }
            r={ props.activeHandleRadius || props.handleRadius }
            url={ props.handleSvg }
            props={ props.handleProps }
            x={ handlePositions[activeColor.index].x }
            y={ handlePositions[activeColor.index].y }
          />
       </div>
      )}
    </IroComponentWrapper>
  );
}