function myClass(name, description, quantity1, price1, quantity2, price2, photolink, comment) {
	this.name = name;
	this.description = description;
	this.quantity1 = quantity1;
	this.price1 = price1;
	this.quantity2 = quantity2;
	this.price2 = price2;
	this.photolink = photolink;
	this.comment = comment;
}

function myChefContentClass(name, description) {
	this.name = name;
	this.description = description;
}

function myChefInfoClass(quantity1, price1, quantity2, price2, photolink, comment) {
	this.quantity1 = quantity1;
	this.price1 = price1;
	this.quantity2 = quantity2;
	this.price2 = price2;
	this.photolink = photolink;
	this.comment = comment;
}

function fillFoodsOffer (myArr, myID) {
	$.each(myArr, function(i, val) {
		var myItem = '<div class="media pt-1">';
		myItem += '<div class="media-body">';
		myItem += '<div class="text-muted small float-right">'+val.quantity1+'&nbsp;'+val.price1+',- Ft</div>';
		myItem += '<h4 class="media-heading clearfix">'+val.name+'</h4>';
		if (val.quantity2 != "" && val.price2 != "") {
			myItem += '<div class="text-muted small float-right">'+val.quantity2+'&nbsp;'+val.price2+',- Ft</div>';
		}
		myItem += '<p class="pt-1 mb-1"><em>'+val.description+'</em></p>';
		if (val.photolink != "") {
			myItem += '<img class="img-fluid rounded mx-auto d-block mt-3" src="'+val.photolink+'" alt="'+val.name+'">';
		}
		myItem += '</div>'; // end media-body div
		myItem += '</div>'; // end media div
	
		$("#"+myID).append(myItem);  
	});
}

function fillDrinksOffer (myArr, myID) {
	$.each(myArr, function(i, val) {
		var myItem = '<div class="media pt-1">';
		myItem += '<div class="media-body">';
		myItem += '<div class="text-muted small float-right">'+val.quantity1+'&nbsp;'+val.price1+',- Ft</div>';
		myItem += '<h5 class="media-heading clearfix">'+val.name+'</h5>';
		if (val.quantity2 != "" && val.price2 != "") {
			myItem += '<div class="text-muted small float-right">'+val.quantity2+'&nbsp;'+val.price2+',- Ft</div>';
		}
		if (val.description != "") {
			myItem += '<p class="pt-1 mb-1"><em>'+val.description+'</em></p>';
		}
		if (val.photolink != "") {
			myItem += '<img class="img-fluid rounded mx-auto d-block mt-3" src="'+val.photolink+'" alt="'+val.name+'">';
		}
		myItem += '</div>'; // end media-body div
		myItem += '</div>'; // end media div
	
		$("#"+myID).append(myItem);  
	});
}

function fillChefOffer (myArr, myID, myInfo) {
	var myItem = '';
	$.each(myArr, function(i, val) {
		myItem += '<p class="pt-1 mb-1"><strong>'+val.name+'</strong>&nbsp;<em>'+val.description+'</em></p>';
	});
	if (myInfo != null) {
		myItem += '<div class="media pt-1">';
		myItem += '<div class="media-body">';
		if (myInfo.photolink != "") {
			myItem += '<img class="img-fluid rounded mx-auto d-block mt-3" src="'+myInfo.photolink+'">';
		}
		if (myInfo.comment != "") {
			myItem += '<p>'+myInfo.comment+'</p>';
		}
		myItem += '<div class="text-muted small float-right">'+myInfo.price1+',- Ft</div>';
		myItem += '<h4 class="media-heading">'+myInfo.quantity1+'</h4>';
		if (myInfo.price2 != "") {
			myItem += '<div class="clearfloat"></div>';
			myItem += '<div class="text-muted small float-right">'+myInfo.price2+',- Ft</div>';
			myItem += '<h4 class="media-heading">'+myInfo.quantity2+'</h4>';
		}
		myItem += '</div>'; // end media-body div
		myItem += '</div>'; // end media div
	}
	$("#"+myID).append(myItem);  
}

