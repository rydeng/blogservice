import * as graphql from "@nestjs/graphql";
import { MessageLogResolverBase } from "./base/messageLog.resolver.base";
import { MessageLog } from "./base/MessageLog";
import { MessageLogService } from "./messageLog.service";

@graphql.Resolver(() => MessageLog)
export class MessageLogResolver extends MessageLogResolverBase {
  constructor(protected readonly service: MessageLogService) {
    super(service);
  }
}
