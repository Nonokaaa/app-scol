import { ISpecialite } from "./ispecialite";

export class Specialite implements ISpecialite{
    constructor(
        public _libelle: string,
        public _idSpec: number
    ) {}

    public get libelle() : string {
        return this._libelle;
    }
    public get idSpec(): number {
        return this._idSpec;
    }
    
    
    public set libelle(v : string) {
        this._libelle = v;
    }
    public set idSpec(v : number) {
        this._idSpec = v;
    }
    
}