$(function(){

	fillFoodsOffer(myStarterArr, "myStarterID-xs");
	fillFoodsOffer(mySoupeArr, "mySoupeID-xs");
	fillFoodsOffer(myMaincourseArr, "myMaincourseID-xs");
	fillFoodsOffer(myVegetarianArr, "myVegetarianID-xs");
	fillFoodsOffer(myDessertArr, "myDessertID-xs");

	fillDrinksOffer(mySoftdrinkArr, "mySoftdrinkID-xs");
	fillDrinksOffer(myAperitiffArr, "myAperitiffID-xs");
	fillDrinksOffer(mySpiritArr, "mySpiritID-xs");
	fillDrinksOffer(myDraftbeerArr, "myDraftbeerID-xs");
	fillDrinksOffer(myBottledbeerArr, "myBottledbeerID-xs");
	fillDrinksOffer(myHandmadebeerArr, "myHandmadebeerID-xs");
	fillDrinksOffer(myCiderbeerArr, "myCiderbeerID-xs");

	fillChefOffer(myHungarianContentArr, "myHungarianID-xs", myHungarianInfo);
	fillChefOffer(mySeasonContentArr, "mySeasonID-xs", mySeasonInfo);


	fillFoodsOffer(myStarterArr, "myStarterID");
	fillFoodsOffer(mySoupeArr, "mySoupeID");
	fillFoodsOffer(myMaincourseArr, "myMaincourseID");
	fillFoodsOffer(myVegetarianArr, "myVegetarianID");
	fillFoodsOffer(myDessertArr, "myDessertID");

	fillDrinksOffer(mySoftdrinkArr, "mySoftdrinkID");
	fillDrinksOffer(myAperitiffArr, "myAperitiffID");
	fillDrinksOffer(mySpiritArr, "mySpiritID");
	fillDrinksOffer(myDraftbeerArr, "myDraftbeerID");
	fillDrinksOffer(myBottledbeerArr, "myBottledbeerID");
	fillDrinksOffer(myHandmadebeerArr, "myHandmadebeerID");
	fillDrinksOffer(myCiderbeerArr, "myCiderbeerID");

	fillChefOffer(myHungarianContentArr, "myHungarianID", myHungarianInfo);
	fillChefOffer(mySeasonContentArr, "mySeasonID", mySeasonInfo);

	
	/* Karácsonyi menük */
/*
	fillChefOffer(myChristmas1ContentArr, "myChristmas1ID", myChristmas1Info);
	fillChefOffer(myChristmas2ContentArr, "myChristmas2ID", myChristmas2Info);
	fillChefOffer(myChristmas3ContentArr, "myChristmas3ID", myChristmas3Info);
	fillChefOffer(myChristmasSaladsArr, "myChristmasSaladsID");
	fillChefOffer(myChristmasHotDishesArr, "myChristmasHotDishesID");
	fillChefOffer(myChristmasDessertsArr, "myChristmasDessertsID", myChristmasBufetInfo);
	fillChefOffer(myChristmasDrink1Arr, "myChristmasDrink1ID", myChristmasDrink1Info);
	fillChefOffer(myChristmasDrink2Arr, "myChristmasDrink2ID", myChristmasDrink2Info);
*/	
	/* Szilveszteri menü */
	
/*	
    fillChefOffer(myNewyearArr, "myNewyearID", myNewyearInfo);
*/
})

var myStarterArr = new Array();
myStarterArr.push(new myClass("Spread duo", "wild mushroom spread and Hungarian paprika-infused ewe cottage cheese spread, served with tomatoes, paprika, onion and toast ", "", "2.100", "", "", "", ""));
myStarterArr.push(new myClass("Goat cheese", "served on a bed of rocket salad sundried tomatoes and leek terrine,", "", "2.100", "", "", "", ""));
myStarterArr.push(new myClass("Smoked trout from Szilvásvárad", "with tomatoes salad", "", "2.760", "", "", "", ""));
myStarterArr.push(new myClass("Duck liver pâté with dried plum", "with toasted brioche", "", "3.200", "", "", "", ""));
myStarterArr.push(new myClass("Sautéed Foie Gras", "on lamb lettuce with grapes toasted hazelnuts and Tokaj wine vinaigrette", "", "3.350", "", "", "", ""));
myStarterArr.push(new myClass("Duck breast salad", "rosé duck breast with fennel-orange salad", "", "2.900", "", "", "", ""));
myStarterArr.push(new myClass("Pork Shank Terrine", "with celery and radish salad, horseradish dressing", "", "2.830", "", "", "", ""));

