/*----------ROOF----------*/

/*Button*/
const roofButton = document.getElementById('roof-button');
/*Targets*/
const houseRoof = document.getElementById('roof');
const roofMaterialTarget = document.getElementById('roof-material-target');
const roofBalconyTarget = document.getElementById('roof-balcony-target');
const roofCienceBalconyTarget = document.getElementById('roof-Science-balcony-target');
const roofAncientBalconyTarget = document.getElementById('roof-Ancient-balcony-target');
const roofSmokestackTarget = document.getElementById('roof-smokestack-target');
/*roof main ul*/
const roofUl = document.getElementById('roof-options');
const roofColor = document.getElementById('roof-color');
const roofMaterial = document.getElementById('roof-material');
const roofSmokestack = document.getElementById('roof-smokestack');
const roofBalcony = document.getElementById('roof-balcony');
/*roof color ul*/
const roofColorOptions = document.getElementById('roof-color-options');
const roofColorBlue = document.getElementById('roof-color-options-blue');
const roofColorGray = document.getElementById('roof-color-options-gray');
const roofColorRed = document.getElementById('roof-color-options-red')
/* roof material ul */
const roofMaterialOptions = document.getElementById('roof-material-options');
const roofMaterialWood = document.getElementById('roof-material-options-wood');
const roofMaterialBrick = document.getElementById('roof-material-options-brick');
const roofMaterialMetal = document.getElementById('roof-material-options-metal');
/* roof smokestack ul */
const smokestackOptions = document.getElementById('roof-smokestack-options');
const roofSmokestackWith = document.getElementById('roof-smokestack-options-with');
const roofSmokestackWithout = document.getElementById('roof-smokestack-options-without');
/* roof smokestack color */
const smokestackColor = document.getElementById('roof-smokestack-options-color');
const smokestackColorOptions = document.getElementById('roof-smokestack-color-options');
const smokestackBlue = document.getElementById('roof-smokestack-options-color-blue');
const smokestackRed = document.getElementById('roof-smokestack-options-color-red');
const smokestackGray = document.getElementById('roof-smokestack-options-color-gray');
/* roof smokestack material */
const smokestackMaterial = document.getElementById('roof-smokestack-options-material');
const smokestackMaterialOptions = document.getElementById('roof-smokestack-material-options');
const smokestackBrick = document.getElementById('roof-smokestack-options-material-brick');
const smokestackMetal = document.getElementById('roof-smokestack-options-material-metal');
const smokestackClay = document.getElementById('roof-smokestack-options-material-clay');
/*roof Balcony ul*/
const roofBalconyOptions = document.getElementById('roof-balcony-options');
const roofNormalBalcony = document.getElementById('roof-options-Normalbalcony');
const roofCienceBalcony = document.getElementById('roof-options-cienceBalcony');
const roofAncientBalcony = document.getElementById('roof--options-Ancientbalcony');
/*children*/
const roofAllUl = [roofColorOptions,roofMaterialOptions,smokestackOptions,roofBalconyOptions, smokestackMaterialOptions]

/*----------front----------*/

/*Button*/
const frontButton = document.getElementById('front-button');
/*Targets*/
const houseFront = document.getElementById('front');
const frontMaterialTarget = document.getElementById('front-material-target');
const frontWindowSingleTarget = document.getElementById('front-windows-target-single');
const frontNormalWindows = document.getElementById('front-windows-target');
const frontNormalWindowsTwo = document.getElementById('front-windows-target-two');
const frontRectangleWindows = document.getElementById('front-windows-square-target');
const frontRectangleWindowsTwo = document.getElementById('front-windows-square-target-two');
const frontCircleWindows = document.getElementById('front-windows-circle-target');
const frontCircleWindowsTwo = document.getElementById('front-windows-circle-target-two');
const frontDoorNormalTarget = document.getElementById('front-door-target');
const frontDoorRoundTarget = document.getElementById('front-door-round-target');
const frontDoorCircleTarget = document.getElementById('front-door-circle-target');
/*front main ul*/
const frontUl = document.getElementById('front-options');
const frontColor = document.getElementById('front-color');
const frontMaterial = document.getElementById('front-material');
const frontWindows = document.getElementById('front-windows');
const frontDoor = document.getElementById('front-door');
/*front color ul*/
const frontColorOptions = document.getElementById('front-color-options');
const frontColorBlue = document.getElementById('front-color-options-blue');
const frontColorGray = document.getElementById('front-color-options-gray');
const frontColorRed = document.getElementById('front-color-options-red');
/* front material ul */
const frontMaterialOptions = document.getElementById('front-material-options');
const frontMaterialBrick = document.getElementById('front-material-options-brick');
const frontMaterialMetal = document.getElementById('front-material-options-metal');
const frontMaterialWood = document.getElementById('front-material-options-wood');
/* front windows ul */
const frontWindowsOptions = document.getElementById('front-windows-options');
const frontWindowsNormal = document.getElementById('front-windows-option-normal');
const frontWindowsSquare = document.getElementById('front-windows-option-square');
const frontWindowsCircle = document.getElementById('front-windows-option-circle');
const frontWindowsSingle = document.getElementById('front-windows-option-single');
/* front door ul */
const frontDoorOptions = document.getElementById('front-door-options');
const frontDoorNormal = document.getElementById('front-door-option-normal');
const frontDoorRound = document.getElementById('front-door-option-round');
const frontDoorCircle = document.getElementById('front-door-option-circle');
/*children*/
const frontAllUl = [frontColorOptions,frontMaterialOptions,frontWindowsOptions,frontDoorOptions];

