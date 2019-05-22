import { IsEmail, IsIn, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { AyantDroit } from '../interfaces/ayant-droit';

export class UsagersDto {

  @IsIn(['homme', 'femme'])
  public sexe: string;

  @IsNumber()
  @IsOptional()
  public id: number;

  @IsNotEmpty()
  public nom: string;

  @IsNotEmpty()
  public prenom: string;

  @IsNotEmpty()
  public dateNaissance: Date;

  @IsNotEmpty()
  public villeNaissance: string;

  @IsOptional()
  @IsEmail()
  public email: string;

  @IsOptional()
  public phone: string;

  @IsOptional()
  @IsNumber()
  public etapeDemande: number;

  @IsNotEmpty()
  public preference: {
    mail: boolean,
    phone: boolean
  };

  @IsOptional()
  public decision: {
    dateDebut: Date,
    dateFin: Date,
    dateDemande: Date,
    dateInstruction: Date,
    statut: string,
    motif: string,
    userId: number,
    agent: string,
    motifDetails: string,
    orientation: number,
    orientationDetails: string
  };

  @IsOptional()
  public ayantsDroits: AyantDroit[];

}
