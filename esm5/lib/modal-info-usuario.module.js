import { NgModule } from '@angular/core';
import { ModalInfoUsuarioComponent } from './modal-info-usuario.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
var ModalInfoUsuarioModule = /** @class */ (function () {
    function ModalInfoUsuarioModule() {
    }
    ModalInfoUsuarioModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FlexLayoutModule, MatIconModule, MatListModule, MatCardModule, CommonModule, MatButtonModule
                    ],
                    declarations: [ModalInfoUsuarioComponent],
                    exports: [ModalInfoUsuarioComponent]
                },] },
    ];
    return ModalInfoUsuarioModule;
}());
export { ModalInfoUsuarioModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtaW5mby11c3VhcmlvLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21vZGFsLWluZm8tdXN1YXJpby8iLCJzb3VyY2VzIjpbImxpYi9tb2RhbC1pbmZvLXVzdWFyaW8ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUUzRDtJQUFBO0lBT3NDLENBQUM7O2dCQVB0QyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxlQUFlO3FCQUM3RjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztvQkFDekMsT0FBTyxFQUFFLENBQUMseUJBQXlCLENBQUM7aUJBQ3JDOztJQUNxQyw2QkFBQztDQUFBLEFBUHZDLElBT3VDO1NBQTFCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbEluZm9Vc3VhcmlvQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC1pbmZvLXVzdWFyaW8uY29tcG9uZW50JztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdExpc3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9saXN0JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRDYXJkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEZsZXhMYXlvdXRNb2R1bGUsIE1hdEljb25Nb2R1bGUsIE1hdExpc3RNb2R1bGUsIE1hdENhcmRNb2R1bGUsIENvbW1vbk1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW01vZGFsSW5mb1VzdWFyaW9Db21wb25lbnRdLFxuICBleHBvcnRzOiBbTW9kYWxJbmZvVXN1YXJpb0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxJbmZvVXN1YXJpb01vZHVsZSB7IH1cbiJdfQ==