function setup() 
{
  createCanvas(4000,4000);
  noLoop();
}

function draw() 
{
  translate(-1000,3000);
  Data_of_Path ={  "Survey_Data" :
  [
    {
      "Division": 1,
      "Size_of_Army": 340000, 
      "Longitude": 24, 
      "Latitude": 54.9,
      "Direction":"A"
    },
    {
      "Division": 1,
      "Size_of_Army": 340000, 
      "Longitude": 24.5, 
      "Latitude": 55,
      "Direction":"A"
    },
    {
      "Division": 1,
      "Size_of_Army": 340000, 
      "Longitude": 25.5, 
      "Latitude": 54.5,
      "Direction":"A"
    },
    {
      "Division": 1,
      "Size_of_Army": 320000, 
      "Longitude": 26, 
      "Latitude": 54.7,
      "Direction":"A"
    },
    {
      "Division": 1,
      "Size_of_Army": 300000, 
      "Longitude": 27, 
      "Latitude": 54.8,
      "Direction":"A"
    },
    {
      "Division": 1,
      "Size_of_Army": 280000, 
      "Longitude": 28, 
      "Latitude": 54.9,
      "Direction":"A"
    },
    {
      "Division": 1,
      "Size_of_Army": 240000, 
      "Longitude": 28.5, 
      "Latitude": 55,
      "Direction":"A"
    },
    {
      "Division": 1,
      "Size_of_Army": 210000, 
      "Longitude": 29, 
      "Latitude": 55.1,
      "Direction":"A"
    },
    {
      "Division": 1,
      "Size_of_Army": 180000, 
      "Longitude": 30, 
      "Latitude": 55.2,
      "Direction":"A"
    },
    {
      "Division": 1,
      "Size_of_Army": 175000, 
      "Longitude": 30.3, 
      "Latitude": 55.3,
      "Direction":"A"
    },
    {
      "Division": 1,
      "Size_of_Army": 145000, 
      "Longitude": 32, 
      "Latitude": 54.8,
      "Direction":"A"
    },
    {
      "Division": 1,
      "Size_of_Army": 140000, 
      "Longitude": 33.2, 
      "Latitude": 54.9,
      "Direction":"A"
    },
    {
      "Division": 1,
      "Size_of_Army": 127100, 
      "Longitude": 34.4, 
      "Latitude": 55.5,
      "Direction":"A"
    },
    {
      "Division": 1,
      "Size_of_Army": 100000, 
      "Longitude": 35.5, 
      "Latitude": 55.4,
      "Direction":"A"
    },
    {
      "Division": 1,
      "Size_of_Army": 100000, 
      "Longitude": 36, 
      "Latitude": 55.5,
      "Direction":"A"
    },
    {
      "Division": 1,
      "Size_of_Army": 100000, 
      "Longitude": 37.6, 
      "Latitude": 55.8,
      "Direction":"R"
    },
    {
      "Division": 1,
      "Size_of_Army": 98000, 
      "Longitude": 37.5, 
      "Latitude": 55.7,
      "Direction":"R"
    },
    {
      "Division": 1,
      "Size_of_Army": 97000, 
      "Longitude": 37, 
      "Latitude": 55,
      "Direction":"R"
    },
    {
      "Division": 1,
      "Size_of_Army": 96000, 
      "Longitude": 36.8, 
      "Latitude": 55,
      "Direction":"R"
    },
    {
      "Division": 1,
      "Size_of_Army": 87000, 
      "Longitude": 35.4, 
      "Latitude": 55.3,
      "Direction":"R"
    },
    {
      "Division": 1,
      "Size_of_Army": 55000, 
      "Longitude": 34.3, 
      "Latitude": 55.2,
      "Direction":"R"
    },
    {
      "Division": 1,
      "Size_of_Army": 37000, 
      "Longitude": 33.3, 
      "Latitude": 54.9,
      "Direction":"R"
    },
    {
      "Division": 1,
      "Size_of_Army": 24000, 
      "Longitude": 32, 
      "Latitude": 54.6,
      "Direction":"R"
    },
    {
      "Division": 1,
      "Size_of_Army": 20000, 
      "Longitude": 30.4, 
      "Latitude": 54.4,
      "Direction":"R"
    },
    {
      "Division": 1,
      "Size_of_Army": 20000, 
      "Longitude": 29.2, 
      "Latitude": 54.4,
      "Direction":"R"
    },
    {
      "Division": 1,
      "Size_of_Army": 20000, 
      "Longitude": 28.5, 
      "Latitude": 54.3,
      "Direction":"R"
    },
    {
      "Division": 1,
      "Size_of_Army": 20000, 
      "Longitude": 28.3, 
      "Latitude": 54.4,
      "Direction":"R"
    },
    {
      "Division": 2,
      "Size_of_Army": 60000, 
      "Longitude": 24, 
      "Latitude": 55.1,
      "Direction":"A"
    },
    {
      "Division": 2,
      "Size_of_Army": 60000, 
      "Longitude": 24.5, 
      "Latitude": 55.2,
      "Direction":"A"
    },
    {
      "Division": 2,
      "Size_of_Army": 60000, 
      "Longitude": 25.5, 
      "Latitude": 54.7,
      "Direction":"A"
    },
    {
      "Division": 2,
      "Size_of_Army": 40000, 
      "Longitude": 26.6, 
      "Latitude": 55.7,
      "Direction":"A"
    },
    {
      "Division": 2,
      "Size_of_Army": 33000, 
      "Longitude": 27.4, 
      "Latitude": 55.6,
      "Direction":"A"
    },
    {
      "Division": 2,
      "Size_of_Army": 30000, 
      "Longitude": 28.7, 
      "Latitude": 55.5,
      "Direction":"R"
    },
    {
      "Division": 2,
      "Size_of_Army": 30000, 
      "Longitude": 29.2, 
      "Latitude": 54.3,
      "Direction":"R"
    },
    {
      "Division": 2,
      "Size_of_Army": 30000, 
      "Longitude": 28.5, 
      "Latitude": 54.2,
      "Direction":"R"
    },
    {
      "Division": 2,
      "Size_of_Army": 28000, 
      "Longitude": 28.3, 
      "Latitude": 54.3,
      "Direction":"R"
    },
    {
      "Division": 2,
      "Size_of_Army": 20000, 
      "Longitude": 27.5, 
      "Latitude": 54.5,
      "Direction":"R"
    },
    {
      "Division": 2,
      "Size_of_Army": 12000, 
      "Longitude": 26.8, 
      "Latitude": 54.3,
      "Direction":"R"
    },
    {
      "Division": 2,
      "Size_of_Army": 14000, 
      "Longitude": 26.4, 
      "Latitude": 54.4,
      "Direction":"R"
    },
    {
      "Division": 2,
      "Size_of_Army": 8000, 
      "Longitude": 24.6, 
      "Latitude": 54.5,
      "Direction":"R"
    },
    {
      "Division": 2,
      "Size_of_Army": 4000, 
      "Longitude": 24.4, 
      "Latitude": 54.4,
      "Direction":"R"
    },
    {
      "Division": 2,
      "Size_of_Army": 4000, 
      "Longitude": 24.2, 
      "Latitude": 54.4,
      "Direction":"R"
    },
    {
      "Division": 2,
      "Size_of_Army": 4000, 
      "Longitude": 24.1, 
      "Latitude": 54.3,
      "Direction":"R"
    },
    {
      "Division": 3,
      "Size_of_Army": 22000, 
      "Longitude": 24, 
      "Latitude": 55.2,
      "Direction":"A"
    },
    {
      "Division": 3,
      "Size_of_Army": 22000, 
      "Longitude": 24.5, 
      "Latitude": 55.3,
      "Direction":"A"
    },
    {
      "Division": 3,
      "Size_of_Army": 6000, 
      "Longitude": 24.6, 
      "Latitude": 55.8,
      "Direction":"R"
    },
    {
      "Division": 3,
      "Size_of_Army": 6000, 
      "Longitude": 24.2, 
      "Latitude": 54.4,
      "Direction":"R"
    },
    {
      "Division": 3,
      "Size_of_Army": 6000, 
      "Longitude": 24.1, 
      "Latitude": 54.3,
      "Direction":"R"
    }
    ],
    Cities:[
    {
      "Longitude": 24, 
      "Latitude": 55,
      "Name":"Kowno"
    },
    {
      "Longitude": 25.3, 
      "Latitude": 54.7,
      "Name":"Wilna"
    },
    {
      "Longitude": 26.4, 
      "Latitude": 54.4,
      "Name":"Smorgoni"
    },
    {
      "Longitude": 26.8, 
      "Latitude": 54.3,
      "Name":"Molodexno"
    },
    {
      "Longitude": 27.7, 
      "Latitude": 55.2,
      "Name":"Gloubokoe"
    },
    {
      "Longitude": 27.6, 
      "Latitude": 53.9,
      "Name":"Minsk"
    },
    {
      "Longitude": 28.5, 
      "Latitude": 54.3,
      "Name":"Studienska"
    },
    {
      "Longitude": 28.7, 
      "Latitude": 55.5,
      "Name":"Polotzk"
    },
    {
      "Longitude": 29.2, 
      "Latitude": 54.4,
      "Name":"Bobr"
    },
    {
      "Longitude": 30.2, 
      "Latitude": 55.3,
      "Name":"Witebsk"
    },
    {
      "Longitude": 30.4, 
      "Latitude": 54.5,
      "Name":"Orscha"
    },
    {
      "Longitude": 30.4, 
      "Latitude": 53.9,
      "Name":"Mohilow"
    },
    {
      "Longitude": 32, 
      "Latitude": 54.8,
      "Name":"Smolensk"
    },
    {
      "Longitude": 33.2, 
      "Latitude": 54.9,
      "Name":"Dorogobouge"
    },
    {
      "Longitude": 34.3, 
      "Latitude": 55.2,
      "Name":"Wixma"
    },
    {
      "Longitude": 34.4, 
      "Latitude": 55.5,
      "Name":"Chjat"
    },
    {
      "Longitude": 36, 
      "Latitude": 55.5,
      "Name":"Mojaisk"
    },
    {
      "Longitude": 37.6, 
      "Latitude": 55.8,
      "Name":"Moscou"
    },
    {
      "Longitude": 36.6, 
      "Latitude": 55.3,
      "Name":"Tarantino"
    },
    {
      "Longitude": 36.5, 
      "Latitude": 55,
      "Name":"Malo-jarosewli"
    }
  ],
  Temperature:
  [
    {
      "Temp":0,
      "Longitude":37.6
    },
    {
      "Temp":0,
      "Longitude":36
    },
    {
      "Temp":-9,
      "Longitude":33.2
    },
    {
      "Temp":-21,
      "Longitude":32
    },
    {
      "Temp":-11,
      "Longitude":29.2
    },
    {
      "Temp":-20,
      "Longitude":28.5
    },
    {
      "Temp":-24,
      "Longitude":27.2
    },
    {
      "Temp":-30,
      "Longitude":26.7
    },
    {
      "Temp":-26,
      "Longitude":25.3
    }
  ]
}

var i;

for(i=1; i<Data_of_Path.Survey_Data.length; i++)
{
  temp = Data_of_Path.Survey_Data[i].Size_of_Army/18000
  strokeWeight(temp);
  if (Data_of_Path.Survey_Data[i-1].Direction == "A" && Data_of_Path.Survey_Data[i-1].Division == 1)//the forward march for Division 1
  {
    stroke(color('#5d07f2'));  //purple color
  }
  if (Data_of_Path.Survey_Data[i-1].Direction == "R" && Data_of_Path.Survey_Data[i-1].Division == 1)//the retreat march for Division 1
  {
    stroke(color('#f703ff'));             //pink color Color
  }
  if (Data_of_Path.Survey_Data[i-1].Direction == "A" && Data_of_Path.Survey_Data[i-1].Division == 2)//the forward march for Division 2
  {
    stroke(color('#FA9108'));            //mustard color
  }
  if (Data_of_Path.Survey_Data[i-1].Direction == "R" && Data_of_Path.Survey_Data[i-1].Division == 2)//the retreat march for Division 2
  {
    stroke(color('#14fa08'));             //Green Color
  }
  if (Data_of_Path.Survey_Data[i-1].Direction == "A" && Data_of_Path.Survey_Data[i-1].Division == 3)//the forward march for Division 3
  {
    stroke(color('#fffb00'));             //purple Color
  }
  if (Data_of_Path.Survey_Data[i-1].Direction == "R" && Data_of_Path.Survey_Data[i-1].Division == 3)//the retreat march for Division 3
  {
    stroke(color('#4f1c36'));             //maroon color Color
  }           
  if (Data_of_Path.Survey_Data[i].Division == 1) //Division 1 Army
  {
    line((Data_of_Path.Survey_Data[i-1].Longitude*51),-(Data_of_Path.Survey_Data[i-1].Latitude*51),(Data_of_Path.Survey_Data[i].Longitude*51),-(Data_of_Path.Survey_Data[i].Latitude*51));
  }
  if (Data_of_Path.Survey_Data[i].Division == 2 && Data_of_Path.Survey_Data[i-1].Division==2)//Division 2 Army
  {
    line((Data_of_Path.Survey_Data[i-1].Longitude*51),-((Data_of_Path.Survey_Data[i-1].Latitude*51)+3),(Data_of_Path.Survey_Data[i].Longitude*51),-((Data_of_Path.Survey_Data[i].Latitude*51)+3));
  }
  if (Data_of_Path.Survey_Data[i].Division == 3 && Data_of_Path.Survey_Data[i-1].Division==3)//Division 3 Army
  {
    line((Data_of_Path.Survey_Data[i-1].Longitude*51),-(Data_of_Path.Survey_Data[i-1].Latitude*51+3),(Data_of_Path.Survey_Data[i].Longitude*51),-(Data_of_Path.Survey_Data[i].Latitude*51+3));
  }
}

 
for(i=0; i<Data_of_Path.Cities.length; i++)
{
  stroke(255);
  strokeWeight(4);       //Setting size of the dot
  point(Data_of_Path.Cities[i].Longitude*51,-(Data_of_Path.Cities[i].Latitude*51)); //for setting X axis and Y axis points
  strokeWeight(0);
  textSize(13);
  fill(255, 255, 255); // for setting color
  text(Data_of_Path.Cities[i].Name,(Data_of_Path.Cities[i].Longitude*51-10),-((Data_of_Path.Cities[i].Latitude*51)+5));
}  


for(i=1; i<Data_of_Path.Temperature.length; i++)
{
  strokeWeight(3.5);
  stroke(color('#ff0000'));     

  line((Data_of_Path.Temperature[i-1].Longitude*51),-((2700+(5*Data_of_Path.Temperature[i-1].Temp))),(Data_of_Path.Temperature[i].Longitude*51),-((2700+(5*Data_of_Path.Temperature[i].Temp))));
     fill( 255, 255, 255);

}
  var j = Data_of_Path.Temperature.length;
  strokeWeight(1);
  stroke(color('#ffffff'));
  line((Data_of_Path.Temperature[0].Longitude*51)+5,-(2500),(Data_of_Path.Temperature[j-1].Longitude)*51+5,-(2500));
  line((Data_of_Path.Temperature[0].Longitude*51)+5,-((2700)+5*Data_of_Path.Temperature[0].Temp),((Data_of_Path.Temperature[0].Longitude)*51)+5,-((2700)+5*Data_of_Path.Temperature[j-1].Temp-j*(j-1)));
  var j= -40;
  var k= 0;
  var c=" °C";

  for(i=0; i<Data_of_Path.Temperature.length; i++)
  { 
    text(str(j)+c,(Data_of_Path.Temperature[0].Longitude*51)+10,-((2500)+24*i));
    j=j+5;
    for(k=0; k<Data_of_Path.Survey_Data.length; k++)
    {
      if(Data_of_Path.Temperature[i].Longitude == Data_of_Path.Survey_Data[k].Longitude && Data_of_Path.Survey_Data[k].Direction=='A')
      {
        console.log(Data_of_Path.Survey_Data[k].Longitude);
        stroke(color('#ffffff'));
        strokeWeight(0.6);
        line((Data_of_Path.Temperature[i].Longitude*51),-(Data_of_Path.Survey_Data[k].Latitude*51+3),(Data_of_Path.Temperature[i].Longitude*51),-((2700+(5*Data_of_Path.Temperature[i].Temp))));
      }
    }
  }
}