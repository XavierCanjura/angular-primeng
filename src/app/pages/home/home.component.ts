import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TimelineModule } from 'primeng/timeline';

@Component({
    standalone: true,
    imports: [CommonModule, CardModule, TableModule, TagModule, TimelineModule],
    selector: 'app-home',
    templateUrl: 'home.component.html'
})
export class HomeComponent {

    kpis = [
        { label: 'Total Revenue', value: '$48,295', trend: 12.5, icon: 'pi pi-dollar', bgClass: 'bg-primary-500' },
        { label: 'New Orders',   value: '1,240',   trend: 8.1,  icon: 'pi pi-shopping-cart', bgClass: 'bg-violet-500' },
        { label: 'Active Customers', value: '3,892',   trend: -2.4, icon: 'pi pi-users', bgClass: 'bg-amber-500' },
        { label: 'Conversion Rate',  value: '3.6%',    trend: 1.8,  icon: 'pi pi-chart-line', bgClass: 'bg-emerald-500' },
    ];

    activities = [
        { title: 'New Order #4521',       time: '5 min ago',  icon: 'pi pi-shopping-cart', bgClass: 'bg-primary-500' },
        { title: 'User María registered', time: '22 min ago', icon: 'pi pi-user-plus',     bgClass: 'bg-violet-500' },
        { title: 'Payment confirmed #4498',    time: '1 h ago',    icon: 'pi pi-check',         bgClass: 'bg-emerald-500' },
        { title: 'Return processed',     time: '3 h ago',    icon: 'pi pi-refresh',       bgClass: 'bg-amber-500' },
        { title: 'Report generated',         time: 'Yesterday',        icon: 'pi pi-file',          bgClass: 'bg-slate-400' },
    ];

    orders = [
        { id: 4521, client: 'Ana García',    product: 'MacBook Pro',  total: '2,499', status: 'Completed', severity: 'success'  },
        { id: 4520, client: 'Luis Martínez', product: 'iPhone 16',    total: '999',   status: 'In Progress',  severity: 'info'     },
        { id: 4519, client: 'Sara López',    product: 'AirPods Pro',  total: '249',   status: 'Pending',  severity: 'warn'     },
        { id: 4518, client: 'Pedro Ruiz',    product: 'iPad Air',     total: '799',   status: 'Completed', severity: 'success'  },
        { id: 4517, client: 'Marta Díaz',    product: 'Apple Watch',  total: '399',   status: 'Cancelled',  severity: 'danger'   },
        { id: 4516, client: 'Jorge Sánchez', product: 'Samsung TV',   total: '1,299', status: 'Completed', severity: 'success'  },
        { id: 4515, client: 'Elena Torres',  product: 'Sony PS5',     total: '549',   status: 'In Progress',  severity: 'info'     },
    ];
}