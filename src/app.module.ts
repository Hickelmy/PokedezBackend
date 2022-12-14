import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module';
// import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [PokemonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
