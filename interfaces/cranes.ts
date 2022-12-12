/*export interface Crane {
    _id: string;
    seqNo: number;
    name: string;
    url: string;
    category: string; //WHEEL_CRANE or CRAWLER_CRANE
    loadCapacity: number;
    telescopicBoom: number;
    maxHeight: number;
    maxRadius: number;
    axles: number,
    description: string,
}
*/

import { IsString, IsMongoId, IsInt } from "class-validator";

export class Crane {
  @IsString()
  @IsMongoId()
  _id: string;
  @IsInt({ message: 'seqNo must be numeric' }) seqNo: number;
  @IsString() name;
  @IsString() url;
  @IsString() iconUrl;
  @IsString() category; //WHEEL_CRANE or CRAWLER_CRANE
  @IsInt() loadCapacity;
  @IsInt() telescopicBoom;
  @IsInt() maxHeight;
  @IsInt() maxRadius;
  @IsString() axles;
  @IsString() description;
}


export function compareCranes(c1: Crane, c2: Crane) {

  const compare = c1.seqNo - c2.seqNo;

  if (compare > 0) {
    return 1;
  }
  else if (compare < 0) {
    return -1;
  }
  else return 0;

}
