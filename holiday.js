var holidays = {
	"MAJOR_US":
		{
			"static": [
    	{ "date":"1/1", "name":"New Year's Day", "emojis":[ "🥳", "🌱", "🌼" ], "colors":["red","yellow","green"] },
      { "date":"2/2", "name":"Groundhog Day", "emojis":[ "🐿", "🌱", "🍃", "🌞", "❄️️" ], "colors":["#d9bba6","#264459","#c0c0c0"] },
      { "date":"2/14", "name":"Valentine's Day", "emojis":["💘","🌹", "💐", "🌷", "💖", "💞", "💗", "💕","💟","💝","❤️" ], "colors":["red","yellow","green"] },
      { "date":"3/17", "name":"St. Patrick's Day", "emojis":[ "☘️", "🍺", "🍻" ], "colors":["green","yellow","green"] },
      { "date":"4/1", "name":"April Fool's Day", "emojis":[ "🃏", "🙃","🤪","😜","🤣","😂" ], "colors":["red","yellow","green"] },
      { "date":"4/22", "name":"Earth Day", "emojis":[ "🌎", "🌍", "🌏", "🌱", "🌐"], "colors":["green","blue","green"] },
      { "date":"7/4", "name":"Independence Day", "emojis":[ "🎆","🇺🇸","🎇", "🎈", "🎉", "🎊", "🌭", "🍔","🍦" ], "colors":["#AD001E","white","#2578B2"] },
      { "date":"9/11", "name":"Patriot Day", "emojis":[ "🇺🇸", "🎗️" ], "colors":["red","white","blue", "black"] },
      { "date":"10/31", "name":"Halloween", "emojis":[ "🎃", "👻", "🕷", "🕸", "😈", "🌚","🌕", "🍫", "🍬", "🍭","🕸️","🦇","🧛","🧙","🕷️","🤖","💀","☠️","⚰️️","🤡","🕯️"], "colors":["orange","black","green"] },
      { "date":"11/11", "name":"Veterans' Day", "emojis":[ "🇺🇸", "🎗️" ], "colors":["red","white","blue"] },
      { "date":"12/7", "name":"Pearl Harbor Day", "emojis":[ "🇺🇸", "🎗️" ], "colors":["red","white","blue"] },
      { "date":"12/25", "name":"Christmas Day", "emojis":[ "🎅", "🤶", "🦌", "🍪", "🥛","🌟", "⛄", "☃", "🎄", "🎁", "✝", "🛐", "❄", "👼" ], "colors":["red","white","green"] },
      { "date":"12/31", "name":"New Year's Eve", "emojis":[ "🥳", "💃", "🕺", "👯", "🍾", "🥂", "🎆","🕛", "🎇", "🎈", "🎉", "🎊", "🍸", "🌃" ], "colors":["red","yellow","blue"] }
		],
	"dynamic": [
    	{ "date":function(){mlk()}, "name":"MLK Day", "emojis":[ "🤝🏼" ], "colors":["black","white","grey"] },    	
			{ "date":function(){presidents()}, "name":"Presidents' Day", "emojis":[ "🇺🇸", "🎩" ], "colors":["red","yellow","green"] },			
			{ "date":function(){easter()}, "name":"Easter", "emojis":[ "🥚","🐣","🍫","⛪","🌼","🐰","🙌","✝" ], "colors":["red","yellow","green"] },			
			{ "date":function(){mothers()}, "name":"Mother's Day", "emojis":[ "👩‍👧‍👦", "🤱","☝️","💗","🥇" ], "colors":["red","yellow","green"] },			
			{ "date":function(){memorial()}, "name":"Memorial Day", "emojis":[ "🇺🇸", "🎗️" ], "colors":["red","white","blue"] },			
			{ "date":function(){fathers()}, "name":"Father's Day", "emojis":[ "👨‍👧‍👦", "👨‍💼", "💙","👨","🥇" ], "colors":["blue","slategrey","green"] },			
			{ "date":function(){labor()}, "name":"Labor Day", "emojis":[ "💤", "😴" ], "colors":["blue","yellow","green"] },			
			{ "date":function(){columbus()}, "name":"Columbus Day", "emojis":[ "⛵️" ], "colors":["red","yellow","green"] },			
			{ "date":function(){thanksgiving()}, "name":"Thanksgiving", "emojis":[ "🍂", "🦃", "🌽", "🍽", "🏡", "🍗", "☕", "🍾", "🍽️", "🤤", "👪", "🥣", "🥧", "🙏" ], "colors":["orange","brown","yellow"] }
		],
	}
 }

