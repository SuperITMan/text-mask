import {NgModule} from "@angular/core";
import {MaskedInputDirective} from "./directives/masked-input.directive";

@NgModule({
    declarations: [MaskedInputDirective],
    exports: [MaskedInputDirective]
})
export class TextMaskModule {}