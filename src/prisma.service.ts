import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
      log: ['query'],
      //   log: [
      //     {
      //       emit: 'event',
      //       level: 'query',
      //     },
      //   ],
    });
  }
  async onModuleInit() {
    await this.$connect();
    // this.$on('event', async (e) => {
    //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //   // @ts-ignore
    //   console.log(`${e.query} ${e.params}`);
    // });
  }
}
