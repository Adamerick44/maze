let canv,ctx,loop;
let mt;

const main = () => {
	canv = document.createElement('canvas');
	
	canv.width = 600;
	canv.height = 600;
	
	canv.style.background = 'black';
	
	document.body.appendChild(canv);
	
	ctx = canv.getContext('2d');
	
	let frames = 0;
	
	loop = ms => {
		frames = frames != 60 ? frames + 1 : 1;
		if(frames % 10 === 0) logic();
		draw();
		this.requestAnimationFrame(loop,canv);
	}
	init();
	this.requestAnimationFrame(loop,canv);
}

const init = () => {
	ctx.scale(20,20);
	mt = new MazeTracker(15,15,1,1);
}

const logic = () => {
	mt.logic();
}

const draw = () => {
	mt.draw();
}

window.onload = main;