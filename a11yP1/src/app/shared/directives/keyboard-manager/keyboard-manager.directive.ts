import { ContentChildren, Directive, HostListener, QueryList } from "@angular/core";
import { KeyBoardManagedItemDirective } from "./keyboard-managed-item.directive";

@Directive({
    selector: '[appKm]'
})

export class KeyBoardManagerDirective {

    @ContentChildren(KeyBoardManagedItemDirective) 
        public items: QueryList<KeyBoardManagedItemDirective> = null;

    @HostListener('keyup', ['$event'])  

    public manageKeys(event: KeyboardEvent): void{
        switch (event.key){
            case 'ArrowUp':
                console.log("up");
                this.moveFocus(ArrowDirection.RIGHT).focus();
                break;
            case 'ArrowDown':
                console.log("down");
                this.moveFocus(ArrowDirection.LEFT).focus()
                break;
            case 'ArrowLeft':
                console.log('left');
                this.moveFocus(ArrowDirection.LEFT).focus()
                break;
            case 'ArrowRight':
                console.log('right');
                this.moveFocus(ArrowDirection.RIGHT).focus();
                break;
        }
    }

    public moveFocus(direction: ArrowDirection): KeyBoardManagedItemDirective {

        const items = this.items.toArray();
        const curentSelectedIndex = items.findIndex(item => item.isFocused());
        const targetElementFocus = items[curentSelectedIndex + direction];

        if (targetElementFocus){
            return targetElementFocus;
        }

        return direction === ArrowDirection.LEFT 
            ? items[items.length - 1] 
            : items[0];
    }
}

enum ArrowDirection{
    LEFT = -1,
    RIGHT = 1,
}