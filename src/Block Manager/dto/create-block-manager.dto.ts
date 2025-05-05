export class CreateBlockManagerDto {
                readonly agencyId: string;
                readonly name: string;
                readonly phone: string;
                readonly email: string;
                readonly state: string;
                readonly district: string;
                readonly block: string;
                readonly assignedLeads?: string[]; // optional
              }
              