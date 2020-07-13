import { Component, Input } from '@angular/core';
export class ModalInfoUsuarioComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtaW5mby11c3VhcmlvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21vZGFsLWluZm8tdXN1YXJpby8iLCJzb3VyY2VzIjpbImxpYi9tb2RhbC1pbmZvLXVzdWFyaW8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWtCLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXlHakUsTUFBTTtJQVVKLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxTQUFTLFlBQVksS0FBSyxFQUFFO1lBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDL0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ2xHLE9BQU8sUUFBUSxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7WUExSEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFrR0c7Z0JBQ2IsTUFBTSxFQUFFLENBQUMsMG9CQUEwb0IsQ0FBQzthQUNycEI7Ozs7MkJBR0UsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7NEJBQ0wsS0FBSztxQkFDTCxLQUFLO3dCQUNMLEtBQUs7c0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ01vZGFsSW5mb1VzdWFyaW8nLFxuICB0ZW1wbGF0ZTogYDxzZWN0aW9uPlxyXG4gIDxkaXYgY2xhc3M9XCJjYWJlY2FsaG9cIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvckNhYmVjYWxob31cIj5cclxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uPlxyXG4gICAgICA8bWF0LWljb24+Y2xvc2U8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRHYXA9XCIxNnB4XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvdG9NaW5pYXR1cmE7IHRoZW4gZm90b1RlbXBsYXRlOyBlbHNlIGZvdG9WYXppb1RlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICB7eyB1c3VhcmlvPy51c3VhX25vbWUgfX1cclxuICAgICAgPC9oMz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZXVkb1wiPlxyXG4gICAgPG1hdC1jYXJkIGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRHYXA9XCIxNnB4XCI+XHJcbiAgICAgIDxtYXQtbGlzdD5cclxuICAgICAgICA8ZGl2IG1hdC1zdWJoZWFkZXI+RGFkb3MgYsOhc2ljb3M8L2Rpdj5cclxuICAgICAgICA8bWF0LWxpc3QtaXRlbT5cclxuICAgICAgICAgIDxtYXQtaWNvbiBtYXQtbGlzdC1pY29uPnBlcnNvbjwvbWF0LWljb24+XHJcbiAgICAgICAgICA8cCBtYXQtbGluZT5cclxuICAgICAgICAgICAgUGVyZmlzXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwicGVyZmlzXCIgbWF0LWxpbmU+XHJcbiAgICAgICAgICAgIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEdhcD1cIjhweFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuICpuZ0Zvcj1cImxldCBwZXJmaWwgb2YgcGVyZmlzOyBsZXQgdWx0aW1vSXRlbSA9IGxhc3RcIj5cclxuICAgICAgICAgICAgICAgIHt7IHBlcmZpbC5pbnN0aXR1aWNhb19wZXJmaWwucGVyZl9kZXNjcmljYW8gfX17eyB1bHRpbW9JdGVtID8gJycgOiAnLCcgfX1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYXQtbGlzdC1pdGVtPlxyXG4gICAgICAgIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxyXG4gICAgICAgIDxtYXQtbGlzdC1pdGVtPlxyXG4gICAgICAgICAgPG1hdC1pY29uIG1hdC1saXN0LWljb24+ZW1haWw8L21hdC1pY29uPlxyXG4gICAgICAgICAgPHAgbWF0LWxpbmU+XHJcbiAgICAgICAgICAgIEUtbWFpbFxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGRpdiBtYXQtbGluZT5cclxuICAgICAgICAgICAge3sgZW1haWwgfX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWF0LWxpc3QtaXRlbT5cclxuICAgICAgICA8bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cclxuICAgICAgICA8bWF0LWxpc3QtaXRlbT5cclxuICAgICAgICAgIDxtYXQtaWNvbiBtYXQtbGlzdC1pY29uPnBob25lPC9tYXQtaWNvbj5cclxuICAgICAgICAgIDxwIG1hdC1saW5lPlxyXG4gICAgICAgICAgICBUZWxlZm9uZShzKVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGRpdiBtYXQtbGluZT5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInVzdWFyaW8/LnRlbGVmb25lcz8ubGVuZ3RoID4gMDsgdGhlbiB0ZWxlZm9uZVRlbXBsYXRlOyBlbHNlIHRlbGVmb25lVmF6aW9UZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWF0LWxpc3QtaXRlbT5cclxuICAgICAgPC9tYXQtbGlzdD5cclxuICAgICAgPG1hdC1saXN0PlxyXG4gICAgICAgIDxkaXYgbWF0LXN1YmhlYWRlcj5SZXNwb25zw6F2ZWwgcG9yPC9kaXY+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpbGhvcy5sZW5ndGggPiAwOyB0aGVuIGZpbGhvc1RlbXBsYXRlOyBlbHNlIGZpbGhvc1ZhemlvVGVtcGxhdGVcIj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9tYXQtbGlzdD5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgPC9kaXY+XHJcbjwvc2VjdGlvbj5cclxuXHJcbjwhLS0gdGVtcGxhdGVzIC0tPlxyXG48bmctdGVtcGxhdGUgI3RlbGVmb25lVGVtcGxhdGU+XHJcbiAgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0R2FwPVwiOHB4XCI+XHJcbiAgICA8c3BhbiAqbmdGb3I9XCJsZXQgdGVsZWZvbmUgb2YgdGVsZWZvbmVzOyBsZXQgdWx0aW1vSXRlbSA9IGxhc3RcIj5cclxuICAgICAge3sgdGVsZWZvbmU/LmNvbXBsZXRvIH19e3sgdWx0aW1vSXRlbSA/ICcnIDogJywnIH19XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI3RlbGVmb25lVmF6aW9UZW1wbGF0ZT5cclxuICBOZW5odW0gbsO6bWVybyBkZSB0ZWxlZm9uZSBjYWRhc3RyYWRvLlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICNmb3RvVGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImZvdG9cIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmRJbWFnZSc6ICd1cmwoJyArIHVzdWFyaW8udXN1YV9mb3RvX21pbmlhdHVyYSArICcpJ31cIj48L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjZm90b1ZhemlvVGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImZvdG9cIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgPG1hdC1pY29uPnBlcnNvbjwvbWF0LWljb24+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI2ZpbGhvc1RlbXBsYXRlPlxyXG4gIDxkaXYgKm5nRm9yPVwibGV0IGZpbGhvIG9mIGZpbGhvczsgbGV0IHVsdGltb0l0ZW0gPSBsYXN0XCI+XHJcbiAgICA8bWF0LWxpc3QtaXRlbT5cclxuICAgICAgPG1hdC1pY29uIG1hdC1saXN0LWljb24+ZmFjZTwvbWF0LWljb24+XHJcbiAgICAgIDxkaXYgbWF0LWxpbmU+e3sgZmlsaG8/LmlkX3VzdWFyaW8/LnVzdWFfbm9tZSB9fTwvZGl2PlxyXG4gICAgICA8ZGl2IG1hdC1saW5lPk1hdHLDrWN1bGE6IHt7IGZpbGhvPy5pbnN0X3VzdWFfY29kaWdvIH19PC9kaXY+XHJcbiAgICA8L21hdC1saXN0LWl0ZW0+XHJcbiAgICA8bWF0LWRpdmlkZXIgKm5nSWY9XCIhdWx0aW1vSXRlbVwiPjwvbWF0LWRpdmlkZXI+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI2ZpbGhvc1ZhemlvVGVtcGxhdGU+XHJcbiAgPG1hdC1saXN0LWl0ZW0+XHJcbiAgICA8ZGl2IG1hdC1saW5lPk5lbmh1bSBmaWxoby48L2Rpdj5cclxuICA8L21hdC1saXN0LWl0ZW0+XHJcbjwvbmctdGVtcGxhdGU+YCxcbiAgc3R5bGVzOiBbYC5jYWJlY2FsaG97d2lkdGg6MTAwJTtoZWlnaHQ6MjAwcHg7cG9zaXRpb246cmVsYXRpdmV9LmNhYmVjYWxobyBidXR0b257cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MTZweDt0b3A6MTZweDtjb2xvcjojZmZmfS5jYWJlY2FsaG8gLmZvdG97d2lkdGg6NjRweDtoZWlnaHQ6NjRweDtib3JkZXItcmFkaXVzOjUwJTttYXJnaW4tdG9wOi00MHB4O2JhY2tncm91bmQtY29sb3I6I2YwZjBmMDtiYWNrZ3JvdW5kLXNpemU6Y292ZXI7YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7Ym94LXNoYWRvdzowIDJweCA0cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDRweCA1cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKX0uY2FiZWNhbGhvIC5mb3RvIC5tYXQtaWNvbnt3aWR0aDozMnB4O2hlaWdodDozMnB4O2ZvbnQtc2l6ZTozMnB4O2NvbG9yOmdyZXl9LmNhYmVjYWxobyBoM3ttYXJnaW46MDtjb2xvcjojZmZmO3RleHQtdHJhbnNmb3JtOmNhcGl0YWxpemV9LmNvbnRldWRve3BhZGRpbmc6MTZweDttYXJnaW4tdG9wOi01NnB4fS5jb250ZXVkbyAubWF0LWxpc3QtYmFzZXtwYWRkaW5nOjB9LmNvbnRldWRvIHAubWF0LWxpbmV7bWFyZ2luLWJvdHRvbTo4cHh9LmNvbnRldWRvIC5tYXQtaWNvbntjb2xvcjpncmV5fWBdXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsSW5mb1VzdWFyaW9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGNvckNhYmVjYWxobzogc3RyaW5nO1xuICBASW5wdXQoKSBlbWFpbDogc3RyaW5nO1xuICBASW5wdXQoKSBmaWxob3M6IChhbnkpW107XG4gIEBJbnB1dCgpIGZvdG9NaW5pYXR1cmE6IHN0cmluZztcbiAgQElucHV0KCkgcGVyZmlzOiAoYW55KVtdO1xuICBASW5wdXQoKSB0ZWxlZm9uZXM6IGFueTtcbiAgQElucHV0KCkgdXN1YXJpbzogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMudGVsZWZvbmVzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIHRoaXMudGVsZWZvbmVzID0gdGhpcy50ZWxlZm9uZXMubWFwKCh0ZWxlZm9uZSkgPT4ge1xuICAgICAgICB0ZWxlZm9uZVsnY29tcGxldG8nXSA9IFN0cmluZyh0ZWxlZm9uZS51c3VhX2ZvbmVfY29kaWdvX2FyZWEpICsgU3RyaW5nKHRlbGVmb25lLnVzdWFfZm9uZV9udW1lcm8pO1xuICAgICAgICByZXR1cm4gdGVsZWZvbmU7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuIl19