import { MigrationInterface, QueryRunner } from 'typeorm'
import * as dotenv from 'dotenv'
import { hashSync } from 'bcrypt'

dotenv.config()

export class initialMigration1653662564642 implements MigrationInterface {
  name = 'initialMigration1653662564642'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "isAdmin" boolean NOT NULL DEFAULT false, "password" character varying NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))')
    await queryRunner.query(`
            INSERT INTO "users" ("email", "isAdmin", "password")
            VALUES ('${process.env.ADMIN_EMAIL}', TRUE, '${hashSync((process.env.ADMIN_PWD as string), 10)}');
        `)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "users"')
  }
}
