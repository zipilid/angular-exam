"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var imports_1 = require("../../imports");
var TreeService = (function () {
    function TreeService() {
        this.contacts = [{
                id: 1,
                name: "Friends",
                type: imports_1.Types.group,
                contacts: [
                    { id: 2, name: "Udi", type: imports_1.Types.contact, contacts: null },
                    { id: 3, name: "Tommy", type: imports_1.Types.contact, contacts: null },
                    {
                        id: 6,
                        name: "Old Friends",
                        type: imports_1.Types.group,
                        contacts: [
                            { id: 7, name: "Itay", type: imports_1.Types.contact, contacts: null },
                        ]
                    },
                ]
            },
            {
                id: 4,
                name: "Family",
                type: imports_1.Types.group,
                contacts: [
                    { id: 5, name: "Roni", type: imports_1.Types.contact, contacts: null },
                ]
            },
            { id: 8, name: "Ori", type: imports_1.Types.contact, contacts: null },
        ];
    }
    TreeService.prototype.getTree = function () {
        return this.contacts;
    };
    TreeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TreeService);
    return TreeService;
}());
exports.TreeService = TreeService;
//# sourceMappingURL=tree.js.map