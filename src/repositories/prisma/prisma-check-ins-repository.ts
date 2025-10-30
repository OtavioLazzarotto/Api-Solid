import type { Prisma, CheckIn } from "@prisma/client";
import { randomUUID } from "node:crypto";
import { CheckInsRepository } from "../check-ins-repository";

export class InMemoryUsersRepository implements CheckInsRepository {
  
  public items: CheckIn[] = [];

  async create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn> {
    
    const checkIn = {
        id: randomUUID(),
        user_id: data.user_id,
        gym_id: data.gym_id,
        validated_at:  data.validated_at ? new Date(data.validated_at) : null,
        created_at: new Date(),
      };

      this.items.push(checkIn);

      return checkIn;

  }
  
}
