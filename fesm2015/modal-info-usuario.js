import { Injectable, Component, Input, NgModule, defineInjectable } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

class ModalInfoUsuarioService {
    constructor() { }
}
ModalInfoUsuarioService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
ModalInfoUsuarioService.ctorParameters = () => [];
ModalInfoUsuarioService.ngInjectableDef = defineInjectable({ factory: function ModalInfoUsuarioService_Factory() { return new ModalInfoUsuarioService(); }, token: ModalInfoUsuarioService, providedIn: "root" });

class ModalInfoUsuarioComponent {
    constructor() { }
    ngOnInit() {
        if (this.telefones instanceof Array) {
            this.telefones = this.telefones.map((telefone) => {
                telefone['completo'] = String(telefone.usua_fone_codigo_area) + String(telefone.usua_fone_numero);
                return telefone;
            });
        }
    }
}
ModalInfoUsuarioComponent.decorators = [
    { type: Component, args: [{
                selector: 'ModalInfoUsuario',
                template: `<section>
  <div class="cabecalho" fxLayoutAlign="center center" [ngStyle]="{'background-color': corCabecalho}">
    <button mat-icon-button>
      <mat-icon>close</mat-icon>
    </button>
    <div fxLayout="column" fxLayoutGap="16px" fxLayoutAlign="center center">
      <ng-container *ngIf="fotoMiniatura; then fotoTemplate; else fotoVazioTemplate"></ng-container>
      <h3>
        {{ usuario?.usua_nome }}
      </h3>
    </div>
  </div>
  <div class="conteudo">
    <mat-card fxLayout="column" fxLayoutGap="16px">
      <mat-list>
        <div mat-subheader>Dados básicos</div>
        <mat-list-item>
          <mat-icon mat-list-icon>person</mat-icon>
          <p mat-line>
            Perfis
          </p>
          <div *ngIf="perfis" mat-line>
            <div fxLayout="row" fxLayoutGap="8px">
              <span *ngFor="let perfil of perfis; let ultimoItem = last">
                {{ perfil.instituicao_perfil.perf_descricao }}{{ ultimoItem ? '' : ',' }}
              </span>
            </div>
          </div>
        </mat-list-item>
        <mat-divider></mat-divider>
        <mat-list-item>
          <mat-icon mat-list-icon>email</mat-icon>
          <p mat-line>
            E-mail
          </p>
          <div mat-line>
            {{ email }}
          </div>
        </mat-list-item>
        <mat-divider></mat-divider>
        <mat-list-item>
          <mat-icon mat-list-icon>phone</mat-icon>
          <p mat-line>
            Telefone(s)
          </p>
          <div mat-line>
            <ng-container *ngIf="usuario?.telefones?.length > 0; then telefoneTemplate; else telefoneVazioTemplate">
            </ng-container>
          </div>
        </mat-list-item>
      </mat-list>
      <mat-list>
        <div mat-subheader>Responsável por</div>
        <ng-container *ngIf="filhos.length > 0; then filhosTemplate; else filhosVazioTemplate">
        </ng-container>
      </mat-list>
    </mat-card>
  </div>
</section>

<!-- templates -->
<ng-template #telefoneTemplate>
  <div fxLayout="row" fxLayoutGap="8px">
    <span *ngFor="let telefone of telefones; let ultimoItem = last">
      {{ telefone?.completo }}{{ ultimoItem ? '' : ',' }}
    </span>
  </div>
</ng-template>

<ng-template #telefoneVazioTemplate>
  Nenhum número de telefone cadastrado.
</ng-template>

<ng-template #fotoTemplate>
  <div class="foto" [ngStyle]="{'backgroundImage': 'url(' + usuario.usua_foto_miniatura + ')'}"></div>
</ng-template>

<ng-template #fotoVazioTemplate>
  <div class="foto" fxLayoutAlign="center center">
    <mat-icon>person</mat-icon>
  </div>
</ng-template>

<ng-template #filhosTemplate>
  <div *ngFor="let filho of filhos; let ultimoItem = last">
    <mat-list-item>
      <mat-icon mat-list-icon>face</mat-icon>
      <div mat-line>{{ filho?.id_usuario?.usua_nome }}</div>
      <div mat-line>Matrícula: {{ filho?.inst_usua_codigo }}</div>
    </mat-list-item>
    <mat-divider *ngIf="!ultimoItem"></mat-divider>
  </div>
</ng-template>

<ng-template #filhosVazioTemplate>
  <mat-list-item>
    <div mat-line>Nenhum filho.</div>
  </mat-list-item>
</ng-template>`,
                styles: [`.cabecalho{width:100%;height:200px;position:relative}.cabecalho button{position:absolute;right:16px;top:16px;color:#fff}.cabecalho .foto{width:64px;height:64px;border-radius:50%;margin-top:-40px;background-color:#f0f0f0;background-size:cover;background-position:center;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.cabecalho .foto .mat-icon{width:32px;height:32px;font-size:32px;color:grey}.cabecalho h3{margin:0;color:#fff;text-transform:capitalize}.conteudo{padding:16px;margin-top:-56px}.conteudo .mat-list-base{padding:0}.conteudo p.mat-line{margin-bottom:8px}.conteudo .mat-icon{color:grey}`]
            },] },
];
ModalInfoUsuarioComponent.ctorParameters = () => [];
ModalInfoUsuarioComponent.propDecorators = {
    corCabecalho: [{ type: Input }],
    email: [{ type: Input }],
    filhos: [{ type: Input }],
    fotoMiniatura: [{ type: Input }],
    perfis: [{ type: Input }],
    telefones: [{ type: Input }],
    usuario: [{ type: Input }]
};

