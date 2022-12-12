import { Body, Controller, Delete, forwardRef, Get, HttpException, Inject, NotFoundException, Param, Post, Put, UseGuards } from "@nestjs/common";
import { AuthGuard } from "../../guard/auth.guard";
import { Crane } from "../../../../interfaces/cranes";
import { CranesV2Repository } from "../repositories/cranesv2.repository";
import { AuthorizationGuard } from "../../guard/authorization.guard";
import { AdminGuard } from "../../guard/admin.guard";

@Controller("cranes")
@UseGuards(AuthGuard)
export class CranesController {
  constructor(
    @Inject(forwardRef(() => CranesV2Repository)) private craneDb: CranesV2Repository) { }
    //previously was @Inject('CranesV2Repository') so actually to inject, but it cause error as module is not seen by app. It's a circular file reference or what

  @Post()
  @UseGuards(AdminGuard)
  async createCrane(@Body() crane: Crane): Promise<Crane> {
    console.log("creating crane");
    return this.craneDb.createCrane(crane);
  }

  @Get()
  async findAllCranes(): Promise<Crane[]> {
    return this.craneDb.findAll();
  }

  @Get(':craneUrl')
  async findCraneByUrl(@Param("craneUrl") craneUrl: string) {

    console.log("Finding by url " + craneUrl);
    const cranePage = await this.craneDb.findCraneByUrl(craneUrl);

    if(!cranePage) {
      throw new NotFoundException("Could not find course for url" + craneUrl);
    }

    return cranePage;

  }

  @Put(':craneId')
  @UseGuards(AdminGuard)
  async updateCrane(@Param("craneId") craneId: string,
    @Body() changes: Crane): Promise<Crane> {

    console.log("updating crane " + craneId);

    if (changes._id) {
      throw new HttpException("Can't update crane id", 400); //if accidently fill in crane id, it'll throw an error as craneId should not be overrided
    }
    return this.craneDb.updateCrane(craneId, changes);

  }

  @Delete(':craneId')
  @UseGuards(AdminGuard)
  async deleteCrane(@Param("craneId") craneId: string) {
    console.log("deleting crane " + craneId);
    return this.craneDb.deleteCrane(craneId);
  }
}
