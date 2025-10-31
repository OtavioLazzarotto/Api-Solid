import { Gym, Prisma } from "@prisma/client";
import { GymsRepository } from "../gyms-repository";
import { prisma } from "@/lib/prisma";

export class PrismaGymsRepository implements GymsRepository {
  findById(id: string): Promise<Gym | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: Prisma.GymCreateInput) {
    const gym = await prisma.gym.create({
      data,
    });

    return gym;
  }
}
