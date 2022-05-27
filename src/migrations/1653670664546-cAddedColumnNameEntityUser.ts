import { MigrationInterface, QueryRunner } from 'typeorm'
import * as dotenv from 'dotenv'

dotenv.config()

export class cAddedColumnNameEntityUser1653670664546 implements MigrationInterface {
  name = 'cAddedColumnNameEntityUser1653670664546'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "users" ADD "name" character varying')
    await queryRunner.query(`
        UPDATE "users" 
        SET "name"='${process.env.ADMIN_NAME}' 
        WHERE "email"='${process.env.ADMIN_EMAIL}';
    `)
    await queryRunner.query('ALTER TABLE "users" ALTER COLUMN "name" SET NOT NULL')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "users" DROP COLUMN "name"')
  }
}
