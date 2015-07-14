function        calcs(win, tab, obj, x)
{
    var y1;
    var x2;
    var y2;
    var xmap;
    var ymap;
    var k;

    while (x <= 1000)
    {
        k = 0.0;
        y1 = ((1000 / 2) - x) / 1000;
        x2 = (0.5 * Math.cos(obj.angle)) - (y1 * Math.sin(obj.angle));
        y2 = (0.5 * Math.sin(obj.angle)) + (y1 * Math.cos(obj.angle));
        xmap = (obj.xpos + (k * x2)) | 0;
        ymap = (obj.ypos + (k * y2)) | 0;
        while (tab[(ymap | 0)][(xmap | 0)] != 1)
        {
            xmap = (obj.xpos + (k * x2));
            ymap = (obj.ypos + (k * y2));
            k = k + 0.01;
        }
        aff_wall(win, k, x);
	x++;
    }
}


function        aff_wall(win, k, x)
{
    var a;
    var b;
    var size;

    size = (1000 / (2 * k));
    b = 500;
    a = 0;
    while (a < size)
    {
        mlj_pixel_put(win, x, b, "red");
        a++;
        b++;
    }
    b = 500;
    a = 0;
    while (a < size)
    {
        mlj_pixel_put(win, x, b, "red");
        a++;
        b--;
    }
}
