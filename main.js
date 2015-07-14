function	main()
{
    var win;
    var tab;
    var obj;
    var x;
    var struc_img;

    obj = {xpos : 5, ypos : 2, angle : 0, k : 0.0};
    struc_img = {x : 1000, y : 500};
    x = 0;
    tab = map();
    mlj_init("wolf3d");
    win = mlj_new_window(1000, 1000);
    image(win, struc_img, 0, 0);
    image2(win, struc_img, 0, 500);
    calcs(win, tab, obj, x);
    minimap(win, tab);
    mlj_key_hook(gere_key, [win, tab, obj, struc_img]);
}

function	map()
{
    var tab;

    tab = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
           [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
           [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
           [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
           [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
           [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
           [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
           [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
    return (tab);
}

function	gere_key(key, params)
{
    var x;

    if (key == keyCode.LEFT)
    {
	x = 0;
	image(params[0], params[3], 0, 0);
	image2(params[0], params[3], 0, 500);
	params[2].angle = params[2].angle + 0.3;
	calcs(params[0], params[1], params[2], x);
	minimap(params[0], params[1]);
    }
    if (key == keyCode.ESC)
	mlj_clear_window(params[0]);
    if (key == keyCode.RIGHT)
    {
	x = 0;
	image(params[0], params[3], 0, 0);
	image2(params[0], params[3], 0, 500);
	params[2].angle = params[2].angle - 0.3;
	calcs(params[0], params[1], params[2], x);
	minimap(params[0], params[1]);
    }
}
