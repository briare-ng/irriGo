import { DepthLabel } from '../_utills/depth.level';
import { SoilType } from '../_utills/soil.type.enum';

export interface GetCreatePlan2Dto {
  soilType: SoilType;
  depthLabel: DepthLabel;
  usefulReserve: Number;
  parcelId: string;
}