class ModalInfoUsuarioModule {
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

/*
 * Public API Surface of modal-info-usuario
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ModalInfoUsuarioService, ModalInfoUsuarioComponent, ModalInfoUsuarioModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtaW5mby11c3VhcmlvLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9tb2RhbC1pbmZvLXVzdWFyaW8vbGliL21vZGFsLWluZm8tdXN1YXJpby5zZXJ2aWNlLnRzIiwibmc6Ly9tb2RhbC1pbmZvLXVzdWFyaW8vbGliL21vZGFsLWluZm8tdXN1YXJpby5jb21wb25lbnQudHMiLCJuZzovL21vZGFsLWluZm8tdXN1YXJpby9saWIvbW9kYWwtaW5mby11c3VhcmlvLm1vZHVsZS50cyIsIm5nOi8vbW9kYWwtaW5mby11c3VhcmlvL3B1YmxpY19hcGkudHMiLCJuZzovL21vZGFsLWluZm8tdXN1YXJpby9tb2RhbC1pbmZvLXVzdWFyaW8udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNb2RhbEluZm9Vc3VhcmlvU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ01vZGFsSW5mb1VzdWFyaW8nLFxuICB0ZW1wbGF0ZTogYDxzZWN0aW9uPlxyXG4gIDxkaXYgY2xhc3M9XCJjYWJlY2FsaG9cIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvckNhYmVjYWxob31cIj5cclxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uPlxyXG4gICAgICA8bWF0LWljb24+Y2xvc2U8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRHYXA9XCIxNnB4XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvdG9NaW5pYXR1cmE7IHRoZW4gZm90b1RlbXBsYXRlOyBlbHNlIGZvdG9WYXppb1RlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICB7eyB1c3VhcmlvPy51c3VhX25vbWUgfX1cclxuICAgICAgPC9oMz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZXVkb1wiPlxyXG4gICAgPG1hdC1jYXJkIGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRHYXA9XCIxNnB4XCI+XHJcbiAgICAgIDxtYXQtbGlzdD5cclxuICAgICAgICA8ZGl2IG1hdC1zdWJoZWFkZXI+RGFkb3MgYsODwqFzaWNvczwvZGl2PlxyXG4gICAgICAgIDxtYXQtbGlzdC1pdGVtPlxyXG4gICAgICAgICAgPG1hdC1pY29uIG1hdC1saXN0LWljb24+cGVyc29uPC9tYXQtaWNvbj5cclxuICAgICAgICAgIDxwIG1hdC1saW5lPlxyXG4gICAgICAgICAgICBQZXJmaXNcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxkaXYgKm5nSWY9XCJwZXJmaXNcIiBtYXQtbGluZT5cclxuICAgICAgICAgICAgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0R2FwPVwiOHB4XCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gKm5nRm9yPVwibGV0IHBlcmZpbCBvZiBwZXJmaXM7IGxldCB1bHRpbW9JdGVtID0gbGFzdFwiPlxyXG4gICAgICAgICAgICAgICAge3sgcGVyZmlsLmluc3RpdHVpY2FvX3BlcmZpbC5wZXJmX2Rlc2NyaWNhbyB9fXt7IHVsdGltb0l0ZW0gPyAnJyA6ICcsJyB9fVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21hdC1saXN0LWl0ZW0+XHJcbiAgICAgICAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XHJcbiAgICAgICAgPG1hdC1saXN0LWl0ZW0+XHJcbiAgICAgICAgICA8bWF0LWljb24gbWF0LWxpc3QtaWNvbj5lbWFpbDwvbWF0LWljb24+XHJcbiAgICAgICAgICA8cCBtYXQtbGluZT5cclxuICAgICAgICAgICAgRS1tYWlsXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8ZGl2IG1hdC1saW5lPlxyXG4gICAgICAgICAgICB7eyBlbWFpbCB9fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYXQtbGlzdC1pdGVtPlxyXG4gICAgICAgIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxyXG4gICAgICAgIDxtYXQtbGlzdC1pdGVtPlxyXG4gICAgICAgICAgPG1hdC1pY29uIG1hdC1saXN0LWljb24+cGhvbmU8L21hdC1pY29uPlxyXG4gICAgICAgICAgPHAgbWF0LWxpbmU+XHJcbiAgICAgICAgICAgIFRlbGVmb25lKHMpXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8ZGl2IG1hdC1saW5lPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidXN1YXJpbz8udGVsZWZvbmVzPy5sZW5ndGggPiAwOyB0aGVuIHRlbGVmb25lVGVtcGxhdGU7IGVsc2UgdGVsZWZvbmVWYXppb1RlbXBsYXRlXCI+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYXQtbGlzdC1pdGVtPlxyXG4gICAgICA8L21hdC1saXN0PlxyXG4gICAgICA8bWF0LWxpc3Q+XHJcbiAgICAgICAgPGRpdiBtYXQtc3ViaGVhZGVyPlJlc3BvbnPDg8KhdmVsIHBvcjwvZGl2PlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWxob3MubGVuZ3RoID4gMDsgdGhlbiBmaWxob3NUZW1wbGF0ZTsgZWxzZSBmaWxob3NWYXppb1RlbXBsYXRlXCI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbWF0LWxpc3Q+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZGl2PlxyXG48L3NlY3Rpb24+XHJcblxyXG48IS0tIHRlbXBsYXRlcyAtLT5cclxuPG5nLXRlbXBsYXRlICN0ZWxlZm9uZVRlbXBsYXRlPlxyXG4gIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEdhcD1cIjhweFwiPlxyXG4gICAgPHNwYW4gKm5nRm9yPVwibGV0IHRlbGVmb25lIG9mIHRlbGVmb25lczsgbGV0IHVsdGltb0l0ZW0gPSBsYXN0XCI+XHJcbiAgICAgIHt7IHRlbGVmb25lPy5jb21wbGV0byB9fXt7IHVsdGltb0l0ZW0gPyAnJyA6ICcsJyB9fVxyXG4gICAgPC9zcGFuPlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICN0ZWxlZm9uZVZhemlvVGVtcGxhdGU+XHJcbiAgTmVuaHVtIG7Dg8K6bWVybyBkZSB0ZWxlZm9uZSBjYWRhc3RyYWRvLlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICNmb3RvVGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImZvdG9cIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmRJbWFnZSc6ICd1cmwoJyArIHVzdWFyaW8udXN1YV9mb3RvX21pbmlhdHVyYSArICcpJ31cIj48L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjZm90b1ZhemlvVGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImZvdG9cIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgPG1hdC1pY29uPnBlcnNvbjwvbWF0LWljb24+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI2ZpbGhvc1RlbXBsYXRlPlxyXG4gIDxkaXYgKm5nRm9yPVwibGV0IGZpbGhvIG9mIGZpbGhvczsgbGV0IHVsdGltb0l0ZW0gPSBsYXN0XCI+XHJcbiAgICA8bWF0LWxpc3QtaXRlbT5cclxuICAgICAgPG1hdC1pY29uIG1hdC1saXN0LWljb24+ZmFjZTwvbWF0LWljb24+XHJcbiAgICAgIDxkaXYgbWF0LWxpbmU+e3sgZmlsaG8/LmlkX3VzdWFyaW8/LnVzdWFfbm9tZSB9fTwvZGl2PlxyXG4gICAgICA8ZGl2IG1hdC1saW5lPk1hdHLDg8KtY3VsYToge3sgZmlsaG8/Lmluc3RfdXN1YV9jb2RpZ28gfX08L2Rpdj5cclxuICAgIDwvbWF0LWxpc3QtaXRlbT5cclxuICAgIDxtYXQtZGl2aWRlciAqbmdJZj1cIiF1bHRpbW9JdGVtXCI+PC9tYXQtZGl2aWRlcj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjZmlsaG9zVmF6aW9UZW1wbGF0ZT5cclxuICA8bWF0LWxpc3QtaXRlbT5cclxuICAgIDxkaXYgbWF0LWxpbmU+TmVuaHVtIGZpbGhvLjwvZGl2PlxyXG4gIDwvbWF0LWxpc3QtaXRlbT5cclxuPC9uZy10ZW1wbGF0ZT5gLFxuICBzdHlsZXM6IFtgLmNhYmVjYWxob3t3aWR0aDoxMDAlO2hlaWdodDoyMDBweDtwb3NpdGlvbjpyZWxhdGl2ZX0uY2FiZWNhbGhvIGJ1dHRvbntwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDoxNnB4O3RvcDoxNnB4O2NvbG9yOiNmZmZ9LmNhYmVjYWxobyAuZm90b3t3aWR0aDo2NHB4O2hlaWdodDo2NHB4O2JvcmRlci1yYWRpdXM6NTAlO21hcmdpbi10b3A6LTQwcHg7YmFja2dyb3VuZC1jb2xvcjojZjBmMGYwO2JhY2tncm91bmQtc2l6ZTpjb3ZlcjtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtib3gtc2hhZG93OjAgMnB4IDRweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNHB4IDVweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpfS5jYWJlY2FsaG8gLmZvdG8gLm1hdC1pY29ue3dpZHRoOjMycHg7aGVpZ2h0OjMycHg7Zm9udC1zaXplOjMycHg7Y29sb3I6Z3JleX0uY2FiZWNhbGhvIGgze21hcmdpbjowO2NvbG9yOiNmZmY7dGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZX0uY29udGV1ZG97cGFkZGluZzoxNnB4O21hcmdpbi10b3A6LTU2cHh9LmNvbnRldWRvIC5tYXQtbGlzdC1iYXNle3BhZGRpbmc6MH0uY29udGV1ZG8gcC5tYXQtbGluZXttYXJnaW4tYm90dG9tOjhweH0uY29udGV1ZG8gLm1hdC1pY29ue2NvbG9yOmdyZXl9YF1cbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxJbmZvVXN1YXJpb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgY29yQ2FiZWNhbGhvOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGVtYWlsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZpbGhvczogKGFueSlbXTtcbiAgQElucHV0KCkgZm90b01pbmlhdHVyYTogc3RyaW5nO1xuICBASW5wdXQoKSBwZXJmaXM6IChhbnkpW107XG4gIEBJbnB1dCgpIHRlbGVmb25lczogYW55O1xuICBASW5wdXQoKSB1c3VhcmlvOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy50ZWxlZm9uZXMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgdGhpcy50ZWxlZm9uZXMgPSB0aGlzLnRlbGVmb25lcy5tYXAoKHRlbGVmb25lKSA9PiB7XG4gICAgICAgIHRlbGVmb25lWydjb21wbGV0byddID0gU3RyaW5nKHRlbGVmb25lLnVzdWFfZm9uZV9jb2RpZ29fYXJlYSkgKyBTdHJpbmcodGVsZWZvbmUudXN1YV9mb25lX251bWVybyk7XG4gICAgICAgIHJldHVybiB0ZWxlZm9uZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxJbmZvVXN1YXJpb0NvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwtaW5mby11c3VhcmlvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRMaXN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBGbGV4TGF5b3V0TW9kdWxlLCBNYXRJY29uTW9kdWxlLCBNYXRMaXN0TW9kdWxlLCBNYXRDYXJkTW9kdWxlLCBDb21tb25Nb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtNb2RhbEluZm9Vc3VhcmlvQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW01vZGFsSW5mb1VzdWFyaW9Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsSW5mb1VzdWFyaW9Nb2R1bGUgeyB9XG4iLCIvKlxuICogUHVibGljIEFQSSBTdXJmYWNlIG9mIG1vZGFsLWluZm8tdXN1YXJpb1xuICovXG5cbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGFsLWluZm8tdXN1YXJpby5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGFsLWluZm8tdXN1YXJpby5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbW9kYWwtaW5mby11c3VhcmlvLm1vZHVsZSc7XG4iLCIvKipcbiAqIEdlbmVyYXRlZCBidW5kbGUgaW5kZXguIERvIG5vdCBlZGl0LlxuICovXG5cbmV4cG9ydCAqIGZyb20gJy4vcHVibGljX2FwaSc7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBT0UsaUJBQWlCOzs7WUFMbEIsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7SUMrR0MsaUJBQWlCO0lBRWpCLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxTQUFTLFlBQVksS0FBSyxFQUFFO1lBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRO2dCQUMzQyxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDbEcsT0FBTyxRQUFRLENBQUM7YUFDakIsQ0FBQyxDQUFDO1NBQ0o7S0FDRjs7O1lBMUhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBa0dHO2dCQUNiLE1BQU0sRUFBRSxDQUFDLDBvQkFBMG9CLENBQUM7YUFDcnBCOzs7OzJCQUdFLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLOzRCQUNMLEtBQUs7cUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3NCQUNMLEtBQUs7Ozs7OztZQ3hHUCxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxlQUFlO2lCQUM3RjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDekMsT0FBTyxFQUFFLENBQUMseUJBQXlCLENBQUM7YUFDckM7OztBQ2ZEOztHQUVHOztBQ0ZIOztHQUVHOzs7OyJ9