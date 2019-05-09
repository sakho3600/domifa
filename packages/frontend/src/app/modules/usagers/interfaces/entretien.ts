export class Entretien {

  public domiciliation: boolean;
  public revenus: boolean;
  public liencommune: string;
  public residence: string;
  public residenceDetail: string;
  public cause: string;
  public causeDetail: string;
  public pourquoi: string;
  public pourquoiDetail: string;
  public accompagnement: boolean;
  public accompagnementDetail: string;
  public commentaires: string;

  constructor(entretien?: any) {
    this.domiciliation = entretien && entretien.domiciliation || false;
    this.revenus = entretien && entretien.revenus || false;
    this.liencommune = entretien && entretien.liencommune || null;
    this.residence = entretien && entretien.residence || null;
    this.residenceDetail = entretien && entretien.residenceDetail || null;
    this.cause = entretien && entretien.cause || null;
    this.causeDetail = entretien && entretien.causeDetail || null;
    this.pourquoi = entretien && entretien.pourquoi || null;
    this.pourquoiDetail = entretien && entretien.pourquoiDetail || null;
    this.accompagnement = entretien && entretien.accompagnement || null;
    this.accompagnementDetail = entretien && entretien.accompagnementDetail || null;
    this.commentaires = entretien && entretien.commentaires || null;
  }
}
