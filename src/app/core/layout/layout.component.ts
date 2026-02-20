import { Component, signal } from '@angular/core';

import { DrawerModule } from 'primeng/drawer';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';

@Component({
    imports: [DrawerModule, MenubarModule, RippleModule, RouterLink, RouterLinkActive, CommonModule, AvatarModule],
    selector: 'app-layout',
    templateUrl: 'layout.component.html'
})

export class LayoutComponent {
    readonly visible = signal<boolean>(true);
    
    
}