function        minimap(win, tab)
{
    var a;
    var b;
    var x;
    var y;

    a = 0;
    x = 10;
    y = 10;
    while (a < tab.length)
    {
        x = 10;
        b = 0;
        while (b < tab[a].length)
        {
            if (tab[a][b] == 0)
                big_pixel(win, x, y, "blue");
            if (tab[a][b] == 1)
                big_pixel(win, x, y, "green");
            x = x + 10;
            b++;
        }
        y = y + 10;
        a++;
    }
    big_pixel(win, 50, 30, "red");
}

function        big_pixel(win, x, y, color)
{
    var x2;
    var y2;

    x2 = 0;
    y2 = 0;;
    while (y2 < 10)
    {
        x2 = 0;
        while (x2 < 10)
        {
            mlj_pixel_put(win, x + x2, y + y2, color);
            x2++;
        }
        y2++;
    }
}