var mySoupeArr = new Array();
mySoupeArr.push(new myClass("Pea bisque", "with home made ricotta", "", "1.340", "", "", "", ""));
mySoupeArr.push(new myClass("Goulash soup", "", "cup:", "1.550", "cauldron:", "3.070", "", ""));

var myMaincourseArr = new Array();
myMaincourseArr.push(new myClass("Filet of perch", "with a panko crust, on cottage cheese dumplings, and a creamy lemon sauce", "", "4.970", "", "", "", ""));
myMaincourseArr.push(new myClass("Grilled catfish", "served with cottage cheese-sour cream pasta, and “letcho” (Hungarian ratatouille) and bacon", "", "4.410", "", "", "Media/foods/raczharcsa.jpg", ""));
myMaincourseArr.push(new myClass("Paprika chicken", "with homemade spaetzle (little dumplings)", "", "3.550", "", "", "Media/foods/paprikascsirke.jpg", ""));
myMaincourseArr.push(new myClass("Chicken breast", "stuffed with goat cheese and roasted peppers, wrapped in bacon, with a creamy basil sauce and vegetables tagliatelle", "", "3.660", "", "", "", ""));
myMaincourseArr.push(new myClass("Roast Duck", "served with bacon-infused Brussels sprouts, new potatoes", "", "4.800", "", "", "Media/foods/kacsasult.jpg", ""));
myMaincourseArr.push(new myClass("Pork tenderloin tournedos", "wrapped in bacon with “Brasso Potatoes” (squares of potatoes sautéed with onion, paprika, bacon & garlic)", "", "4.800", "", "", "Media/foods/brassoi.jpg", ""));
myMaincourseArr.push(new myClass("Paprika veal medallions", "with “dödölle” (Hungarian potato dumplings), wild mushrooms and dill-paprika sauce", "", "5.830", "", "", "", ""));
myMaincourseArr.push(new myClass("Filet mignon “green peppercorn”", "with potatoes, haricots- verts and grilled tomato", "", "6.700", "", "", "", ""));
myMaincourseArr.push(new myClass("Beef stew braised in red vine", "with bread dumplings", "", "4.520", "", "", "", ""));
myMaincourseArr.push(new myClass("Roast lamb shank", "with braised cabbage and roast potatoes", "", "5.830", "", "", "", ""));

var myDessertArr = new Array();
myDessertArr.push(new myClass("Poppy seed cake", "with sour cherry coulis", "", "1.520", "", "", "", ""));
myDessertArr.push(new myClass("Crêpe", "stuffed with cottage cheese, with an apricot sauce", "", "1.300", "", "", "Media/foods/almaspalacsinta.jpg", ""));
myDessertArr.push(new myClass("Chocolate “Ganache”", "warm, freshly-baked chocolate soufflé cake with vanilla ice-cream", "", "1.660", "", "", "Media/foods/ganache.jpg", ""));

var myVegetarianArr = new Array();
myVegetarianArr.push(new myClass("Stuffed Peppers", "with chickpeas, mushrooms and bulgur, with a tomato sauce", "", "3.000", "", "", "", ""));
myVegetarianArr.push(new myClass("Tagliatelle", "with goat cheese and creamy green asparagus", "", "3.000", "", "", "", ""));

