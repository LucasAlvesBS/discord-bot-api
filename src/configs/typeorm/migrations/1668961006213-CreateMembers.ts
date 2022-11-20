import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateMembers1668961006213 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'members',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'guild_id',
            type: 'varchar',
            length: '50',
          },
          {
            name: 'user_id',
            type: 'varchar',
            length: '50',
            isUnique: true,
          },
          {
            name: 'inviter_id',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'deleted_at',
            type: 'timestamp with time zone',
            isNullable: true,
            default: null,
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'members',
      new TableForeignKey({
        name: 'MemberInviter',
        referencedTableName: 'inviters',
        columnNames: ['inviter_id'],
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('members', 'MemberInviter');
    await queryRunner.dropTable('members');
  }
}
