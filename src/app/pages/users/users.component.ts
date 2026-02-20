import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';

interface User {
    name: string;
    email: string;
    role: string;
    roleSeverity: 'info' | 'success' | 'warn' | 'danger' | 'secondary';
    createdAt: string;
    active: boolean;
    initials: string;
    avatarColor: string;
}

@Component({
    standalone: true,
    imports: [
        FormsModule,
        AvatarModule, ButtonModule, CardModule,
        IconFieldModule, InputIconModule, InputTextModule,
        SelectModule, TableModule, TagModule, TooltipModule
    ],
    selector: 'app-users',
    templateUrl: 'users.component.html'
})
export class UsersComponent {

    searchTerm = '';
    selectedRole: string | null = null;
    selectedStatus: boolean | null = null;

    roleOptions = [
        { label: 'Admin',    value: 'Admin' },
        { label: 'Editor',   value: 'Editor' },
        { label: 'Viewer',   value: 'Viewer' },
    ];

    statusOptions = [
        { label: 'Active',   value: true },
        { label: 'Inactive', value: false },
    ];

    private readonly users: User[] = [
        { name: 'Ana García',      email: 'ana.garcia@mail.com',    role: 'Admin',  roleSeverity: 'danger',    createdAt: '01/01/2025', active: true,  initials: 'AG', avatarColor: '#0ea5e9' },
        { name: 'Luis Martínez',   email: 'luis.martinez@mail.com', role: 'Editor', roleSeverity: 'info',      createdAt: '15/01/2025', active: true,  initials: 'LM', avatarColor: '#8b5cf6' },
        { name: 'Sara López',      email: 'sara.lopez@mail.com',    role: 'Viewer', roleSeverity: 'secondary', createdAt: '20/01/2025', active: false, initials: 'SL', avatarColor: '#f59e0b' },
        { name: 'Pedro Ruiz',      email: 'pedro.ruiz@mail.com',    role: 'Editor', roleSeverity: 'info',      createdAt: '03/02/2025', active: true,  initials: 'PR', avatarColor: '#10b981' },
        { name: 'Marta Díaz',      email: 'marta.diaz@mail.com',    role: 'Viewer', roleSeverity: 'secondary', createdAt: '10/02/2025', active: true,  initials: 'MD', avatarColor: '#ef4444' },
        { name: 'Jorge Sánchez',   email: 'jorge.sanchez@mail.com', role: 'Admin',  roleSeverity: 'danger',    createdAt: '14/02/2025', active: false, initials: 'JS', avatarColor: '#0ea5e9' },
        { name: 'Elena Torres',    email: 'elena.torres@mail.com',  role: 'Editor', roleSeverity: 'info',      createdAt: '18/02/2025', active: true,  initials: 'ET', avatarColor: '#8b5cf6' },
        { name: 'Carlos Vega',     email: 'carlos.vega@mail.com',   role: 'Viewer', roleSeverity: 'secondary', createdAt: '01/03/2025', active: true,  initials: 'CV', avatarColor: '#f59e0b' },
        { name: 'Isabel Moreno',   email: 'isabel.moreno@mail.com', role: 'Editor', roleSeverity: 'info',      createdAt: '05/03/2025', active: false, initials: 'IM', avatarColor: '#10b981' },
        { name: 'Roberto Jiménez', email: 'roberto.j@mail.com',     role: 'Viewer', roleSeverity: 'secondary', createdAt: '12/03/2025', active: true,  initials: 'RJ', avatarColor: '#ef4444' },
    ];

    filteredUsers: User[] = [...this.users];

    onSearch(): void {
        const term = this.searchTerm.toLowerCase();
        this.filteredUsers = this.users.filter(u => {
            const matchesText = !term ||
                u.name.toLowerCase().includes(term) ||
                u.email.toLowerCase().includes(term) ||
                u.role.toLowerCase().includes(term);
            const matchesRole   = !this.selectedRole   || u.role === this.selectedRole;
            const matchesStatus = this.selectedStatus === null || u.active === this.selectedStatus;
            return matchesText && matchesRole && matchesStatus;
        });
    }
}