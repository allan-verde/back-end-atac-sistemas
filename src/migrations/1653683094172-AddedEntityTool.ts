import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedEntityTool1653683094172 implements MigrationInterface {
    name = 'AddedEntityTool1653683094172'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tool" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "link" character varying NOT NULL, "description" character varying NOT NULL, "tags" text array NOT NULL DEFAULT '{}', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_3bf5b1016a384916073184f99b7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tool" ADD CONSTRAINT "FK_68b86fcfc928d194f745a50939d" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tool" DROP CONSTRAINT "FK_68b86fcfc928d194f745a50939d"`);
        await queryRunner.query(`DROP TABLE "tool"`);
    }

}