var mySoftdrinkArr = new Array();
mySoftdrinkArr.push(new myClass("Szentkirályi mineral water 0,33", "", "", "490", "", "", "", ""));
mySoftdrinkArr.push(new myClass("Szentkirályi mineral water 0,75", "", "", "890", "", "", "", ""));
mySoftdrinkArr.push(new myClass("Pepsi-Cola/Light/Gyömbér/Tonic/7UP 0,25", "", "", "490", "", "", "", ""));
mySoftdrinkArr.push(new myClass("Juice 0,30", "", "", "590", "", "", "", ""));
mySoftdrinkArr.push(new myClass("Limonade 0,5", "", "", "850", "", "", "", ""));
mySoftdrinkArr.push(new myClass("Limonade flavoured 0,5", "", "", "950", "", "", "", ""));
mySoftdrinkArr.push(new myClass("Tea selection 0,4", "", "", "690", "", "", "", ""));
mySoftdrinkArr.push(new myClass("Eszpresszó/Americano", "", "", "490", "", "", "", ""));
mySoftdrinkArr.push(new myClass("Cappuccino", "", "", "650", "", "", "", ""));
mySoftdrinkArr.push(new myClass("Latte Macchiato", "", "", "690", "", "", "", ""));
mySoftdrinkArr.push(new myClass("Melange", "", "", "790", "", "", "", ""));
mySoftdrinkArr.push(new myClass("Irish coffee", "", "", "1.450", "", "", "", ""));
mySoftdrinkArr.push(new myClass("Ice coffee", "", "", "1.090", "", "", "", ""));
mySoftdrinkArr.push(new myClass("Hot chocolate", "", "", "990", "", "", "", ""));

var myAperitiffArr = new Array();
myAperitiffArr.push(new myClass("Hungaria Extra Dry (glass)", "", "", "1.400", "", "", "", ""));
myAperitiffArr.push(new myClass("Kir Royale 0,12", "", "", "1.590", "", "", "", ""));
myAperitiffArr.push(new myClass("Campari 0,10", "", "", "1.190", "", "", "", ""));
myAperitiffArr.push(new myClass("Campari/juice 0,30", "", "", "1.650", "", "", "", ""));
myAperitiffArr.push(new myClass("Martini 0,10", "", "", "1.190", "", "", "", ""));
myAperitiffArr.push(new myClass("Aperol Spritz", "", "", "1.690", "", "", "", ""));

var mySpiritArr = new Array();
mySpiritArr.push(new myClass("Finlandia, Russian Standard", "", "", "1.090", "", "", "", ""));
mySpiritArr.push(new myClass("Beefeater Gin", "", "", "1.090", "", "", "", ""));
mySpiritArr.push(new myClass("Bombay Sapphire", "", "", "1.250", "", "", "", ""));
mySpiritArr.push(new myClass("Captain Morgen Spiced", "", "", "1.100", "", "", "", ""));
mySpiritArr.push(new myClass("Bacardi Superior", "", "", "1.100", "", "", "", ""));
mySpiritArr.push(new myClass("Jack Daniels", "", "", "1.250", "", "", "", ""));
mySpiritArr.push(new myClass("Johnnie Walker Red", "", "", "1.090", "", "", "", ""));
mySpiritArr.push(new myClass("Jameson", "", "", "1.250", "", "", "", ""));
mySpiritArr.push(new myClass("Glenfiddich 12 years", "", "", "1.950", "", "", "", ""));
mySpiritArr.push(new myClass("José Cuervo Silver/Gold", "", "", "1.090", "", "", "", ""));
mySpiritArr.push(new myClass("Unicum", "", "", "1.090", "", "", "", ""));
mySpiritArr.push(new myClass("Jägermeister", "", "", "1.090", "", "", "", ""));
mySpiritArr.push(new myClass("Bailey’s", "", "", "1.150", "", "", "", ""));
mySpiritArr.push(new myClass("Cointreau", "", "", "1.450", "", "", "", ""));
mySpiritArr.push(new myClass("Henessy VS", "", "", "1.950", "", "", "", ""));
mySpiritArr.push(new myClass("Metaxa 5*", "", "", "1.090", "", "", "", ""));
mySpiritArr.push(new myClass("Boulard Calvados", "", "", "1.550", "", "", "", ""));
mySpiritArr.push(new myClass("Amaretto Disaronno", "", "", "1.290", "", "", "", ""));
mySpiritArr.push(new myClass("Hungarian spirits", "", "", "1.490", "", "", "", ""));

var myDraftbeerArr = new Array();
myDraftbeerArr.push(new myClass("Soproni", "", "0,30:", "540", "0,50:", "890", "", ""));

