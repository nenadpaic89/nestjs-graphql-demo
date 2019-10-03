import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class Author {

    @Field()
    id: number;

    @Field()
    name: string;
}