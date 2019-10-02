import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'Posts',
})
export class PostEntity {

  @PrimaryGeneratedColumn()
  PostId: number;

  @Column({length: 255})
  Title: string;

  @Column({length: 255, nullable: true, default: null})
  TeaserImage: string;

  @Column({length: 255})
  Slug: string;

  @Column({length: 255, nullable: true, default: null})
  SeoDescription: string;

  @Column({length: 255, nullable: true, default: null})
  Kicker: string;

  @Column('text')
  Content: string;

  @Column()
  Featured: boolean;

  @Column()
  Active: boolean;

  @Column()
  StartOn: Date;

  @Column()
  Stop: Date;

  @Column()
  Archive: boolean;

  @Column()
  Created: Date;

  @Column()
  Updated: Date;
}
