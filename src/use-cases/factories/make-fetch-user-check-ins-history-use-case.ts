import { PrismaCheckInRepository } from "@/repositories/prisma/prisma-check-ins-repository";
import { FetchUserCheckInHistoryUseCase } from "../fetch-user-check-ins-history-use-case";

export function makeFetchUserCheckInsHistoryUseCase() {
  const checkInRepository = new PrismaCheckInRepository();

  const useCase = new FetchUserCheckInHistoryUseCase(checkInRepository)

  return useCase;
}
