// JavaScript source code
export const drawRect = (detections, ctx) => { 
	detections.forEach(prediction=>{
		//getting predictions 
		const [x,y,width, height] = prediction['bbox']; 
		const text = prediction['class'];

		//make pretty 
		const colour = 'red'
		ctx.font = "23px Arial"
		ctx.strokeStyle = colour;
		ctx.fillstyle = colour;

		//make rectangle and captions
		ctx.beginPath()
		ctx.fillText(text, x, y)
		ctx.rect(x, y, width, height)
		ctx.stroke()

	})

}