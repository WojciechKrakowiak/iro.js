import { h } from 'preact';
import {
  resolveSvgUrl,
  getSvgArcPath,
  translateWheelAngle,
  getWheelDimensions,
  getWheelHandlePosition,
  getWheelValueFromInput,
  getHandleAtPoint,
  getTriangleDimensions,
  getTriangleHandlePosition,
  IroColor,
  getTriangleValueFromInput,
  getBoxGradients, getTriangleGradients
} from '../../iro-core';


import { IroComponentWrapper } from './ComponentWrapper';
import { IroHandle } from './Handle';
import {IroComponentProps, IroInputType} from "./ComponentTypes";

interface IroTriangleProps extends IroComponentProps {
  colors: IroColor[];
  rotation?: number;
}

export function IroTriangle(props: IroTriangleProps) {

  const { width, radius, trianglePoints, cx, cy, borderWidth } = getTriangleDimensions(props);
  const { colors } = props;

  const colorPicker = props.parent;
  const activeColor = props.color;
  const gradients = getTriangleGradients(props, activeColor);
  const handlePositions = colors.map(color => getTriangleHandlePosition(props, color));
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
        activeColor.hsv = getTriangleValueFromInput(props, x, y);
        props.onInput(inputType, props.id);
      }
    }
    // move is fired when the user has started dragging
    else if (inputType === IroInputType.Move) {
      colorPicker.inputActive = true;
      activeColor.hsv = getTriangleValueFromInput(props, x, y);
    }
    // let the color picker fire input:start, input:move or input:end events
    props.onInput(inputType, props.id);
  }

  return (
    <IroComponentWrapper {...props} onInput={ handleInput }>
      {(uid, rootProps, rootStyles) => (
        <div
          { ...rootProps }
          className="IroWheel"
          width={ width }
          height={ width }
          style={{ ...rootStyles, position: "relative", borderRadius: "50%", transform: `rotate(${props.rotation}deg)`, transformOrigin: `${props.width/2}px ${(props.width * Math.sqrt(3)/3) * 1}px` }}
        >
          <svg
              width={ width }
              height={ width }>
          <defs>
            <linearGradient id={ 's' + uid } x1="0%" y1="86%" x2="0%" y2="0%" gradientTransform="rotate(0)">
              { gradients[0].map(([ offset, color ]) => (
                  <stop offset={`${ offset }%`} stop-color={ color } />
              ))}
            </linearGradient>
            <linearGradient id={ 'l' + uid } x1="0%" y1="45%" x2="0%" y2="130%" gradientTransform="rotate(-60)">
              { gradients[1].map(([ offset, color ]) => (
                  <stop offset={`${ offset }%`} stop-color={ color } />
              ))}
            </linearGradient>
            <pattern id={ 'f' + uid } width="100%" height="100%">

              <rect x="0" y="0" width="100%" height="100%" fill={`url(${resolveSvgUrl( '#s' + uid )})`}></rect>
              <rect x="0" y="0" width="100%" height="100%" fill={`url(${resolveSvgUrl( '#l' + uid )})`}></rect>
            </pattern>
          </defs>

           <polygon points={trianglePointsString}
                    fill={ `url(${resolveSvgUrl('#f' + uid )})` } stroke-width={ props.borderWidth }
                    stroke={ props.borderColor } />

          </svg>
          <IroHandle
              isActive={ true }
              index={ activeColor.index }
              fill={ activeColor.hslString }
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