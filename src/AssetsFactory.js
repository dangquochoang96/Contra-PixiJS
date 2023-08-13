import { BaseTexture, Spritesheet, Assets } from "pixi.js";

export default class AssetsFactory{

    #spritesheet;

    constructor(){
        this.#spritesheet = new Spritesheet(
            BaseTexture.from("sprites/atlas.png"),
            Assets.cache.get("sprites/atlas.json").data);
        this.#spritesheet.parse();
    }

    getTexture(textureName){
        return this.#spritesheet.textures[textureName];
    }

    getAnimationTextures(animationName){
        return this.#spritesheet.animations[animationName];
    }
}