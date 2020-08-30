import {
  PrimaryKey,
  Table,
  Model,
  AutoIncrement,
  Column,
  DataType,
} from 'sequelize-typescript';

@Table({ tableName: 'example' })
export default class Examples extends Model<Examples> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  idExample: number;
  @Column({ type: DataType.STRING(15) })
  name: string;
}