var myBottledbeerArr = new Array();
myBottledbeerArr.push(new myClass("Soproni Démon 0,50", "", "", "790", "", "", "", ""));
myBottledbeerArr.push(new myClass("Edelweiss 0,50", "", "", "1.050", "", "", "", ""));
myBottledbeerArr.push(new myClass("Heineken 0,0% 0,33", "", "", "750", "", "", "", ""));
myBottledbeerArr.push(new myClass("Heineken 0,33", "", "", "790", "", "", "", ""));
myBottledbeerArr.push(new myClass("Gösser Zitrone  0,33", "", "", "750", "", "", "", ""));
myBottledbeerArr.push(new myClass("Krusovice 0,50", "", "", "790", "", "", "", ""));

var myHandmadebeerArr = new Array();
myHandmadebeerArr.push(new myClass("Fóti Zwickl 0,50", "", "", "1.090", "", "", "", ""));
myHandmadebeerArr.push(new myClass("Keserű méz 0,50", "", "", "1.090", "", "", "", ""));
myHandmadebeerArr.push(new myClass("Sour Cherry 0,50", "", "", "980", "", "", "", ""));
myHandmadebeerArr.push(new myClass("Plum 0,50", "", "", "980", "", "", "", ""));

var myCiderbeerArr = new Array();
myCiderbeerArr.push(new myClass("Stongbow Gold Apple/Red Berries", "", "", "890", "", "", "", ""));


var myHungarianContentArr = new Array();
myHungarianContentArr.push(new myChefContentClass("Sautéed Foie Gras", "on lamb lettuce with grapes toasted hazelnuts and Tokaj wine vinaigrette"));
myHungarianContentArr.push(new myChefContentClass("Sauska Sárgamuskotály", "Tokaj 2019"));
myHungarianContentArr.push(new myChefContentClass("Goulash soup", ""));
myHungarianContentArr.push(new myChefContentClass("Paprika veal medallions", "with “dödölle”, wild mushrooms and a dill-paprika sauce"));
myHungarianContentArr.push(new myChefContentClass("St. Andrea Pinot Noir", "Eger 2018"));
myHungarianContentArr.push(new myChefContentClass("Crêpe", "stuffed with cottage cheese and apricot sauce"));
myHungarianContentArr.push(new myChefContentClass("Babits Furmint", "Tokaj 2018"));
myHungarianContentArr.push(new myChefContentClass("Mineral water, coffee", ""));
var myHungarianInfo = new myChefInfoClass("Menu pricewithout wines", "11.500", "Menu price with wine", "15.600", "Media/foods/almaspalacsinta.jpg", "");

var mySeasonContentArr = new Array();
mySeasonContentArr.push(new myChefContentClass("Smoked trout from Szilvásvárad", "with tomatoes salad"));
mySeasonContentArr.push(new myChefContentClass("Etyeki Kúria Chardonnay", "Etyek-Buda 2018"));
mySeasonContentArr.push(new myChefContentClass("Pea bisque", "with homemade ricotta"));
mySeasonContentArr.push(new myChefContentClass("Roast Duck served", "with bacon-infused Brussels sprouts, new potatoes "));
mySeasonContentArr.push(new myChefContentClass("Etyeki Kúria Merlot", "Sopron 2016"));
mySeasonContentArr.push(new myChefContentClass("Chocolate ganache", "warm, freshly-baked chocolate soufflé cake with vanilla ice-cream"));
mySeasonContentArr.push(new myChefContentClass("Oremus 3 Puttonyos Aszú (0,05l)", "Tokaj 2013"));
mySeasonContentArr.push(new myChefContentClass("Mineral water, coffee", ""));
var mySeasonInfo = new myChefInfoClass("Menu price without wines", "10.450", "Menu price with wine", "14.800", "Media/foods/kacsasult.jpg", "");


