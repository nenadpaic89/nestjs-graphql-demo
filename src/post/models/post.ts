import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class Post {

  @Field(type => ID)
  PostId: string;

  @Field()
  Title: string;

  @Field()
  TeaserImage: string;

  @Field()
  Slug: string;

  @Field()
  SeoDescription: string;

  @Field()
  Kicker: string;

  @Field()
  Content: string;

  @Field()
  Featured: boolean;

  @Field()
  Active: boolean;

  @Field()
  StartOn: Date;

  @Field()
  Stop: Date;

  @Field()
  Archive: boolean;

  @Field()
  Created: Date;

  @Field()
  Updated: Date;
}
