class endboss_icon extends Drawdown{
    constructor(){
        super();
        this.x = 440;
        this.y = 15;
        this.height = 0;
        this.width = 0;
        this.loadimg('img/7_statusbars/3_icons/icon_health_endboss.png'); 
    }
    reveal(){
        this.height = 110;
        this.width = 100;
    }
    
    dead(){
        this.x = 600;
    }

    reset(){
        this.x = 440;
    }
}

