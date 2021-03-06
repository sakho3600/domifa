import { IsIn, IsNumber, IsOptional } from "class-validator";

export class DashboardDto {
  @IsIn([
    "id",
    "region",
    "nom",
    "createdAt",
    "domicilies",
    "importDate",
    "lastLogin",
    "structureType",
    "import",
  ])
  public value!: string;

  @IsIn(["ascending", "descending"])
  public type!: string;
}
