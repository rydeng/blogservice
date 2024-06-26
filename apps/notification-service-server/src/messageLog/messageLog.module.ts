import { Module } from "@nestjs/common";
import { MessageLogModuleBase } from "./base/messageLog.module.base";
import { MessageLogService } from "./messageLog.service";
import { MessageLogController } from "./messageLog.controller";
import { MessageLogResolver } from "./messageLog.resolver";

@Module({
  imports: [MessageLogModuleBase],
  controllers: [MessageLogController],
  providers: [MessageLogService, MessageLogResolver],
  exports: [MessageLogService],
})
export class MessageLogModule {}