/*----------------------------------------Clear----------------------------------------*/

const clear = document.getElementById('clear');

clear.addEventListener('click', ()=>{
	localStorage.clear();
	location.reload();
})

/*----------------------------------------Save----------------------------------------*/

const save = document.getElementById('save');

save.addEventListener('click', ()=>{

	/* Roof */

	let roofColorSave = localStorage.setItem('RoofColor', houseRoof.style.backgroundColor);
	let roofMaterialSave = localStorage.setItem('RoofMaterial', roofMaterialTarget.style.backgroundImage);
	let roofSmokestackSave = localStorage.setItem('smokestack', roofSmokestackTarget.style.display);
	let smokeStackColorSave = localStorage.setItem('smokestackColor', roofSmokestackTarget.style.backgroundColor);
	let smokestackMaterialSave = localStorage.setItem('smokestackMaterial', roofSmokestackTarget.style.backgroundImage)
	let normalBalconySave = localStorage.setItem('normalBalcony', roofBalconyTarget.style.display);
	let scienceBalconySave = localStorage.setItem('scienceBalcony', roofCienceBalconyTarget.style.display);
	let ancientBalconnySave = localStorage.setItem('ancientBalcony', roofAncientBalconyTarget.style.display);

	/* Front */

	let frontColorSave = localStorage.setItem('frontColor', houseFront.style.backgroundColor);
	let frontMaterialSave = localStorage.setItem('frontMaterial', houseFront.style.backgroundImage);
	let normalWindowSave = localStorage.setItem('normalWindow', frontNormalWindows.style.display);
	let rectangleWindowSave = localStorage.setItem('rectangleWindow', frontRectangleWindows.style.display);
	let circleWindowSave = localStorage.setItem('circleWindow', frontCircleWindows.style.display);
	let singleWindowSave = localStorage.setItem('singleWindow', frontWindowSingleTarget.style.display);
	let normalDoorSave = localStorage.setItem('normalDoor', frontDoorNormalTarget.style.display);
	let roundDoorSave = localStorage.setItem('roundDoor', frontDoorRoundTarget.style.display);
	let circleDoorSave = localStorage.setItem('circleDoor', frontDoorCircleTarget.style.display)
});




let roof = {

	color: '#525252',

	material: 'url("https://www.transparenttextures.com/patterns/skeletal-weave.png")',

	smokestackS: 'block',

	smokestackColorS: '#d42e00',

	smokestackMaterialS: 'url("https://www.transparenttextures.com/patterns/skeletal-weave.png")',

	normalBalcony: 'flex',

	scienceBalcony: 'flex',

	ancientBalcony: 'flex',

	changeColor: color => {
		houseRoof.style.backgroundColor = color;
	},

	changeMaterial: material => {
		roofMaterialTarget.style.backgroundImage = material;	
	},

	smokestack: display => {
		roofSmokestackTarget.style.display = display;
	},

	smokestackColor: color => {
		roofSmokestackTarget.style.backgroundColor = color;
	},

	smokestackMaterial: material =>{
		roofSmokestackTarget.style.backgroundImage = material;
	},

	balcony: (normal, science, ancient) => {
		roofBalconyTarget.style.display = normal;
		roofCienceBalconyTarget.style.display = science;
		roofAncientBalconyTarget.style.display = ancient;
	},

};

/* DOM display */

roofColorSave = localStorage.getItem( 'RoofColor' ) || roof.color;
houseRoof.style.backgroundColor = roofColorSave;

roofMaterialSave = localStorage.getItem( 'RoofMaterial' ) || roof.material;
roofMaterialTarget.style.backgroundImage = roofMaterialSave;

roofSmoketackSave = localStorage.getItem('smokestack') || roof.smokestackS;
roofSmokestackTarget.style.display = roofSmoketackSave;

