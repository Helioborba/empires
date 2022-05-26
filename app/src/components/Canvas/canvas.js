import { forwardRef } from "react";
const Canvas = forwardRef((props, ref) => (
    <canvas id="canvas" width={props.width} height={props.height} ref={ref} style={{ backgroundColor:'#fff', display:'flex', alignItems:'center', justifyContent:'center'}}></canvas>
));

export default Canvas;