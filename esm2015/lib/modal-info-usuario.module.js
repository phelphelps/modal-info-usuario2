import { NgModule } from '@angular/core';
import { ModalInfoUsuarioComponent } from './modal-info-usuario.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
export class ModalInfoUsuarioModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtaW5mby11c3VhcmlvLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21vZGFsLWluZm8tdXN1YXJpby8iLCJzb3VyY2VzIjpbImxpYi9tb2RhbC1pbmZvLXVzdWFyaW8ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQVMzRCxNQUFNOzs7WUFQTCxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxlQUFlO2lCQUM3RjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDekMsT0FBTyxFQUFFLENBQUMseUJBQXlCLENBQUM7YUFDckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxJbmZvVXN1YXJpb0NvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwtaW5mby11c3VhcmlvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRMaXN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBGbGV4TGF5b3V0TW9kdWxlLCBNYXRJY29uTW9kdWxlLCBNYXRMaXN0TW9kdWxlLCBNYXRDYXJkTW9kdWxlLCBDb21tb25Nb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtNb2RhbEluZm9Vc3VhcmlvQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW01vZGFsSW5mb1VzdWFyaW9Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsSW5mb1VzdWFyaW9Nb2R1bGUgeyB9XG4iXX0=