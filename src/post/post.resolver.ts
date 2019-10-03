import { Query, Resolver, Args, Mutation, ResolveProperty, Parent } from '@nestjs/graphql';
import { Int } from 'type-graphql';
import { Post } from './models/post';
import { PostInputType } from './models/post-input';
import { PostService } from './post.service';
import { HttpService } from '@nestjs/common';

@Resolver(of => Post)
export class PostResolver {

  constructor(
    private readonly postService: PostService,
    private readonly httpService: HttpService
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

  @ResolveProperty()
  async author(@Parent() post) {
    const author = await this.httpService.get("https://606f7145-698b-43d0-aac0-6601eae54447.mock.pstmn.io/author/1").toPromise();
    return author.data;
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
