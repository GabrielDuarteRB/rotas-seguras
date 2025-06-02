import { Module } from '@nestjs/common';
import { JwtValidationGuard } from './jwt-validation.guard';

@Module({
  providers: [JwtValidationGuard],
  exports: [JwtValidationGuard],
})
export class AuthModule {}