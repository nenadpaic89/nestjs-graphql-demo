import { Module, HttpModule } from '@nestjs/common';
import { PostResolver } from './post.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './post.entity';
import { PostService } from './post.service';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity]), HttpModule],
  providers: [PostService, PostResolver],
})
export class PostModule {}
