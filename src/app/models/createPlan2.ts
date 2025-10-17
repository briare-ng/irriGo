import { DepthLabel } from '../_utills/depth.level';
import { SoilType } from '../_utills/soil.type.enum';

export interface getCreatePlan2Dto {
  //valeur profondeur sol etc
  soilType: SoilType;
  depthLabel: DepthLabel;
  usefulReserve: Number;
  //parcel id
}
