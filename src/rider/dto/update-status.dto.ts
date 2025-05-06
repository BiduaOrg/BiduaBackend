import { IsEnum } from 'class-validator';

export enum RiderStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export class UpdateStatusDto {
  @IsEnum(RiderStatus)
  status: RiderStatus;
}