/* Karácsonyi menük */
/*
var myChristmas1ContentArr = new Array();
myChristmas1ContentArr.push(new myChefContentClass("Smoked salmon torte", "with horseradish-beet purée and lamb’s lettuce salad"));

var myChristmas1Info = new myChefInfoClass("Christmas Menu I. / Person", "8.350", "", "", "", "");


var myChristmas2ContentArr = new Array();
myChristmas2ContentArr.push(new myChefContentClass("Duck liver paté", "with Armagnac-flavored fig chutney and toasted Brioche"));

var myChristmas2Info = new myChefInfoClass("Christmas Menu II. / Person", "9.900", "", "", "", "");


var myChristmas3ContentArr = new Array();
myChristmas3ContentArr.push(new myChefContentClass("Venison pâté", "served on rocket salad with orange marmalade"));

var myChristmas3Info = new myChefInfoClass("Christmas Menu III. / Person", "10.500", "", "", "Media/foods/ganache.jpg", "");


var myChristmasSaladsArr = new Array();
myChristmasSaladsArr.push(new myChefContentClass("Eggplant, and roasted pepper-feta dip", "with pita"));

myChristmasSaladsArr.push(new myChefContentClass("Rare Sirloin slices", "with gingered-peach and iceberg salad"));


var myChristmasHotDishesArr = new Array();
myChristmasHotDishesArr.push(new myChefContentClass("Salmon, catfish and perch brochette", "on soya-flavoured julienne vegetables and a rosé wine sauce"));

myChristmasHotDishesArr.push(new myChefContentClass("Spinach-ricotta canneloni", ""));


var myChristmasDessertsArr = new Array();
myChristmasDessertsArr.push(new myChefContentClass("Orange-almond polenta torte", "with orange salad and Grand Marnier-flavoured mascarpone cream"));


var myChristmasBufetInfo = new myChefInfoClass("Christmas Buffet / Person", "9.500", "", "", "Media/foods/almaspalacsinta.jpg", "");


var myChristmasDrink1Arr = new Array();
myChristmasDrink1Arr.push(new myChefContentClass("Welcome Cocktail: Mulled Wine", ""));

var myChristmasDrink1Info = new myChefInfoClass("Beverage Package I. / Person", "5.500", "", "", "", "");


var myChristmasDrink2Arr = new Array();
myChristmasDrink2Arr.push(new myChefContentClass("Welcome Cocktail:  Kir Royale", ""));

var myChristmasDrink2Info = new myChefInfoClass("Beverage Package II. / Person", "6.150", "", "", "", "");
*/

/* Szilveszteri menü */
/*
var myNewyearArr = new Array();
myNewyearArr.push(new myChefContentClass("Duck liver pâté", "with apple and beetroot variation, served with toasted brioche"));
myNewyearArr.push(new myChefContentClass("&laquo;&nbsp;&#8249;&nbsp;&#8250;&nbsp;&raquo;", ""));
myNewyearArr.push(new myChefContentClass("Game consommé", "with marinated egg, vegetables and bone marrow filled bouchée"));
myNewyearArr.push(new myChefContentClass("&laquo;&nbsp;&#8249;&nbsp;&#8250;&nbsp;&raquo;", ""));
myNewyearArr.push(new myChefContentClass("Hortobágy pancake", "Savoury crêpe filled with slivered chicken meat in a paprika sauce"));
myNewyearArr.push(new myChefContentClass("&laquo;&nbsp;&#8249;&nbsp;&#8250;&nbsp;&raquo;", ""));
myNewyearArr.push(new myChefContentClass("Filet of perch", "on a bed of tagliatelle with lentil gratin and champagne sauce"));
myNewyearArr.push(new myChefContentClass("OR", ""));
myNewyearArr.push(new myChefContentClass("Roast leg of duck and rosé duck breast", "with braised red cabbage and pumpkin  velouté"));
myNewyearArr.push(new myChefContentClass("&laquo;&nbsp;&#8249;&nbsp;&#8250;&nbsp;&raquo;", ""));
myNewyearArr.push(new myChefContentClass("Chocolate „Ganache”", "warm, freshly-baked chocolate soufflé cake with vanilla ice-cream"));
myNewyearArr.push(new myChefContentClass("&laquo;&nbsp;&#8249;&nbsp;&#8250;&nbsp;&raquo;", ""));
myNewyearArr.push(new myChefContentClass("After midnight - „Korhely” soup", "sour cabbage soup with smoked pork hocks"));
myNewyearArr.push(new myChefContentClass("Music all evening with our Salon Band", ""));
var myNewyearInfo = new myChefInfoClass("New Year’s Eve Menu / Person", "26.600", "", "", "Media/foods/ganache.jpg", "");
*/
