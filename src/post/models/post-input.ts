import { InputType, Field } from 'type-graphql';

@InputType()
export class PostInputType {

  @Field()
  Title: string;

  @Field()
  TeaserImage: string;

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
  Archive: boolean;
}
