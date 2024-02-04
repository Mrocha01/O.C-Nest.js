import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum OrderStatus {
  PENDING = 'pending',
  PAID = 'paid',
  FAILED = 'failed',
}

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  total: number;

  @Column()
  client_id: number; //Usuário atenticado

  @Column()
  status: OrderStatus = OrderStatus.PENDING;

  @CreateDateColumn()
  creted_at: Date;
}
