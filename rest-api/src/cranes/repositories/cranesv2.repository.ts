import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Crane } from "../../../../interfaces/cranes";

/**
 * contains only modification of database and querying of/to database
 */

@Injectable()
export class CranesV2Repository {

  constructor(@InjectModel('Crane') private craneModel: Model<Crane>) { }

  async createCrane(crane: Partial<Crane>): Promise<Crane> {
    // this allows to manipulate the model in memory, before saving it
    const newCrane = new this.craneModel(crane); //on this stage new Object exist only in memory
    await newCrane.save(); //when it's ready to save, save into database
    return newCrane.toObject({ versionKey: false });

    // another way of creating a model, when we want to save it immediately
    // return this.craneModel.create(crane); <-- instead lines above, creation could be done like that
  }
  async findAll(): Promise<Crane[]> {
    return this.craneModel.find();
  }

  async findCraneByUrl(craneUrl: string): Promise<Crane> { //async is important, w/o it error occurs
    return this.craneModel.findOne({ url: craneUrl });
  }

  async updateCrane(craneId: string, changes: Crane): Promise<Crane> {
    return this.craneModel.findOneAndUpdate({ _id: craneId }, changes, { new: true })
  }

  deleteCrane(craneId: string) {
    return this.craneModel.deleteOne({ _id: craneId });
  }

}
