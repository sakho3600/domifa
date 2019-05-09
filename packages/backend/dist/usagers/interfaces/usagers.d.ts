import { Document } from 'mongoose';
import { AyantDroit } from './ayant-droit';
import { Decision } from './decision';
import { Doc } from './doc';
import { Rdv } from './rdv';
export interface Usager extends Document {
    id: number;
    nom: string;
    prenom: string;
    sexe: string;
    dateNaissance: Date;
    villeNaissance: string;
    codePostalNaissance: string;
    email: string;
    phone: string;
    statutDemande: string;
    etapeDemande: number;
    dateDemande: Date;
    agent: string;
    historique: string;
    contactPreference: string;
    ayantsDroits: AyantDroit[];
    rdv: Rdv;
    decision: Decision;
    docs: Doc[];
    docsPath: string[];
}