//helper functions
function monthDayYear(separator) {
	var date = new Date();
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var y = date.getFullYear();
	var mdy = m + separator + d + separator + y;
	return mdy;
}
function monthDay(separator) {
	var date = new Date();
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var y = date.getFullYear();
	var md = m + separator + d;
	return md;
}
//END helpers


//checks today's date to see if it's a static holiday
function staticHolidayCheck() {
	//md holidays
	//holidays on the same day each year
	var md = monthDay("/");
	for (var i = 0; i < holidays.MAJOR_US.static.length; i++) {
		//if today matches a holiday from the json list, return its index
		if (md == holidays.MAJOR_US.static[i].date) {
			return i;
		}
	}
	return -1;
}


//checks today's date (with optional year parameter) and returns the index if it was/is a holiday and -1 if not
function dynamicHolidayCheck(theYear) {
	//mdy holidays
	//holidays on different days each year
	var md = monthDay("/");	
	var year;
	//if they pass in a year, check today's date for that year instead
	if (theYear && Number.isInteger(theYear)) {
		year = theYear;
		//if not, get the current month/day/year
	} else {
		year = new Date().getFullYear().toString();
	}

	var mdy = md + "/" + year;
	
	console.log("checking if today's date is a holiday in " + year);
	console.log(mdy);
	
	switch(mdy) {
		case mlk(year):
			console.log("mlk");
			return 0; /*index of mlk in "dynamic" */
			break;
		case presidents(year):
			console.log("presidents");
			return 1; /*index of presidents in "dynamic" */
			break;
		case easter(year):
			console.log("easter");
			return 2; /*index of easter in "dynamic" */
			break;
		case mothers(year):
			console.log("mothers");
			return 3; /*index of mothers in "dynamic" */
			break;
		case memorial(year):
			console.log("memorial");
			return 4; /*index of memorial in "dynamic" */
			break;
		case fathers(year):
			console.log("fathers");
			return 5; /*index of fathers in "dynamic" */
			break;
		case labor(year):
			console.log("labor");
			return 6; /*index of labor in "dynamic" */
			break;
		case columbus(year):
			console.log("columbus");
			return 7; /*index of columbus in "dynamic" */
			break;
		case thanksgiving(year):
			console.log("thanksgiving");
			return 8; /*index of thanksgiving in "dynamic" */
			break;
		default:
			return -1;
		}
}


