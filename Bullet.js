/*게임의 사물 중 총알을 정의한다!! */
class Bullet{
    //총알의 속성
    constructor(container,ii,kk){
        this.container; // 어느 부모에 붙일지 그 부모 결정!!
        this.img = document.createElement("img");
        this.src="../images/ball/ball1.png";
        this.img.src = this.src;
        this.width=20;
        this.height=20;
        this.x= ii;
        this.y=kk;
        this.velX=10;
        this.velY=0;

        this.img.style.width = this.width + "px";
        this.img.style.height=this.height + "px";
        this.img.style.position = "absolute";
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";

        //부모에 총알 부착!!
        container.appendChild(this.img);

    }
    //동작관련!! (동작은 메서드로 정의한다!!)
    tick(){
        this.x += this.velX;
        this.y += this.velY;
    }
    //변화된 물리량을 이용하여, 화면에 표시!!
    render(){
        this.img.style.left = this.x+"px";
        this.img.style.top=this.y+"px";
    }
}