import { AgricultureType } from '../_utills/agriculture.type.enum';
import { Period } from '../_utills/periode.enum';
import { PlantationType } from '../_utills/plantation.enum';

export interface createPlanDto {
  surface: number;
  projectedConsumption: number;
  period: Period;
  agricultureType: AgricultureType;
  plantationType: PlantationType;
  address: string;
  postalCode: number;
  city: string;
}
