import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { Int } from 'type-graphql';
import { Post } from './models/post';
import { PostInputType } from './models/post-input';
import { PostService } from './post.service';

@Resolver(of => Post)
export class PostResolver {

  constructor(
    private readonly postService: PostService,
  ) { }

  @Query(returns => [Post])
  async posts(
    @Args({name: 'skip', type: () => Int}) skip: number,
    @Args({name: 'take', type: () => Int}) take: number,
  ) {
    return await this.postService.findAll(skip, take);
  }

  @Query(returns => Post, { nullable: true })
  async post(
    @Args({name: 'slug', type: () => String}) slug: string,
  ) {
    return await this.postService.findBySlug(slug);
  }

  @Query(returns => Post, { nullable: true })
  async postById(
    @Args({name: 'id', type: () => Int}) id: number,
  ) {
    return await this.postService.findPostById(id);
  }

  @Mutation(returns => Post)
  async createPost(
    @Args({name: 'postInput', type: () => PostInputType}) post: PostInputType,
  ) {
    return this.postService.createPost(post);
  }
}
