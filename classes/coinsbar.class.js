class Coinsbar extends Drawdown{
    geld = ['img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/60.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/80.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png'];

    bottle = ['img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png',
              'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png',
              'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png',
              'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png',
              'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png',
              'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png'];

    percentage = 0;


    constructor(){
        super();
        this.loadimgcache(this.geld);
        this.percentage = 0;
        this.x = 10;
        this.y = 50;
        this.height = 200;
        this.width = 80;
        this.loadimg('img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png');
        this.collectcoin(this.percentage)
        
    }

    reset(){
        this.percentage = 0;
    }
    collectcoin(percentage){
        this.percentage = percentage;
        let path = this.geld[this.resolvestatus()];
        this.img = this.imgcache[path];
    }

    increasecoins(){
        this.percentage += 20;
        this.collectcoin(this.percentage);
    }
   

    resolvestatus(){
        if(this.percentage == 100){
            return 5
        }
        if(this.percentage == 80){
            return 4
        }
        if(this.percentage == 60){
            return 3
        }
        if(this.percentage == 40){
            return 2
        }
        if(this.percentage == 20){
            return 1
        }
        if(this.percentage == 0){
            return 0
        }
    }

}