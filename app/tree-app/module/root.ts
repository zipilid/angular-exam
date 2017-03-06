import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { TreeAppComponent,TreeNodeComponent,TreeService } from "../../imports";

@NgModule({
    imports: [BrowserModule,FormsModule],
    declarations: [TreeAppComponent,TreeNodeComponent],
    providers: [TreeService],
    bootstrap: [TreeAppComponent]
})
export class RootModule {

}