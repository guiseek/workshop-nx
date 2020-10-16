import { NgModule } from '@angular/core';
import { UserService } from './services/user.service';

export * from './services/user.service';

@NgModule({
  providers: [UserService]
})
export class StaticSharedCustomerDataAccessModule {}