smokeStackColorSave = localStorage.getItem('smokestackColor') || roof.smokestackColorS;
roofSmokestackTarget.style.backgroundColor = smokeStackColorSave;

smokestackMaterialSave = localStorage.getItem('smokestackMaterial') || roof.smokestackMaterialS;
roofSmokestackTarget.style.backgroundImage = smokestackMaterialSave;

normalBalconySave = localStorage.getItem('normalBalcony') || roof.normalBalcony;
roofBalconyTarget.style.display = normalBalconySave;

/* roof colors */

roofColorBlue.addEventListener('click', ()=>{
	roof.changeColor('#1c8fd6');
});

roofColorGray.addEventListener('click', ()=>{
	roof.changeColor('#525252');
});

roofColorRed.addEventListener('click', ()=>{
	roof.changeColor('#d42e00');
});

/* roof material */

roofMaterialBrick.addEventListener('click', ()=>{
	roof.changeMaterial('url("https://www.transparenttextures.com/patterns/skeletal-weave.png")')
});

roofMaterialWood.addEventListener('click', ()=>{
	roof.changeMaterial('url("https://www.transparenttextures.com/patterns/dark-wood.png")')
});

roofMaterialMetal.addEventListener('click', ()=>{
	roof.changeMaterial('url("https://www.transparenttextures.com/patterns/light-aluminum.png")')
});

/* roof smokestack */

roofSmokestackWith.addEventListener('click', ()=>{
	roof.smokestack('block')
});

roofSmokestackWithout.addEventListener('click', ()=>{
	roof.smokestack('none')
});

/* smokestack color */

smokestackBlue.addEventListener('click', ()=>{
	roof.smokestackColor('#1c8fd6')
});

smokestackRed.addEventListener('click', ()=>{
	roof.smokestackColor('#d42e00')
});

smokestackGray.addEventListener('click', ()=>{
	roof.smokestackColor('#525252')
});

/* smokestack material */

smokestackBrick.addEventListener('click', ()=>{
	roof.smokestackMaterial('url("https://www.transparenttextures.com/patterns/skeletal-weave.png")')
});

smokestackClay.addEventListener('click', ()=>{
	roof.smokestackMaterial('url("https://www.transparenttextures.com/patterns/asfalt-light.png")')
});

smokestackMetal.addEventListener('click', ()=>{
	roof.smokestackMaterial('url("https://www.transparenttextures.com/patterns/light-aluminum.png")')
});

/* roof balcony */

roofNormalBalcony.addEventListener('click', ()=>{
	roof.balcony('flex','none','none')
});

roofCienceBalcony.addEventListener('click', ()=>{
	roof.balcony('none','block','none')
});

roofAncientBalcony.addEventListener('click', ()=>{
	roof.balcony('none','none','flex')
});



/*----------------------------------------Front----------------------------------------*/



const front = {

	color: '#d42e00',

	material: 'url("https://www.transparenttextures.com/patterns/white-brick-wall.png")',

	normalWindow: 'block',

	rectangleWindow: 'none',

	circleWindow: 'none',

	normalDoor: 'block',

	roundDoor: 'none',

	circleDoor: 'none',

	changeColor: color => {
		houseFront.style.backgroundColor = color;
	},

	changeMaterial: material => {
		frontMaterialTarget.style.backgroundImage = material;
	},

	windows: (firts,second,thrid,fourth) => {

		frontNormalWindows.style.display = firts;
		frontNormalWindowsTwo.style.display = firts;
		
		frontRectangleWindows.style.display = second;
		frontRectangleWindowsTwo.style.display = second;

		frontCircleWindows.style.display = thrid;
		frontCircleWindowsTwo.style.display = thrid;

		frontWindowSingleTarget.style.display = fourth;
	},

	door: (firts,second,thrid) => {
		frontDoorNormalTarget.style.display = firts;
		frontDoorRoundTarget.style.display = second;
		frontDoorCircleTarget.style.display = thrid;
	},

};

/* DOM display */

	frontColorSave = localStorage.getItem('frontColor') || front.color;
	houseFront.style.backgroundColor = frontColorSave;
	frontMaterialSave = localStorage.getItem('frontMaterial') || front.material;
	houseFront.style.backgroundImage = frontMaterialSave;
	normalWindowSave = localStorage.getItem('normalWindow') || front.normalWindow;
	frontNormalWindows.style.display = normalWindowSave;
	frontNormalWindowsTwo.style.display = normalWindowSave;
	rectangleWindowSave = localStorage.getItem('rectangleWindow') || front.rectangleWindow;
	frontRectangleWindows.style.display = rectangleWindowSave;
	frontRectangleWindowsTwo.style.display = rectangleWindowSave;
	circleWindowSave = localStorage.getItem('circleWindow') || front.circleWindow;
	frontCircleWindows.style.display = circleWindowSave;
	frontCircleWindowsTwo.style.display = circleWindowSave;
	singleWindowSave = localStorage.getItem('singleWindow') || front.singleWindow;
	frontWindowSingleTarget.style.display = singleWindowSave;
	normalDoorSave = localStorage.getItem('normalDoor') || front.normalDoor;
	frontDoorNormalTarget.style.display = normalDoorSave;
	roundDoorSave = localStorage.getItem('roundDoor') || front.roundDoor;
	frontDoorRoundTarget.style.display = roundDoorSave;

	circleDoorSave = localStorage.getItem('circleDoor') || front.circleDoor;
	frontDoorCircleTarget.style.display = circleDoorSave;

