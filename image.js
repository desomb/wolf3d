function        image2(win, struc_img, width, heigth)
{
    var img;
    var a;

    a = 0;
    img = mlj_new_image(win, struc_img.x, struc_img.y);
    while (a < 4 * struc_img.x * struc_img.y)
    {
        img.data[a] = 0;
        img.data[a + 1] = 255;
        img.data[a + 2] = 0;
        img.data[a + 3] = 255;
        a = a + 4;
    }
    mlj_put_image_to_window(win, img, width, heigth);
}

function        image(win, struc_img, width, heigth)
{
    var img;
    var a;
    var i;

    i = 0;
    a = 0;
    img = mlj_new_image(win, struc_img.x, struc_img.y);
    while (a < 4 * struc_img.x * struc_img.y)
    {
        img.data[a] = 100;
        img.data[a + 1] = 200;
        img.data[a + 2] = 255;
        img.data[a + 3] = 255;
        a = a + 4;
    }
   mlj_put_image_to_window(win, img, width, heigth);
}
