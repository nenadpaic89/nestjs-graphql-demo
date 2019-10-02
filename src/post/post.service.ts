import { Repository } from 'typeorm';
import { PostEntity } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { PostInputType } from './models/post-input';

@Injectable()
export class PostService {

  private skip: number = 0;

  private take: number = 10;

  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) { }

  /**
   * Find all posts with pagination
   *
   * @param {number} skipRecords
   * @param {number} takeRecords
   *
   * @returns {*}
   */
  async findAll(skipRecords: number, takeRecords: number) {
    const pagination = this._defineOffsetAndLimit(skipRecords, takeRecords);
    return await this.postRepository.find({
      where: [
        {Active: true, Archive: false},
      ],
      order: {
        Created: 'DESC',
      },
      skip: pagination.offset,
      take: pagination.limit,
    });
  }

  /**
   * Get post by slug
   *
   * @returns {*}
   */
  async findBySlug(slug: string) {
    return await this.postRepository.findOne({where: {Slug: slug}});
  }

  /**
   * Finds post by its id
   *
   * @returns {*}
   */
  async findPostById(id: number) {
    return await this.postRepository.findOne({where: {PostId: id}});
  }

  async createPost(post: PostInputType) {
    console.log('Updating post', post);
  }

  /**
   * Define offset and limit for query
   *
   * @param {number} offset Number of records to skip
   * @param {number} limit Number of records to limit
   *
   * @return {*}
   */
  private _defineOffsetAndLimit(offset: number, limit: number) {
    if (offset < 0 || limit < 0) {
      return {
        offset: this.skip,
        limit: this.take,
      };
    }

    return {
      offset,
      limit,
    };
  }
}
