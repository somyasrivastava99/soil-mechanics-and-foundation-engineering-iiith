	function start(){
        document.getElementById("startb").style.display = "block";
        document.getElementById("stopb").style.display = "none";

    }

    //ANIMATION (SLIDESHOW)
    var i = 0, imgsrc = new Array(), preload = new Array();

    // IMAGES FOR SLIDESHOW
    imgsrc[0]="animation/1.png";
    imgsrc[1]="animation/2.png";
    imgsrc[2]="animation/3.png";
    imgsrc[3]="animation/4.png";
    imgsrc[4]="animation/5.png";
    imgsrc[5]="animation/6.png";
    imgsrc[6]="animation/7.png";
    imgsrc[7]="animation/8.png";
    imgsrc[8]="animation/9.png";
    imgsrc[9]="animation/10.png";
    imgsrc[10]="animation/11.png";
    imgsrc[11]="animation/12.png";
    imgsrc[12]="animation/13.png";
    imgsrc[13]="animation/14.png";
    imgsrc[14]="animation/15.png";
    imgsrc[15]="animation/16.png";
    imgsrc[16]="animation/17.png";
    imgsrc[17]="animation/18.png";
    imgsrc[18]="animation/19.png";
    imgsrc[19]="animation/20.png";
    imgsrc[20]="animation/21.png";
    imgsrc[21]="animation/22.png";
    imgsrc[22]="animation/23.png";
    imgsrc[23]="animation/24.png";
    imgsrc[24]="animation/25.png";
    imgsrc[25]="animation/26.png";
    imgsrc[26]="animation/27.png";
    imgsrc[27]="animation/28.png";
    imgsrc[28]="animation/29.png";
    imgsrc[29]="animation/30.png";
    imgsrc[30]="animation/31.png";
    imgsrc[31]="animation/32.png";
    imgsrc[32]="animation/33.png";
    imgsrc[33]="animation/34.png";
    imgsrc[34]="animation/35.png";
    imgsrc[35]="animation/36.png";
    imgsrc[36]="animation/37.png";
    imgsrc[37]="animation/38.png";
    imgsrc[38]="animation/39.png";
    imgsrc[39]="animation/40.png";
    imgsrc[40]="animation/41.png";
    imgsrc[41]="animation/42.png";
    imgsrc[42]="animation/43.png";
    imgsrc[43]="animation/44.png";
    imgsrc[44]="animation/45.png";
    imgsrc[45]="animation/46.png";
    imgsrc[46]="animation/47.png";
    imgsrc[47]="animation/48.png";
    imgsrc[48]="animation/49.png";
    imgsrc[49]="animation/50.png";
    imgsrc[50]="animation/51.png";
    imgsrc[51]="animation/52.png";
    imgsrc[52]="animation/53.png";
    imgsrc[53]="animation/54.png";
    imgsrc[54]="animation/55.png";
    imgsrc[55]="animation/56.png";
    imgsrc[56]="animation/57.png";
    imgsrc[57]="animation/58.png";
    imgsrc[58]="animation/59.png";
    imgsrc[59]="animation/60.png";
    imgsrc[60]="animation/61.png";
    imgsrc[61]="animation/62.png";
    imgsrc[62]="animation/63.png";
    imgsrc[63]="animation/64.png";
    imgsrc[64]="animation/65.png";
    imgsrc[65]="animation/66.png";
    imgsrc[66]="animation/67.png";
    imgsrc[67]="animation/68.png";
    imgsrc[68]="animation/69.png";
    imgsrc[69]="animation/70.png";
    imgsrc[70]="animation/71.png";
    imgsrc[71]="animation/72.png";
    imgsrc[72]="animation/73.png";
    imgsrc[73]="animation/74.png";
    imgsrc[74]="animation/75.png";
    imgsrc[75]="animation/76.png";
    imgsrc[76]="animation/77.png";
    imgsrc[77]="animation/78.png";
    imgsrc[78]="animation/79.png";
    imgsrc[79]="animation/80.png";
    imgsrc[80]="animation/81.png";
    imgsrc[81]="animation/82.png";
    imgsrc[82]="animation/83.png";
    imgsrc[83]="animation/84.png";
    imgsrc[84]="animation/85.png";
    


    for (var j=0;j<imgsrc.length;j++)
    {
        preload[j] = new Image;
        preload[j].src = imgsrc[j];
    }
  
    function mode(param)
    {
        smode=param;
    }

    function startSlideshow()
    {

        

        if(smode==="play")
        {
            document.getElementById("stopb").style.display = "block";
            document.getElementById("startb").style.display = "none";
            
            document.getElementById("stopb").disabled="";
            document.getElementById("startb").disabled="";

            document.getElementById("first").src=imgsrc[i];
            i++;
            setTimeout("startSlideshow()",100);
        }
        else if(smode==="stop")
        {
            document.getElementById("stopb").style.display = "none";
            document.getElementById("startb").style.display = "block";
            
            document.getElementById("stopb").disabled="";
            document.getElementById("startb").disabled="";

            if (i==imgsrc.length)
            {
				document.getElementById("first").src=imgsrc[84];   
				i=0;
            }
            else
            {
				document.getElementById("first").src=imgsrc[0];
				i=0;
            }
        }

        if(i==imgsrc.length)
        {
            smode = "stop";
            
        }
    }