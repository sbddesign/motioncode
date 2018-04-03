/***************************
This expression keeps your text anchor point centered vertically as you animate the line spacing (leading) of your text layer.
Instructions
1) Create text layer at 0;00;00;00. This is important! If it's not a 0, keyframing will not work properly.
2) Add an animator.
3) Add a "Slider Control" effect to your layer. Rename it to "Text Vertical Offset".
4) Paste this expression onto your text layer's anchor point transform property.
5) Adjust the "Text Vertical Offset" slider until the anchor point seems to be in the vertical center of your text.
6) Now you can animate the line spacing of the text from the center!
7) Note: if you adjust font size or other properties, you may need to re-adjust the "Text Vertical Offset".
***************************/

a=transform.anchorPoint;
x=a[0];
y= (this.sourceRectAtTime(time).height/2)-effect("Text Vertical Offset")("Slider");
a=[x, y];
a;