//testing it out
//check if today's a holiday and if it is, color the background in its colors and show an emoji
function exampleHolidayCheck(testIndex, staticTest) {
	//check the index of static holidays
	var staticIndex = staticHolidayCheck();
	//check the index of dynamic holidays
	var dynamicIndex = dynamicHolidayCheck();

	
	var year = new Date().getFullYear().toString();
	
	console.log(staticIndex + " " + dynamicIndex);

	//if the static check returned an index, use it to show stuff
	if (staticIndex >= 0) {
		console.log("using returned static index");
		document.getElementById("container").innerHTML =
			'<div class="emoji">' +
			holidays.MAJOR_US.static[staticIndex].name +
			"<br/><span>" +
			holidays.MAJOR_US.static[staticIndex].emojis[0] +
			"</span></div>";
		document.getElementById("container").style.color = holidays.MAJOR_US.static[staticIndex].colors[1];
		document.getElementById("container").style.background = "radial-gradient(" +
			holidays.MAJOR_US.static[staticIndex].colors[0] + ", " + holidays.MAJOR_US.static[staticIndex].colors[1] + ", " + holidays.MAJOR_US.static[staticIndex].colors[2] + ")";
	}

	//if the dynamic check returned an index, use it to show stuff
	if (dynamicIndex >= 0) {
		console.log("using returned dynamic index");

		var theHoliday = holidays.MAJOR_US.dynamic[dynamicIndex].name;

		console.log(theHoliday);
		document.getElementById("container").innerHTML =
			'<div class="emoji">' +
			theHoliday +
			"<br/><span>" +
			holidays.MAJOR_US.dynamic[theHoliday].emojis[0] +
			"</span></div>";
		document.getElementById("container").style.color = holidays.MAJOR_US.dynamic[theHoliday].colors[1];
		document.getElementById("container").style.background = "radial-gradient(" +
			holidays.MAJOR_US.static[dynamicIndex].colors[0] + ", " + holidays.MAJOR_US.static[dynamicIndex].colors[1] + ", " + holidays.MAJOR_US.static[dynamicIndex].colors[2] + ")";
	}

	if (
		staticIndex < 0 &&
		dynamicIndex < 0 &&
		testIndex >= 0 &&
		staticTest == "dynamic"
	) {
		console.log("using test index");
		
		var theHoliday = holidays.MAJOR_US.dynamic[testIndex].name;
		console.log(theHoliday);
		
		document.getElementById("container").innerHTML =
			'<div class="emoji">' +
			theHoliday +
			"<br/><span>" +
			holidays.MAJOR_US.dynamic[testIndex].emojis[0] +
			"</span></div>";
		document.getElementById("container").style.color =
			holidays.MAJOR_US.dynamic[testIndex].colors[1];
		document.getElementById("container").style.background = "radial-gradient(" +
			holidays.MAJOR_US.static[testIndex].colors[0] + ", " + holidays.MAJOR_US.static[testIndex].colors[1] + ", " + holidays.MAJOR_US.static[testIndex].colors[2] + ")";
	} else if (
		staticIndex < 0 &&
		dynamicIndex < 0 &&
		testIndex >= 0 &&
		staticTest == "static"
	) {
		document.getElementById("container").innerHTML =
			'<div class="emoji">' +
			holidays.MAJOR_US.static[testIndex].name +
			"<br/><span>" +
			holidays.MAJOR_US.static[testIndex].emojis[0] +
			"</span></div>";
		document.getElementById("container").style.color = holidays.MAJOR_US.static[testIndex].colors[1];
		document.getElementById("container").style.background = "radial-gradient(" +
			holidays.MAJOR_US.static[testIndex].colors[0] + ", " + holidays.MAJOR_US.static[testIndex].colors[1] + ", " + holidays.MAJOR_US.static[testIndex].colors[2] + ")";
	} else {
		document.getElementById("container").innerHTML = '<div class="emoji">No Holiday Today<br/><span>😢</span></div>';
		document.getElementById("container").style.color = "black";
		document.getElementById("container").style.background = "white";
	}
}

exampleHolidayCheck();

