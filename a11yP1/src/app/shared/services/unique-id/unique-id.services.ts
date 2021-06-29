import { Injectable } from "@angular/core";

import * as uuid from 'uuid'

@Injectable({ providedIn: 'root'})

export class UniqueIdServices {

    public generateUniqueIdWidthPrefix(prefix: string): string{
        const uniqueId = this.generateUniqueId();
        return `${prefix}-${uniqueId}`;
    }

    private generateUniqueId(){
        return uuid.v1();
    }
}