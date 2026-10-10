/**
 * Admin Dashboard JavaScript
 * Handles tab switching, search filtering, booking status toggle, and modal controls.
 */

function switchAdminTab(tabId) {
    const tabs = document.querySelectorAll('.admin-tab-content');
    tabs.forEach(tab => tab.classList.add('hidden'));

    const navLinks = document.querySelectorAll('.admin-nav-item');
    navLinks.forEach(link => {
        link.classList.remove('bg-amber-100', 'text-amber-900', 'font-semibold');
        link.classList.add('text-stone-600', 'hover:bg-stone-100');
    });

    const activeTab = document.getElementById(tabId);
    if (activeTab) {
        activeTab.classList.remove('hidden');
    }

    const activeNav = document.getElementById('nav-' + tabId);
    if (activeNav) {
        activeNav.classList.add('bg-amber-100', 'text-amber-900', 'font-semibold');
        activeNav.classList.remove('text-stone-600', 'hover:bg-stone-100');
    }
}

function toggleAdminSidebar() {
    const sidebar = document.getElementById('admin-sidebar');
    if (sidebar) {
        sidebar.classList.toggle('-translate-x-full');
    }
}

function filterBookings() {
    const input = document.getElementById('search-bookings');
    if (!input) return;
    const filter = input.value.toLowerCase();
    const rows = document.querySelectorAll('#bookings-table-body tr');

    rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        if (text.includes(filter)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

function openAddModal() {
    const modal = document.getElementById('admin-modal');
    if (modal) modal.classList.remove('hidden');
}

function closeAddModal() {
    const modal = document.getElementById('admin-modal');
    if (modal) modal.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