//dynamic holidays
function mlk(theYear){
	var year;
	if (theYear && Number.isInteger(theYear)) {
		year = theYear;
		//if not, get the current month/day/year
	} else {
		year = new Date().getFullYear().toString();
	}
	//3rd Monday
	var d = new Date();
	//set January
	d.setFullYear(year, 0, 1);
	//1st day of January
	var jan1 = d.getDay();
	//sun=0; mon=1; tues=2; wed=3; thurs=4; fri=5; sat=6; sun=7; mon=8.....
	switch(jan1) {
  case 0:
    return "1/16" + "/" + year;
    break;
  case 1:
    return "1/15" + "/" + year;
    break;
  case 2:
    return "1/21" + "/" + year;
    break;
  case 3:
    return "1/20" + "/" + year;
    break;
  case 4:
    return "1/19" + "/" + year;
    break;
  case 5:
    return "1/18" + "/" + year;
    break;
  case 6:
    return "1/17" + "/" + year;
    break;
  default:
    return "invalid year"
	}
}
function presidents(theYear){
	var year;
	if (theYear && Number.isInteger(theYear)) {
		year = theYear;
		//if not, get the current month/day/year
	} else {
		year = new Date().getFullYear().toString();
	}
	//3rd Monday
	var d = new Date();
	//set February
	d.setFullYear(year, 1, 1);
	//1st day of February
	var day1 = d.getDay();
	//sun=0; mon=1; tues=2; wed=3; thurs=4; fri=5; sat=6; sun=7; mon=8.....
	switch(day1) {
  case 0:
    return "2/16" + "/" + year;
    break;
  case 1:
    return "2/15" + "/" + year;
    break;
  case 2:
    return "2/21" + "/" + year;
    break;
  case 3:
    return "2/20" + "/" + year;
    break;
  case 4:
    return "2/19" + "/" + year;
    break;
  case 5:
    return "2/18" + "/" + year;
    break;
  case 6:
    return "2/17" + "/" + year;
    break;
  default:
    return "invalid year"
	}
}
function mothers(theYear){
	var year;
	if (theYear && Number.isInteger(theYear)) {
		year = theYear;
		//if not, get the current month/day/year
	} else {
		year = new Date().getFullYear().toString();
	}
	//2nd Sunday
	var d = new Date();
	//set May
	d.setFullYear(year, 4, 1);
	//1st day of May
	var day1 = d.getDay();
	//sun=0; mon=1; tues=2; wed=3; thurs=4; fri=5; sat=6; sun=7; mon=8.....
	switch(day1) {
  case 0:
    return "5/8" + "/" + year;
    break;
  case 1:
    return "5/14" + "/" + year;
    break;
  case 2:
    return "5/13" + "/" + year;
    break;
  case 3:
    return "5/12" + "/" + year;
    break;
  case 4:
    return "5/11" + "/" + year;
    break;
  case 5:
    return "5/10" + "/" + year;
    break;
  case 6:
    return "5/9" + "/" + year;
    break;
  default:
    return "invalid year"
	}
}
function fathers(theYear){
	var year;
	if (theYear && Number.isInteger(theYear)) {
		year = theYear;
		//if not, get the current month/day/year
	} else {
		year = new Date().getFullYear().toString();
	}
	//3rd Sunday
	var d = new Date();
	//set June
	d.setFullYear(year, 5, 1);
	//1st day of June
	var day1 = d.getDay();
	//sun=0; mon=1; tues=2; wed=3; thurs=4; fri=5; sat=6; sun=7; mon=8.....
	switch(day1) {
  case 0:
    return "2/15" + "/" + year;
    break;
  case 1:
    return "2/21" + "/" + year;
    break;
  case 2:
    return "2/20" + "/" + year;
    break;
  case 3:
    return "2/19" + "/" + year;
    break;
  case 4:
    return "2/18" + "/" + year;
    break;
  case 5:
    return "2/17" + "/" + year;
    break;
  case 6:
    return "2/16" + "/" + year;
    break;
  default:
    return "invalid year"
	}
}
function memorial(theYear){
	var year;
	if (theYear && Number.isInteger(theYear)) {
		year = theYear;
		//if not, get the current month/day/year
	} else {
		year = new Date().getFullYear().toString();
	}
	//last Monday
	var d = new Date();
	//set May
	d.setFullYear(year, 5, 31);
	//last day of May
	var day1 = d.getDay();
	//sun=0; mon=1; tues=2; wed=3; thurs=4; fri=5; sat=6; sun=7; mon=8.....
	//since 1970: May 30 from 1868 to 1970
	if(year>1867 && year<1971){
		return "5/30" + "/" + year;
	}
	switch(day1) {
  case 0:
    return "5/28" + "/" + year;
    break;
  case 1:
    return "5/27" + "/" + year;
    break;
  case 2:
    return "5/26" + "/" + year;
    break;
  case 3:
    return "5/25" + "/" + year;
    break;
  case 4:
    return "5/31" + "/" + year;
    break;
  case 5:
    return "5/30" + "/" + year;
    break;
  case 6:
    return "5/29" + "/" + year;
    break;
  default:
    return "invalid year"
	}
}
function labor(theYear){
	var year;
	if (theYear && Number.isInteger(theYear)) {
		year = theYear;
		//if not, get the current month/day/year
	} else {
		year = new Date().getFullYear().toString();
	}
	//1st Monday
	var d = new Date();
	//set September
	d.setFullYear(year, 8, 1);
	//1st day of June
	var day1 = d.getDay();
	//sun=0; mon=1; tues=2; wed=3; thurs=4; fri=5; sat=6; sun=7; mon=8.....
	//since 1894
	switch(day1) {
  case 0:
    return "9/2" + "/" + year;
    break;
  case 1:
    return "9/1" + "/" + year;
    break;
  case 2:
    return "9/7" + "/" + year;
    break;
  case 3:
    return "9/6" + "/" + year;
    break;
  case 4:
    return "9/5" + "/" + year;
    break;
  case 5:
    return "9/4" + "/" + year;
    break;
  case 6:
    return "9/3" + "/" + year;
    break;
  default:
    return "invalid year"
	}
}
function columbus(theYear){
	var year;
	if (theYear && Number.isInteger(theYear)) {
		year = theYear;
		//if not, get the current month/day/year
	} else {
		year = new Date().getFullYear().toString();
	}
	//2nd Monday
	var d = new Date();
	//set October
	d.setFullYear(year, 9, 1);
	//1st day of June
	var day1 = d.getDay();
	//sun=0; mon=1; tues=2; wed=3; thurs=4; fri=5; sat=6; sun=7; mon=8.....
	//since 1971
	switch(day1) {
  case 0:
    return "10/9" + "/" + year;
    break;
  case 1:
    return "10/8" + "/" + year;
    break;
  case 2:
    return "10/14" + "/" + year;
    break;
  case 3:
    return "10/13" + "/" + year;
    break;
  case 4:
    return "10/12" + "/" + year;
    break;
  case 5:
    return "10/11" + "/" + year;
    break;
  case 6:
    return "10/10" + "/" + year;
    break;
  default:
    return "invalid year"
	}
}
function thanksgiving(theYear){
	var year;
	if (theYear && Number.isInteger(theYear)) {
		year = theYear;
		//if not, get the current month/day/year
	} else {
		year = new Date().getFullYear().toString();
	}
	//4th Thursday
	var d = new Date();
	//November
	d.setFullYear(year, 10, 1);
	//1st day of November
	var nov1 = d.getDay();
	//sun=0; mon=1; tues=2; wed=3; thurs=4; fri=5; sat=6; sun=7; mon=8.....
	switch(nov1) {
  case 0:
    return "11/26" + "/" + year;
    break;
  case 1:
    return "11/25" + "/" + year;
    break;
  case 2:
    return "11/24" + "/" + year;
    break;
  case 3:
    return "11/23" + "/" + year;
    break;
  case 4:
    return "11/22" + "/" + year;
    break;
  case 5:
    return "11/28" + "/" + year;
    break;
  case 6:
    return "11/27" + "/" + year;
    break;
  default:
    return "invalid year"
	}
}
function easter(theYear){
	var year;
	if (theYear && Number.isInteger(theYear)) {
		year = theYear;
		//if not, get the current month/day/year
	} else {
		year = new Date().getFullYear().toString();
	}
	switch(year) {
  case 2000:
    return "4/23" + "/" + year;
    break;
  case 2001:
    return "4/15" + "/" + year;
    break;
  case 2002:
    return "3/31" + "/" + year;
    break;
  case 2003:
    return "4/20" + "/" + year;
    break;
  case 2004:
    return "4/11" + "/" + year;
    break;
  case 2005:
    return "3/27" + "/" + year;
    break;
  case 2006:
    return "4/16" + "/" + year;
    break;
  case 2007:
    return "4/8" + "/" + year;
    break;
  case 2008:
    return "3/23" + "/" + year;
    break;
  case 2009:
    return "4/12" + "/" + year;
    break;
  case 2010:
    return "4/4" + "/" + year;
    break;
  case 2011:
    return "4/24" + "/" + year;
    break;
  case 2012:
    return "4/8" + "/" + year;
    break;
  case 2013:
    return "3/31" + "/" + year;
    break;
  case 2014:
    return "3/20" + "/" + year;
    break;
  case 2015:
    return "3/5" + "/" + year;
    break;
  case 2016:
    return "3/27" + "/" + year;
    break;
  case 2017:
    return "4/16" + "/" + year;
    break;
  case 2018:
    return "4/1" + "/" + year;
    break;
  case 2019:
    return "4/21" + "/" + year;
    break;
  case 2020:
    return "4/12" + "/" + year;
    break;
  case 2021:
    return "4/4" + "/" + year;
    break;
  case 2022:
    return "4/17" + "/" + year;
    break;
  case 2023:
    return "4/9" + "/" + year;
    break;
  case 2024:
    return "3/31" + "/" + year;
    break;
  case 2025:
    return "4/20" + "/" + year;
    break;
  case 2026:
    return "4/5" + "/" + year;
    break;
  case 2027:
    return "3/28" + "/" + year;
    break;
  case 2028:
    return "4/16" + "/" + year;
    break;
  case 2029:
    return "4/1" + "/" + year;
    break;
  case 2030:
    return "4/21" + "/" + year;
    break;
  case 2031:
    return "4/13" + "/" + year;
    break;
  case 2032:
    return "3/28" + "/" + year;
    break;
  case 2033:
    return "4/17" + "/" + year;
    break;
  case 2034:
    return "4/9" + "/" + year;
    break;
  case 2035:
    return "3/25" + "/" + year;
    break;
  case 2036:
    return "4/13" + "/" + year;
    break;
  case 2037:
    return "4/5" + "/" + year;
    break;
  case 2038:
    return "4/25" + "/" + year;
    break;
  case 2039:
    return "4/10" + "/" + year;
    break;
  case 2040:
    return "4/1" + "/" + year;
    break;
	}
	return "no Easter data for that year"
}