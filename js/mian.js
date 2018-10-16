var board = new Array();
var score = 0;
var hasConflicted = new Array();

var startx = 0;
var starty = 0;
var endx = 0;
var endy = 0;

$(document).ready(function(){
	perpareForMobile();
	newgame();
});

function perpareForMobile() {
	if(documentWidth>500){
		girdContainerWidth = 500;
		cellSpace = 20;
		cellSideLength = 100;
	}
	$("#grid-container").css('width',girdContainerWidth);
	$("#grid-container").css('height',girdContainerWidth);
	$("#grid-container").css('padding',cellSpace);
	$("#grid-container").css('border-radius', 0.02*girdContainerWidth);

	$(".grid-cell").css('width',cellSideLength);
	$(".grid-cell").css('height',cellSideLength);
	$(".grid-cell").css('border-radius',0.02*cellSideLength);
}

function newgame(){//初始化
	init();
	//生成数字
	generateOneNumber();
	generateOneNumber();
}

function init(){
	//生成表格
	for (var i = 0; i < 4; i++) {
		for(var j = 0;j < 4; j++){
			var gridCell = $("#grid-cell-"+i+"-"+j);
			gridCell.css('top',getPosTop(i,j));
			gridCell.css('left',getPosLeft(i,j));
		}
	}

	for(var i=0;i<4;i++){
		board[i] = new Array();
		hasConflicted[i] = new Array(); 
		for(var j=0;j<4;j++){
			board[i][j] = 0;
			hasConflicted[i][j] = false;
		}
	}

	updateBoardView();

	score = 0;
}

function updateBoardView(){
	//动态改变表格样式
	$(".number-cell").remove();
	for(var i=0;i<4;i++)
		for(var j=0;j<4;j++){
			$("#grid-container").append('<div class="number-cell" id="number-cell-'+i+'-'+j+'"></div>');
			var thenumberCell = $('#number-cell-'+i+'-'+j);
		
			if(board[i][j] == 0){
				thenumberCell.css("width",'0px');
				thenumberCell.css("height",'0px');
				thenumberCell.css('top',getPosTop(i,j) + cellSideLength/2 );
				thenumberCell.css('left',getPosLeft(i,j) + cellSideLength/2);
			}else{
				thenumberCell.css("width",cellSideLength);
				thenumberCell.css("height",cellSideLength);
				thenumberCell.css('top',getPosTop(i,j));
				thenumberCell.css('left',getPosLeft(i,j));
				thenumberCell.css('background-color',getNumberBackgroundColor(board[i][j]));
				thenumberCell.css('color',getNumberColor(board[i][j]));
				thenumberCell.text(board[i][j]);
			}	
			hasConflicted[i][j] = false;
		}
	$(".number-cell").css('line-height',cellSideLength+'px');
	$(".number-cell").css('font-size',0.6*cellSideLength+'px');
}

function generateOneNumber(){
	//判断是否表格是否有空间生成数字
	if(nospace(board) ){
		return false;
	}
	//随机一个位置
	var randx =  parseInt(Math.floor(Math.random()*4)); 
	var randy =  parseInt(Math.floor(Math.random()*4)); 
	while(true){
		if(board[randx][randy] == 0)
			break;

		randx =  parseInt(Math.floor(Math.random()*4)); 
		randy =  parseInt(Math.floor(Math.random()*4)); 
	}
	//随机一个数字
	var randNumber = Math.random()<0.5?2:4;
	//显示
	board[randx][randy] = randNumber;
	showNumberWithAnimation(randx,randy,randNumber);

	return true;
}

$(document).keydown(function(event){
	//阻挡默认效果（进度条下拉）
	//event.preventDefault();
	switch(event.keyCode){
		case 37://left
			event.preventDefault();
			if(moveLeft()){
				setTimeout("generateOneNumber()",210);
				setTimeout("isgameover()",300);
			}
			break;
		case 38://up
			event.preventDefault();
			if(moveUp()){
				setTimeout("generateOneNumber()",210);
				setTimeout("isgameover()",300);
			} 
			break;
		case 39://right
			event.preventDefault();
			if(moveRight()){
				setTimeout("generateOneNumber()",210);
				setTimeout("isgameover()",300);
				}
			break;
		case 40://down
			event.preventDefault();
			if(moveDown()){
				setTimeout("generateOneNumber()",210);
				setTimeout("isgameover()",300);
			}
			break;
		default://default
			break;
	}
	return false;
});


document.addEventListener('touchstart',function(event){
	startx=event.touches[0].pageX;
	starty=event.touches[0].pageY;
})	
//一些手机可能出现bug
document.addEventListener('touchmove',function(event){
	event.preventDefault();
})

