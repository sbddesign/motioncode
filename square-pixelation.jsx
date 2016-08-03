/*******************************************
Square Pixelation
This expression should be applied to the
"Vertical Blocks" property of the mosaic
effect. It will constrain the size so as
to keep the mosaic tiles in a square ratio,
regardless of the size of your composition.
*******************************************/
x=effect("Mosaic")("Horizontal Blocks");
r=thisComp.width/thisComp.height;
x/r;