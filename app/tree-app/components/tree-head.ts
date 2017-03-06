import { Component } from "@angular/core";
import { Contact } from "../../imports";
import { TreeService } from "../../imports";

@Component({
    selector: 'tree-head',
    templateUrl: 'tree-head.html',
    moduleId: module.id
})
export class TreeAppComponent {

    private contacts: Contact[];

    constructor(treeService: TreeService) {

        this.contacts = treeService.getTree();
    }

}