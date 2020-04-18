import { Document, Schema, Model, model, Types, FilterQuery } from "mongoose";

export default class Repository<T extends Document> {
    protected model: Model<T>;
    constructor(schemaName: string, schema: Schema) {
        this.model = model<T>(schemaName, schema);
    }

    public findOneById(id: string | Types.ObjectId) {
        return this.model.findById(id);
    }

    public findOne(entity: FilterQuery<T>) {
        return this.model.findOne(entity);
    }

    public create(entity: Partial<T>) {
        return this.model.create(entity);
    }

    public updateOneById(id: string | Types.ObjectId, update: any) {
        return this.model.findByIdAndUpdate(id, { $set: update });
    }
}
