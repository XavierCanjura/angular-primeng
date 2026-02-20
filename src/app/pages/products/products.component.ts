import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';

interface Product {
    name: string;
    category: string;
    price: string;
    stock: number;
    createdAt: string;
    active: boolean;
    icon: string;
    iconBg: string;
}

@Component({
    standalone: true,
    imports: [
        CommonModule, FormsModule,
        ButtonModule, CardModule,
        IconFieldModule, InputIconModule, InputTextModule,
        SelectModule, TableModule, TagModule, TooltipModule
    ],
    selector: 'app-products',
    templateUrl: 'products.component.html'
})
export class ProductsComponent {

    searchTerm = '';
    selectedCategory: string | null = null;
    selectedStatus: boolean | null = null;

    categoryOptions = [
        { label: 'Electronics',  value: 'Electrónica' },
        { label: 'Clothing',     value: 'Ropa' },
        { label: 'Home',         value: 'Hogar' },
        { label: 'Sports',       value: 'Deportes' },
    ];

    statusOptions = [
        { label: 'Active',   value: true },
        { label: 'Inactive', value: false },
    ];

    private readonly products: Product[] = [
        { name: 'MacBook Pro 14"',   category: 'Electronics', price: '2,499', stock: 15, createdAt: '01/01/2025', active: true,  icon: 'pi pi-desktop',   iconBg: '#0ea5e9' },
        { name: 'iPhone 16',         category: 'Electronics', price: '999',   stock: 32, createdAt: '10/01/2025', active: true,  icon: 'pi pi-mobile',    iconBg: '#8b5cf6' },
        { name: 'AirPods Pro',       category: 'Electronics', price: '249',   stock: 7,  createdAt: '15/01/2025', active: true,  icon: 'pi pi-headphones',iconBg: '#0ea5e9' },
        { name: 'Zapatillas Run X',  category: 'Sports',      price: '89',    stock: 54, createdAt: '20/01/2025', active: true,  icon: 'pi pi-bolt',      iconBg: '#10b981' },
        { name: 'Camiseta Básica',   category: 'Clothing',    price: '19',    stock: 120,createdAt: '25/01/2025', active: true,  icon: 'pi pi-tag',       iconBg: '#f59e0b' },
        { name: 'Sofá Modular',      category: 'Home',        price: '1,199', stock: 4,  createdAt: '01/02/2025', active: false, icon: 'pi pi-home',      iconBg: '#ef4444' },
        { name: 'Samsung TV 55"',    category: 'Electronics', price: '799',   stock: 9,  createdAt: '05/02/2025', active: true,  icon: 'pi pi-desktop',   iconBg: '#0ea5e9' },
        { name: 'Chaqueta Invierno', category: 'Clothing',    price: '129',   stock: 23, createdAt: '10/02/2025', active: true,  icon: 'pi pi-tag',       iconBg: '#f59e0b' },
        { name: 'Bicicleta MTB',     category: 'Sports',      price: '549',   stock: 6,  createdAt: '14/02/2025', active: true,  icon: 'pi pi-bolt',      iconBg: '#10b981' },
        { name: 'Lámpara LED',       category: 'Home',        price: '39',    stock: 75, createdAt: '18/02/2025', active: false, icon: 'pi pi-home',      iconBg: '#ef4444' },
    ];

    filteredProducts: Product[] = [...this.products];

    onSearch(): void {
        const term = this.searchTerm.toLowerCase();
        this.filteredProducts = this.products.filter(p => {
            const matchesText = !term ||
                p.name.toLowerCase().includes(term) ||
                p.category.toLowerCase().includes(term);
            const matchesCategory = !this.selectedCategory || p.category === this.selectedCategory;
            const matchesStatus   = this.selectedStatus === null || p.active === this.selectedStatus;
            return matchesText && matchesCategory && matchesStatus;
        });
    }
}
