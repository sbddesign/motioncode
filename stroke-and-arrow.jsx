/*******************************************
Stroke and Arrow
Instructions:
Create a stroked path ("Shape 1").
Create an arrow on another shape layer.
Copy and paste the path of "Shape 1" into
the position property of  the arrow.
Apply a trim paths to "Shape 1", trim the
End property to yor liking, and apply the
following code the the "offset" property.
The stroke should follow the arrow.
*******************************************/

var	offset = content("Shape 1").content("Trim Paths 1").offset,
	end = offset = content("Shape 1").content("Trim Paths 1").end,
	arrow = thisComp.layer("Arrow 2"),
	arrow_pos =  arrow.transform.position,
	arrow_total = arrow_pos.numKeys,
	arrow_start_time = timeToFrames(t = arrow_pos.key(1).time + thisComp.displayStartTime, fps = 1.0 / thisComp.frameDuration, isDuration = false),
	arrow_end_time = timeToFrames(t = arrow_pos.key(arrow_total).time + thisComp.displayStartTime, fps = 1.0 / thisComp.frameDuration, isDuration = false),
	arrow_total_time = arrow_end_time - arrow_start_time,
	current_time = timeToFrames(t = time + thisComp.displayStartTime, fps = 1.0 / thisComp.frameDuration, isDuration = false);

if(current_time<arrow_total_time) {
	var elapsed = (current_time/arrow_total_time)*100;
	if(elapsed>end) {
		offset = 360*((elapsed-end)/100);
	} else {
		offset=0;
	}
} else {
	offset=360-(360*(end/100));
}
offset;