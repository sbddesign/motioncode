/*******************************************
Parent Opacity Switcher
This expression should be applied to the
opacity of a given layer. This allows you
to alternate with the opacity of it's parent
layer. If parent is visbile, this layer is
not visible, and vice versa.
*******************************************/
var t=transform.opacity;
if(thisLayer.hasParent) {
var o=thisLayer.parent.opacity;
if(o>0) t=0;
else t=100;
}
t;