document.addEventListener('touchend',function(event){
	endx=event.changedTouches[0].pageX;
	endy=event.changedTouches[0].pageY;

	var deltax = endx - startx;
	var deltay = endy - starty;

	if(Math.abs(deltax)<0.3*documentWidth && Math.abs(deltay)<0.3*documentWidth)
		return;

	if(Math.abs(deltax)>=Math.abs(deltay)){
		if(deltax>0){
			if(moveRight()){
				setTimeout("generateOneNumber()",210);
				setTimeout("isgameover()",300);
			}
		}else{
			if(moveLeft()){
				setTimeout("generateOneNumber()",210);
				setTimeout("isgameover()",300);
			}
		}
	}else{
		if(deltay>0){
			if(moveDown()){
				setTimeout("generateOneNumber()",210);
				setTimeout("isgameover()",300);
			}
		}else{
			if(moveUp()){
				setTimeout("generateOneNumber()",210);
				setTimeout("isgameover()",300);
			}
		}
	}
})

function isgameover(){
	if(nospace(board) && nomove(board)){
		gameover();
	}
}

function gameover(){
	alert("游戏结束");
}


function moveLeft(){
	if(!canMoveLeft(board))
		return false;
	//moveLeft
	for (var i = 0; i < 4; i++) 
		for(var j = 1;j < 4; j++){
			if(board[i][j]!=0){
				for(var k=0;k<j;k++){
					if(board[i][k]==0 && noBlockHorizontal(i,k,j,board)){
						//move
						showMoveAnimation(i,j,i,k);
						board[i][k]=board[i][j];
						board[i][j]=0;
						continue;
					}else if(board[i][k]==board[i][j] && noBlockHorizontal(i,k,j,board) && hasConflicted[i][k]==false){
						//move
						showMoveAnimation(i,j,i,k);
						//add
						board[i][k]+=board[i][j];
						board[i][j]=0;
						//add score
						score += board[i][k];
						UpdateScore( score );
						hasConflicted[i][k] = true;
						continue;
					}
				}
			}
		}
	//整体数据刷新,因为前段循环过快，直接执行updateBoardView会覆盖动画效果
	setTimeout("updateBoardView()",200); 
	return true;
}

function moveUp(){
	if(!canMoveUp(board))
		return false;
	//moveUp
	for(var j = 0;j < 4; j++) 
		for (var i = 1; i < 4; i++){
			if(board[i][j]!=0){
				for(var k=0;k<i;k++){
					if(board[k][j]==0 && noBlockHorizontalCol(j,k,i,board)){
						//move
						showMoveAnimation(i,j,k,j);
						board[k][j]=board[i][j];
						board[i][j]=0;
						continue;
					}else if(board[k][j]== board[i][j] && noBlockHorizontalCol(j,k,i,board) && hasConflicted[k][j]==false){
						//move
						showMoveAnimation(i,j,k,j);
						//add
						board[k][j]+=board[i][j];
						board[i][j]=0;
						score += board[k][j];
						UpdateScore( score );
						hasConflicted[k][j] = true;
						continue;
					}
				}
			}
		}
		setTimeout("updateBoardView()",200); 
	return true;
}

function moveRight(){
	if(!canMoveRight(board))
		return false;
	//moveRight
	for (var i = 0; i < 4; i++) 
		for(var j = 2;j >= 0; j--){
			if(board[i][j]!=0){
				for(var k=3;k>j;k--){
					if(board[i][k]==0 && noBlockHorizontal(i,j,k,board)){
						//MOVE
						showMoveAnimation(i,j,i,k);
						board[i][k]=board[i][j];
						board[i][j]=0;
						continue;
				}else if(board[i][j]==board[i][k] && noBlockHorizontal(i,j,k,board) && hasConflicted[i][k]==false){
					//move
					showMoveAnimation(i,j,i,k);
					board[i][k]+=board[i][j];
					board[i][j]=0;
					score += board[i][k];
					UpdateScore( score );
					hasConflicted[i][k] = true;
					continue;
				}
			}
		}
	}
	setTimeout("updateBoardView()",200); 
	return true;
}

function moveDown(){
	if(!canMoveDown(board))
		return false;
	for(var j = 0;j <4; j++)
		for (var i = 2; i >=0; i--) {
			if(board[i][j]!=0){
				for(var k=3;k>i;k--){
					if(board[k][j] == 0 && noBlockHorizontalCol(j,i,k,board)){
						showMoveAnimation(i,j,k,j)
						board[k][j]=board[i][j];
						board[i][j]=0;
						continue;
					}else if(board[k][j] == board[i][j] && noBlockHorizontalCol(j,i,k,board) && hasConflicted[k][j]==false ){
						showMoveAnimation(i,j,k,j)
						board[k][j]+=board[i][j];
						board[i][j]=0;
						score += board[k][j];
						UpdateScore( score );
						hasConflicted[k][j] = true;
						continue;
					}
				}
			}
		}
	setTimeout("updateBoardView()",200); 
	return true;
}