import { NgModule } from "@angular/core";
import { _IgnoreCharacterPipe } from "./ignore-character.pipe";
import { _SafeHtmlPipe } from "./safe-html.pipe";
import { _SafeResourceUrlPipe } from "./safe-resource-url.pipe";
import { _ThousandsSeperatorPipe } from "./thousands-seperator.pipe";
import { N2TextPipeModule } from "./text/text.module"

const commonModules = [_SafeHtmlPipe, _SafeResourceUrlPipe, _IgnoreCharacterPipe, _ThousandsSeperatorPipe];

@NgModule({
  declarations: commonModules,
  imports: [N2TextPipeModule],
  exports: [commonModules, N2TextPipeModule],
  providers: [],
})
export class N2PipeModule {}
