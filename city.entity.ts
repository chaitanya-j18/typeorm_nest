import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
// import {Mark} from './mark'
@Entity({ name: 'cities' })
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  // @OneToOne(() => Mark,(marks)=>marks.cities)
  // @JoinColumn()
  // mark:Mark

  // @OneToOne(() => Profile, (profile) => profile.user) // specify inverse side as a second parameter
  // @JoinColumn()
  // profile: Profile
}