/* front color */

frontColorBlue.addEventListener('click', ()=>{
	front.changeColor('#1c8fd6');
});

frontColorGray.addEventListener('click', ()=>{
	front.changeColor('#525252');
});

frontColorRed.addEventListener('click', ()=>{
	front.changeColor('#d42e00');
});

/* front material */

frontMaterialMetal.addEventListener('click', ()=>{
	front.changeMaterial('url("https://www.transparenttextures.com/patterns/brushed-alum.png")');
});

frontMaterialBrick.addEventListener('click', ()=>{
	front.changeMaterial('url("https://www.transparenttextures.com/patterns/white-brick-wall.png")');
});

frontMaterialWood.addEventListener('click', ()=>{
	front.changeMaterial('url("https://www.transparenttextures.com/patterns/tileable-wood.png")');
});

/* front windows */

frontWindowsNormal.addEventListener('click', ()=>{
	front.windows('block','none','none', 'none')
});

frontWindowsSquare.addEventListener('click', ()=>{
	front.windows('none','block','none', 'none')
});

frontWindowsCircle.addEventListener('click', ()=>{
	front.windows('none','none','block', 'none')
});

frontWindowsSingle.addEventListener('click', ()=>{
	front.windows('none','none','none', 'block')
});

/* front door */

frontDoorNormal.addEventListener('click', ()=>{
	front.door('block','none','none')
});

frontDoorRound.addEventListener('click', ()=>{
	front.door('none','block','none')
});

frontDoorCircle.addEventListener('click', ()=>{
	front.door('none','none','block')
});

/*----------------------------------------Menu----------------------------------------*/



const menu = {

	roofMainUl: ( first, second, thrid, fourth, fifth, sixth ) =>{
		roofColorOptions.style.display = first;
		roofMaterialOptions.style.display = second;
		smokestackOptions.style.display = thrid;
		smokestackColorOptions.style.display = fourth;
		smokestackMaterialOptions.style.display = fifth;
		roofBalconyOptions.style.display = sixth;	
	},

	frontMainUl: (first, second, thrid, fourth) =>{
		frontColorOptions.style.display = first;
		frontMaterialOptions.style.display = second;
		frontWindowsOptions.style.display = thrid;
		frontDoorOptions.style.display = fourth;
	},

}

/*ROOF*/

roofButton.addEventListener('click', ()=>{

	frontUl.style.display = 'none';
	frontAllUl.forEach(frontAllUl=>{
		frontAllUl.style.display = 'none';
	})

	roofUl.style.display = 'flex';

});

roofColor.addEventListener('click', ()=>{
	menu.roofMainUl('flex','none','none','none','none','none')
});

roofMaterial.addEventListener('click', ()=>{
	menu.roofMainUl('none','flex','none','none','none','none')
});

roofSmokestack.addEventListener('click', ()=>{
	menu.roofMainUl('none','none','flex', undefined , undefined ,'none')	
});

smokestackColor.addEventListener('click', ()=>{
	menu.roofMainUl('none','none','flex','flex','none', 'none','none')
});

smokestackMaterial.addEventListener('click', ()=>{
	menu.roofMainUl('none','none','flex','none', 'flex', 'none','none')
})

roofBalcony.addEventListener('click', ()=>{
	menu.roofMainUl('none','none','none','none','none', 'flex')
});

/*FRONT*/

frontButton.addEventListener('click', ()=>{

	roofUl.style.display = 'none';
	roofAllUl.forEach(roofAllUl=>{
		roofAllUl.style.display = 'none';
	})

	frontUl.style.display = 'flex';

});

frontColor.addEventListener('click', ()=>{
	menu.frontMainUl('flex','none','none','none')
});

frontMaterial.addEventListener('click', ()=>{
	menu.frontMainUl('none','flex','none','none')
});

frontWindows.addEventListener('click', ()=>{
	menu.frontMainUl('none','none','flex','none')
});

frontDoor.addEventListener('click', ()=>{
	menu.frontMainUl('none','none','none','flex')
});
