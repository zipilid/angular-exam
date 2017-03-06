import { Injectable } from "@angular/core";
import { Contact } from "../../imports";
import { Types } from "../../imports";

@Injectable()
export class TreeService {
    private contacts: Contact[];

    constructor() {
        this.contacts =[{
                id:1,
                name: "Friends",
                type: Types.group,
                contacts: [
                    {id:2, name: "Udi", type: Types.contact, contacts:null},
                    {id:3, name: "Tommy", type: Types.contact, contacts:null},
                    {
                        id:6,
                        name: "Old Friends",
                        type: Types.group,
                        contacts: [
                            {id:7, name: "Itay", type: Types.contact,contacts:null},
                        ]
                    },
                ]
            },
            {
                id:4,
                name: "Family",
                type: Types.group,
                contacts: [
                    {id:5, name: "Roni", type: Types.contact,contacts:null},
                ]
            },
            {id: 8, name: "Ori", type: Types.contact,contacts:null},
        ];
    }

    public getTree() {
        return this.contacts;
    }
}