export default class Entity{

    _view;

    #isDead;
    #isActive;
    #gravitate = false;

    constructor(view){
        this._view = view;
    }

    get x(){
        return this._view.x;
    }
    set x(value){
        this._view.x = value;
    }

    get y(){
        return this._view.y;
    }
    set y(value){
        this._view.y = value;
    }

    get gravitate(){
        return this.#gravitate;
    }
    set gravitate(value){
        this.#gravitate = value;
    }

    get collisionBox(){
        return this._view.collisionBox;
    }

    get hitBox(){
        return this._view.hitBox;
    }

    get isActive(){
        return this.#isActive;
    }
    set isActive(value){
        this.#isActive = value;
    }

    get isDead(){
        return this.#isDead;
    }

    dead(){
        this.#isDead = true;
    }

    resurrection(){
        this.#isDead = false;
    }

    removeFromStage(){
        if(this._view.parent != null){
            this._view.removeFromParent();
        }
    }
}