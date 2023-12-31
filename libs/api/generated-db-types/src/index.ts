import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    name = "name",
    password = "password"
}

export enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum NullsOrder {
    first = "first",
    last = "last"
}

export enum City {
    Paris = "Paris",
    NewYork = "NewYork",
    Istanbul = "Istanbul",
    London = "London",
    Madrid = "Madrid",
    Tokyo = "Tokyo",
    Dubai = "Dubai",
    Blida = "Blida",
    Wakanda = "Wakanda",
    Gotham = "Gotham"
}

export enum EventScalarFieldEnum {
    id = "id",
    name = "name",
    date = "date",
    city = "city",
    description = "description",
    ownerId = "ownerId"
}

registerEnumType(EventScalarFieldEnum, { name: 'EventScalarFieldEnum', description: undefined })
registerEnumType(City, { name: 'City', description: undefined })
registerEnumType(NullsOrder, { name: 'NullsOrder', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

@ObjectType()
export class AggregateEvent {
    @Field(() => EventCountAggregate, {nullable:true})
    _count?: InstanceType<typeof EventCountAggregate>;
    @Field(() => EventMinAggregate, {nullable:true})
    _min?: InstanceType<typeof EventMinAggregate>;
    @Field(() => EventMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof EventMaxAggregate>;
}

@ArgsType()
export class CreateManyEventArgs {
    @Field(() => [EventCreateManyInput], {nullable:false})
    @Type(() => EventCreateManyInput)
    @ValidateNested()
    data!: Array<EventCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneEventArgs {
    @Field(() => EventCreateInput, {nullable:false})
    @Type(() => EventCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof EventCreateInput>;
}

@ArgsType()
export class DeleteManyEventArgs {
    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof EventWhereInput>;
}

@ArgsType()
export class DeleteOneEventArgs {
    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof EventWhereUniqueInput>;
}

@ArgsType()
export class EventAggregateArgs {
    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof EventWhereInput>;
    @Field(() => [EventOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EventOrderByWithRelationInput>;
    @Field(() => EventWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof EventWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => EventCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof EventCountAggregateInput>;
    @Field(() => EventMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof EventMinAggregateInput>;
    @Field(() => EventMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof EventMaxAggregateInput>;
}

@InputType()
export class EventCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    date?: true;
    @Field(() => Boolean, {nullable:true})
    city?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    ownerId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class EventCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    date!: number;
    @Field(() => Int, {nullable:false})
    city!: number;
    @Field(() => Int, {nullable:false})
    description!: number;
    @Field(() => Int, {nullable:false})
    ownerId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class EventCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    date?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    city?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    ownerId?: keyof typeof SortOrder;
}

@InputType()
export class EventCreateManyOwnerInputEnvelope {
    @Field(() => [EventCreateManyOwnerInput], {nullable:false})
    @Type(() => EventCreateManyOwnerInput)
    data!: Array<EventCreateManyOwnerInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class EventCreateManyOwnerInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    name!: string;
    @Field(() => Date, {nullable:false})
    @Validator.IsDate()
    date!: Date | string;
    @Field(() => City, {nullable:false})
    @Validator.IsEnum(City)
    city!: keyof typeof City;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    description?: string;
}

@InputType()
export class EventCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    name!: string;
    @Field(() => Date, {nullable:false})
    @Validator.IsDate()
    date!: Date | string;
    @Field(() => City, {nullable:false})
    @Validator.IsEnum(City)
    city!: keyof typeof City;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    description?: string;
    @Field(() => String, {nullable:false})
    ownerId!: string;
}

@InputType()
export class EventCreateNestedManyWithoutOwnerInput {
    @Field(() => [EventCreateWithoutOwnerInput], {nullable:true})
    @Type(() => EventCreateWithoutOwnerInput)
    create?: Array<EventCreateWithoutOwnerInput>;
    @Field(() => [EventCreateOrConnectWithoutOwnerInput], {nullable:true})
    @Type(() => EventCreateOrConnectWithoutOwnerInput)
    connectOrCreate?: Array<EventCreateOrConnectWithoutOwnerInput>;
    @Field(() => EventCreateManyOwnerInputEnvelope, {nullable:true})
    @Type(() => EventCreateManyOwnerInputEnvelope)
    createMany?: InstanceType<typeof EventCreateManyOwnerInputEnvelope>;
    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Array<EventWhereUniqueInput>;
}

@InputType()
export class EventCreateOrConnectWithoutOwnerInput {
    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: InstanceType<typeof EventWhereUniqueInput>;
    @Field(() => EventCreateWithoutOwnerInput, {nullable:false})
    @Type(() => EventCreateWithoutOwnerInput)
    create!: InstanceType<typeof EventCreateWithoutOwnerInput>;
}

@InputType()
export class EventCreateWithoutOwnerInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    name!: string;
    @Field(() => Date, {nullable:false})
    @Validator.IsDate()
    date!: Date | string;
    @Field(() => City, {nullable:false})
    @Validator.IsEnum(City)
    city!: keyof typeof City;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    description?: string;
}

@InputType()
export class EventCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    name!: string;
    @Field(() => Date, {nullable:false})
    @Validator.IsDate()
    date!: Date | string;
    @Field(() => City, {nullable:false})
    @Validator.IsEnum(City)
    city!: keyof typeof City;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    description?: string;
    @Field(() => UserCreateNestedOneWithoutEventsInput, {nullable:false})
    owner!: InstanceType<typeof UserCreateNestedOneWithoutEventsInput>;
}

@ArgsType()
export class EventGroupByArgs {
    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof EventWhereInput>;
    @Field(() => [EventOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EventOrderByWithAggregationInput>;
    @Field(() => [EventScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof EventScalarFieldEnum>;
    @Field(() => EventScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof EventScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => EventCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof EventCountAggregateInput>;
    @Field(() => EventMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof EventMinAggregateInput>;
    @Field(() => EventMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof EventMaxAggregateInput>;
}

@ObjectType()
export class EventGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    name!: string;
    @Field(() => Date, {nullable:false})
    @Validator.IsDate()
    date!: Date | string;
    @Field(() => City, {nullable:false})
    @Validator.IsEnum(City)
    city!: keyof typeof City;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    description?: string;
    @Field(() => String, {nullable:false})
    ownerId!: string;
    @Field(() => EventCountAggregate, {nullable:true})
    _count?: InstanceType<typeof EventCountAggregate>;
    @Field(() => EventMinAggregate, {nullable:true})
    _min?: InstanceType<typeof EventMinAggregate>;
    @Field(() => EventMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof EventMaxAggregate>;
}

@InputType()
export class EventListRelationFilter {
    @Field(() => EventWhereInput, {nullable:true})
    every?: InstanceType<typeof EventWhereInput>;
    @Field(() => EventWhereInput, {nullable:true})
    some?: InstanceType<typeof EventWhereInput>;
    @Field(() => EventWhereInput, {nullable:true})
    none?: InstanceType<typeof EventWhereInput>;
}

@InputType()
export class EventMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    date?: true;
    @Field(() => Boolean, {nullable:true})
    city?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    ownerId?: true;
}

@ObjectType()
export class EventMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    name?: string;
    @Field(() => Date, {nullable:true})
    @Validator.IsDate()
    date?: Date | string;
    @Field(() => City, {nullable:true})
    @Validator.IsEnum(City)
    city?: keyof typeof City;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    description?: string;
    @Field(() => String, {nullable:true})
    ownerId?: string;
}

@InputType()
export class EventMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    date?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    city?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    ownerId?: keyof typeof SortOrder;
}

@InputType()
export class EventMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    date?: true;
    @Field(() => Boolean, {nullable:true})
    city?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    ownerId?: true;
}

@ObjectType()
export class EventMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    name?: string;
    @Field(() => Date, {nullable:true})
    @Validator.IsDate()
    date?: Date | string;
    @Field(() => City, {nullable:true})
    @Validator.IsEnum(City)
    city?: keyof typeof City;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    description?: string;
    @Field(() => String, {nullable:true})
    ownerId?: string;
}

@InputType()
export class EventMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    date?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    city?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    ownerId?: keyof typeof SortOrder;
}

@InputType()
export class EventOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class EventOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    date?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    city?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    description?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    ownerId?: keyof typeof SortOrder;
    @Field(() => EventCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof EventCountOrderByAggregateInput>;
    @Field(() => EventMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof EventMaxOrderByAggregateInput>;
    @Field(() => EventMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof EventMinOrderByAggregateInput>;
}

@InputType()
export class EventOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    date?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    city?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    description?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    ownerId?: keyof typeof SortOrder;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    owner?: InstanceType<typeof UserOrderByWithRelationInput>;
}

@InputType()
export class EventScalarWhereWithAggregatesInput {
    @Field(() => [EventScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EventScalarWhereWithAggregatesInput>;
    @Field(() => [EventScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EventScalarWhereWithAggregatesInput>;
    @Field(() => [EventScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EventScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    date?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => EnumCityWithAggregatesFilter, {nullable:true})
    city?: InstanceType<typeof EnumCityWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    ownerId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class EventScalarWhereInput {
    @Field(() => [EventScalarWhereInput], {nullable:true})
    AND?: Array<EventScalarWhereInput>;
    @Field(() => [EventScalarWhereInput], {nullable:true})
    OR?: Array<EventScalarWhereInput>;
    @Field(() => [EventScalarWhereInput], {nullable:true})
    NOT?: Array<EventScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    date?: InstanceType<typeof DateTimeFilter>;
    @Field(() => EnumCityFilter, {nullable:true})
    city?: InstanceType<typeof EnumCityFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    ownerId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class EventUncheckedCreateNestedManyWithoutOwnerInput {
    @Field(() => [EventCreateWithoutOwnerInput], {nullable:true})
    @Type(() => EventCreateWithoutOwnerInput)
    create?: Array<EventCreateWithoutOwnerInput>;
    @Field(() => [EventCreateOrConnectWithoutOwnerInput], {nullable:true})
    @Type(() => EventCreateOrConnectWithoutOwnerInput)
    connectOrCreate?: Array<EventCreateOrConnectWithoutOwnerInput>;
    @Field(() => EventCreateManyOwnerInputEnvelope, {nullable:true})
    @Type(() => EventCreateManyOwnerInputEnvelope)
    createMany?: InstanceType<typeof EventCreateManyOwnerInputEnvelope>;
    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Array<EventWhereUniqueInput>;
}

@InputType()
export class EventUncheckedCreateWithoutOwnerInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    name!: string;
    @Field(() => Date, {nullable:false})
    @Validator.IsDate()
    date!: Date | string;
    @Field(() => City, {nullable:false})
    @Validator.IsEnum(City)
    city!: keyof typeof City;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    description?: string;
}

@InputType()
export class EventUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    name!: string;
    @Field(() => Date, {nullable:false})
    @Validator.IsDate()
    date!: Date | string;
    @Field(() => City, {nullable:false})
    @Validator.IsEnum(City)
    city!: keyof typeof City;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    description?: string;
    @Field(() => String, {nullable:false})
    ownerId!: string;
}

@InputType()
export class EventUncheckedUpdateManyWithoutEventsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    name?: string;
    @Field(() => Date, {nullable:true})
    @Validator.IsDate()
    date?: Date | string;
    @Field(() => City, {nullable:true})
    @Validator.IsEnum(City)
    city?: keyof typeof City;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    description?: string;
}

@InputType()
export class EventUncheckedUpdateManyWithoutOwnerNestedInput {
    @Field(() => [EventCreateWithoutOwnerInput], {nullable:true})
    @Type(() => EventCreateWithoutOwnerInput)
    create?: Array<EventCreateWithoutOwnerInput>;
    @Field(() => [EventCreateOrConnectWithoutOwnerInput], {nullable:true})
    @Type(() => EventCreateOrConnectWithoutOwnerInput)
    connectOrCreate?: Array<EventCreateOrConnectWithoutOwnerInput>;
    @Field(() => [EventUpsertWithWhereUniqueWithoutOwnerInput], {nullable:true})
    @Type(() => EventUpsertWithWhereUniqueWithoutOwnerInput)
    upsert?: Array<EventUpsertWithWhereUniqueWithoutOwnerInput>;
    @Field(() => EventCreateManyOwnerInputEnvelope, {nullable:true})
    @Type(() => EventCreateManyOwnerInputEnvelope)
    createMany?: InstanceType<typeof EventCreateManyOwnerInputEnvelope>;
    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    set?: Array<EventWhereUniqueInput>;
    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    disconnect?: Array<EventWhereUniqueInput>;
    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    delete?: Array<EventWhereUniqueInput>;
    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Array<EventWhereUniqueInput>;
    @Field(() => [EventUpdateWithWhereUniqueWithoutOwnerInput], {nullable:true})
    @Type(() => EventUpdateWithWhereUniqueWithoutOwnerInput)
    update?: Array<EventUpdateWithWhereUniqueWithoutOwnerInput>;
    @Field(() => [EventUpdateManyWithWhereWithoutOwnerInput], {nullable:true})
    @Type(() => EventUpdateManyWithWhereWithoutOwnerInput)
    updateMany?: Array<EventUpdateManyWithWhereWithoutOwnerInput>;
    @Field(() => [EventScalarWhereInput], {nullable:true})
    @Type(() => EventScalarWhereInput)
    deleteMany?: Array<EventScalarWhereInput>;
}

@InputType()
export class EventUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    name?: string;
    @Field(() => Date, {nullable:true})
    @Validator.IsDate()
    date?: Date | string;
    @Field(() => City, {nullable:true})
    @Validator.IsEnum(City)
    city?: keyof typeof City;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    description?: string;
    @Field(() => String, {nullable:true})
    ownerId?: string;
}

@InputType()
export class EventUncheckedUpdateWithoutOwnerInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    name?: string;
    @Field(() => Date, {nullable:true})
    @Validator.IsDate()
    date?: Date | string;
    @Field(() => City, {nullable:true})
    @Validator.IsEnum(City)
    city?: keyof typeof City;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    description?: string;
}

@InputType()
export class EventUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    name?: string;
    @Field(() => Date, {nullable:true})
    @Validator.IsDate()
    date?: Date | string;
    @Field(() => City, {nullable:true})
    @Validator.IsEnum(City)
    city?: keyof typeof City;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    description?: string;
    @Field(() => String, {nullable:true})
    ownerId?: string;
}

@InputType()
export class EventUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    name?: string;
    @Field(() => Date, {nullable:true})
    @Validator.IsDate()
    date?: Date | string;
    @Field(() => City, {nullable:true})
    @Validator.IsEnum(City)
    city?: keyof typeof City;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    description?: string;
}

@InputType()
export class EventUpdateManyWithWhereWithoutOwnerInput {
    @Field(() => EventScalarWhereInput, {nullable:false})
    @Type(() => EventScalarWhereInput)
    where!: InstanceType<typeof EventScalarWhereInput>;
    @Field(() => EventUpdateManyMutationInput, {nullable:false})
    @Type(() => EventUpdateManyMutationInput)
    data!: InstanceType<typeof EventUpdateManyMutationInput>;
}

@InputType()
export class EventUpdateManyWithoutOwnerNestedInput {
    @Field(() => [EventCreateWithoutOwnerInput], {nullable:true})
    @Type(() => EventCreateWithoutOwnerInput)
    create?: Array<EventCreateWithoutOwnerInput>;
    @Field(() => [EventCreateOrConnectWithoutOwnerInput], {nullable:true})
    @Type(() => EventCreateOrConnectWithoutOwnerInput)
    connectOrCreate?: Array<EventCreateOrConnectWithoutOwnerInput>;
    @Field(() => [EventUpsertWithWhereUniqueWithoutOwnerInput], {nullable:true})
    @Type(() => EventUpsertWithWhereUniqueWithoutOwnerInput)
    upsert?: Array<EventUpsertWithWhereUniqueWithoutOwnerInput>;
    @Field(() => EventCreateManyOwnerInputEnvelope, {nullable:true})
    @Type(() => EventCreateManyOwnerInputEnvelope)
    createMany?: InstanceType<typeof EventCreateManyOwnerInputEnvelope>;
    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    set?: Array<EventWhereUniqueInput>;
    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    disconnect?: Array<EventWhereUniqueInput>;
    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    delete?: Array<EventWhereUniqueInput>;
    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Array<EventWhereUniqueInput>;
    @Field(() => [EventUpdateWithWhereUniqueWithoutOwnerInput], {nullable:true})
    @Type(() => EventUpdateWithWhereUniqueWithoutOwnerInput)
    update?: Array<EventUpdateWithWhereUniqueWithoutOwnerInput>;
    @Field(() => [EventUpdateManyWithWhereWithoutOwnerInput], {nullable:true})
    @Type(() => EventUpdateManyWithWhereWithoutOwnerInput)
    updateMany?: Array<EventUpdateManyWithWhereWithoutOwnerInput>;
    @Field(() => [EventScalarWhereInput], {nullable:true})
    @Type(() => EventScalarWhereInput)
    deleteMany?: Array<EventScalarWhereInput>;
}

@InputType()
export class EventUpdateWithWhereUniqueWithoutOwnerInput {
    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: InstanceType<typeof EventWhereUniqueInput>;
    @Field(() => EventUpdateWithoutOwnerInput, {nullable:false})
    @Type(() => EventUpdateWithoutOwnerInput)
    data!: InstanceType<typeof EventUpdateWithoutOwnerInput>;
}

@InputType()
export class EventUpdateWithoutOwnerInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    name?: string;
    @Field(() => Date, {nullable:true})
    @Validator.IsDate()
    date?: Date | string;
    @Field(() => City, {nullable:true})
    @Validator.IsEnum(City)
    city?: keyof typeof City;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    description?: string;
}

@InputType()
export class EventUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    name?: string;
    @Field(() => Date, {nullable:true})
    @Validator.IsDate()
    date?: Date | string;
    @Field(() => City, {nullable:true})
    @Validator.IsEnum(City)
    city?: keyof typeof City;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    description?: string;
    @Field(() => UserUpdateOneRequiredWithoutEventsNestedInput, {nullable:true})
    owner?: InstanceType<typeof UserUpdateOneRequiredWithoutEventsNestedInput>;
}

@InputType()
export class EventUpsertWithWhereUniqueWithoutOwnerInput {
    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: InstanceType<typeof EventWhereUniqueInput>;
    @Field(() => EventUpdateWithoutOwnerInput, {nullable:false})
    @Type(() => EventUpdateWithoutOwnerInput)
    update!: InstanceType<typeof EventUpdateWithoutOwnerInput>;
    @Field(() => EventCreateWithoutOwnerInput, {nullable:false})
    @Type(() => EventCreateWithoutOwnerInput)
    create!: InstanceType<typeof EventCreateWithoutOwnerInput>;
}

@InputType()
export class EventWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class EventWhereInput {
    @Field(() => [EventWhereInput], {nullable:true})
    AND?: Array<EventWhereInput>;
    @Field(() => [EventWhereInput], {nullable:true})
    OR?: Array<EventWhereInput>;
    @Field(() => [EventWhereInput], {nullable:true})
    NOT?: Array<EventWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    date?: InstanceType<typeof DateTimeFilter>;
    @Field(() => EnumCityFilter, {nullable:true})
    city?: InstanceType<typeof EnumCityFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    ownerId?: InstanceType<typeof StringFilter>;
    @Field(() => UserWhereInput, {nullable:true})
    owner?: InstanceType<typeof UserWhereInput>;
}

@ObjectType()
export class Event {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:false})
    date!: Date;
    @Field(() => City, {nullable:false})
    city!: keyof typeof City;
    @Field(() => String, {nullable:true})
    description!: string | null;
    @Field(() => String, {nullable:false})
    ownerId!: string;
    @Field(() => User, {nullable:false})
    owner?: InstanceType<typeof User>;
}

@ArgsType()
export class FindFirstEventOrThrowArgs {
    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof EventWhereInput>;
    @Field(() => [EventOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EventOrderByWithRelationInput>;
    @Field(() => EventWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof EventWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [EventScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EventScalarFieldEnum>;
}

@ArgsType()
export class FindFirstEventArgs {
    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof EventWhereInput>;
    @Field(() => [EventOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EventOrderByWithRelationInput>;
    @Field(() => EventWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof EventWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [EventScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EventScalarFieldEnum>;
}

@ArgsType()
export class FindManyEventArgs {
    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof EventWhereInput>;
    @Field(() => [EventOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EventOrderByWithRelationInput>;
    @Field(() => EventWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof EventWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [EventScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EventScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueEventOrThrowArgs {
    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof EventWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueEventArgs {
    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof EventWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyEventArgs {
    @Field(() => EventUpdateManyMutationInput, {nullable:false})
    @Type(() => EventUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof EventUpdateManyMutationInput>;
    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof EventWhereInput>;
}

@ArgsType()
export class UpdateOneEventArgs {
    @Field(() => EventUpdateInput, {nullable:false})
    @Type(() => EventUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof EventUpdateInput>;
    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof EventWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneEventArgs {
    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof EventWhereUniqueInput>;
    @Field(() => EventCreateInput, {nullable:false})
    @Type(() => EventCreateInput)
    create!: InstanceType<typeof EventCreateInput>;
    @Field(() => EventUpdateInput, {nullable:false})
    @Type(() => EventUpdateInput)
    update!: InstanceType<typeof EventUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class DateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => DateTimeFilter, {nullable:true})
    not?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class EnumCityFilter {
    @Field(() => City, {nullable:true})
    equals?: keyof typeof City;
    @Field(() => [City], {nullable:true})
    in?: Array<keyof typeof City>;
    @Field(() => [City], {nullable:true})
    notIn?: Array<keyof typeof City>;
    @Field(() => EnumCityFilter, {nullable:true})
    not?: InstanceType<typeof EnumCityFilter>;
}

@InputType()
export class EnumCityWithAggregatesFilter {
    @Field(() => City, {nullable:true})
    equals?: keyof typeof City;
    @Field(() => [City], {nullable:true})
    in?: Array<keyof typeof City>;
    @Field(() => [City], {nullable:true})
    notIn?: Array<keyof typeof City>;
    @Field(() => EnumCityWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof EnumCityWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => EnumCityFilter, {nullable:true})
    _min?: InstanceType<typeof EnumCityFilter>;
    @Field(() => EnumCityFilter, {nullable:true})
    _max?: InstanceType<typeof EnumCityFilter>;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => IntFilter, {nullable:true})
    not?: InstanceType<typeof IntFilter>;
}

@InputType()
export class SortOrderInput {
    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;
    @Field(() => NullsOrder, {nullable:true})
    nulls?: keyof typeof NullsOrder;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => StringFilter, {nullable:true})
    not?: InstanceType<typeof StringFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    _min?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    _max?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class AggregateUser {
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
    @Field(() => [UserCreateManyInput], {nullable:false})
    @Type(() => UserCreateManyInput)
    @ValidateNested()
    data!: Array<UserCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class DeleteOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindFirstUserOrThrowArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindFirstUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserOrThrowArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyUserArgs {
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    @Type(() => UserUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class UpdateOneUserArgs {
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof UserUpdateInput>;
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    create!: InstanceType<typeof UserCreateInput>;
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    update!: InstanceType<typeof UserUpdateInput>;
}

@ArgsType()
export class UserAggregateArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@InputType()
export class UserCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @HideField()
    password!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
}

@ObjectType()
export class UserCount {
    @Field(() => Int, {nullable:false})
    events?: number;
}

@InputType()
export class UserCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password!: string;
}

@InputType()
export class UserCreateNestedOneWithoutEventsInput {
    @Field(() => UserCreateWithoutEventsInput, {nullable:true})
    @Type(() => UserCreateWithoutEventsInput)
    create?: InstanceType<typeof UserCreateWithoutEventsInput>;
    @Field(() => UserCreateOrConnectWithoutEventsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutEventsInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutEventsInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateOrConnectWithoutEventsInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutEventsInput, {nullable:false})
    @Type(() => UserCreateWithoutEventsInput)
    create!: InstanceType<typeof UserCreateWithoutEventsInput>;
}

@InputType()
export class UserCreateWithoutEventsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password!: string;
}

@InputType()
export class UserCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password!: string;
    @Field(() => EventCreateNestedManyWithoutOwnerInput, {nullable:true})
    events?: InstanceType<typeof EventCreateNestedManyWithoutOwnerInput>;
}

@ArgsType()
export class UserGroupByArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithAggregationInput>;
    @Field(() => [UserScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserScalarFieldEnum>;
    @Field(() => UserScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    name?: string;
    @HideField()
    password!: string;
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
}

@ObjectType()
export class UserMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    name?: string;
    @HideField()
    password?: string;
}

@InputType()
export class UserMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
}

@InputType()
export class UserMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
}

@ObjectType()
export class UserMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    name?: string;
    @HideField()
    password?: string;
}

@InputType()
export class UserMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
}

@InputType()
export class UserOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    name?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => UserCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    @Field(() => UserMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    @Field(() => UserMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    name?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => EventOrderByRelationAggregateInput, {nullable:true})
    events?: InstanceType<typeof EventOrderByRelationAggregateInput>;
}

@InputType()
export class UserRelationFilter {
    @Field(() => UserWhereInput, {nullable:true})
    is?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    isNot?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    password?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class UserUncheckedCreateWithoutEventsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password!: string;
}

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password!: string;
    @Field(() => EventUncheckedCreateNestedManyWithoutOwnerInput, {nullable:true})
    events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutOwnerInput>;
}

@InputType()
export class UserUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password?: string;
}

@InputType()
export class UserUncheckedUpdateWithoutEventsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password?: string;
}

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password?: string;
    @Field(() => EventUncheckedUpdateManyWithoutOwnerNestedInput, {nullable:true})
    events?: InstanceType<typeof EventUncheckedUpdateManyWithoutOwnerNestedInput>;
}

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password?: string;
}

@InputType()
export class UserUpdateOneRequiredWithoutEventsNestedInput {
    @Field(() => UserCreateWithoutEventsInput, {nullable:true})
    @Type(() => UserCreateWithoutEventsInput)
    create?: InstanceType<typeof UserCreateWithoutEventsInput>;
    @Field(() => UserCreateOrConnectWithoutEventsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutEventsInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutEventsInput>;
    @Field(() => UserUpsertWithoutEventsInput, {nullable:true})
    @Type(() => UserUpsertWithoutEventsInput)
    upsert?: InstanceType<typeof UserUpsertWithoutEventsInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutEventsInput, {nullable:true})
    @Type(() => UserUpdateWithoutEventsInput)
    update?: InstanceType<typeof UserUpdateWithoutEventsInput>;
}

@InputType()
export class UserUpdateWithoutEventsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password?: string;
}

@InputType()
export class UserUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password?: string;
    @Field(() => EventUpdateManyWithoutOwnerNestedInput, {nullable:true})
    events?: InstanceType<typeof EventUpdateManyWithoutOwnerNestedInput>;
}

@InputType()
export class UserUpsertWithoutEventsInput {
    @Field(() => UserUpdateWithoutEventsInput, {nullable:false})
    @Type(() => UserUpdateWithoutEventsInput)
    update!: InstanceType<typeof UserUpdateWithoutEventsInput>;
    @Field(() => UserCreateWithoutEventsInput, {nullable:false})
    @Type(() => UserCreateWithoutEventsInput)
    create!: InstanceType<typeof UserCreateWithoutEventsInput>;
}

@InputType()
export class UserWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
}

@InputType()
export class UserWhereInput {
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
    @Field(() => EventListRelationFilter, {nullable:true})
    events?: InstanceType<typeof EventListRelationFilter>;
}

@ObjectType()
export class User {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name!: string | null;
    @HideField()
    password!: string;
    @Field(() => [Event], {nullable:true})
    events?: Array<Event>;
    @Field(() => UserCount, {nullable:false})
    _count?: InstanceType<typeof UserCount>;
}
