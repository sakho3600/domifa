import { forwardRef, Module } from "@nestjs/common";
import { ConfigService } from "../config/config.service";
import { DatabaseModule } from "../database/database.module";
import { InteractionsModule } from "../interactions/interactions.module";
import { StructuresModule } from "../structures/structure.module";
import { UsagersModule } from "../usagers/usagers.module";
import { UsersModule } from "../users/users.module";
import { StatsProviders } from "./stats-providers";
import { StatsController } from "./controllers/stats.controller";
import { StatsService } from "./services/stats.service";
import { DashboardController } from "./controllers/dashboard.controller";
import { DashboardService } from "./services/dashboard.service";
import { StatsGeneratorService } from "./services/stats-generator.service";

@Module({
  controllers: [StatsController, DashboardController],
  exports: [
    StatsService,
    StatsGeneratorService,
    DashboardService,
    ...StatsProviders,
  ],
  imports: [
    DatabaseModule,
    forwardRef(() => UsersModule),
    forwardRef(() => StructuresModule),
    forwardRef(() => UsagersModule),
    forwardRef(() => InteractionsModule),
  ],
  providers: [
    StatsService,
    StatsGeneratorService,
    DashboardService,
    ...StatsProviders,
    ConfigService,
  ],
})
export class StatsModule {}
