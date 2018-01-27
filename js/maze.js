function MazeTracker(x,y,xDir,yDir) {
	this.x = x;
	this.y = y;
	this.xPrevDir;
	this.yPrevDir;
	this.xDir = xDir;
	this.yDir = yDir;
}

MazeTracker.prototype.logic = function() {
	this.x += this.xDir;
	this.y += this.yDir;
	
	let r = Math.random();
	
	if(r < .25) {
		this.xDir = 1;
		this.yDir = 0;
	}
	
	else if(r < .5) {
		this.xDir = -1;
		this.yDir = 0;
	}
	
	else if(r < .75) {
		this.xDir = 0;
		this.yDir = 1;
	}
	
	else {
		this.xDir = 0;
		this.yDir = -1;
	}
}

MazeTracker.prototype.draw = function() {
	ctx.fillStyle = '#FFF';
	ctx.fillRect(this.x,this.y,1,1)
}