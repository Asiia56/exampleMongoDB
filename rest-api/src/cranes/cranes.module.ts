import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CranesController } from "./controllers/cranes.controller";
import { CranesV2Repository } from "./repositories/cranesv2.repository";
import { CranesSchema } from "./schemas/crane.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Crane", schema: CranesSchema }
    ])
  ],
  controllers: [
    CranesController
  ],
  providers: [
    CranesV2Repository
  ]
})

export class CranesModule {

}
