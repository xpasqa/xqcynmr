// components/sidebar.js
// Call renderSidebar('sidebar-container') to render sidebar into a page container
(function (global) {
  'use strict';

  // Add hover effect styles
  if (!document.getElementById('sidebar-hover-styles')) {
    const hoverStyles = document.createElement('style');
    hoverStyles.id = 'sidebar-hover-styles';
    hoverStyles.textContent = `
      .menu-item-hover {
        transition: all 0.2s ease;
      }

      .menu-item-hover:hover {
        background: linear-gradient(90deg, rgba(220, 38, 38, 0.15), rgba(220, 38, 38, 0.05));
        border-right: 3px solid #DC2626;
        transform: translateX(3px);
        box-shadow: 0 2px 8px rgba(220, 38, 38, 0.1);
      }

      .menu-item-hover:hover i {
        color: #DC2626 !important;
        transform: scale(1.1);
        transition: all 0.2s ease;
      }

      .menu-item-hover:hover span {
        color: #991B1B !important;
        font-weight: 600;
      }
    `;
    document.head.appendChild(hoverStyles);
  }

  const SIDEBAR_HTML = `
  <!-- Left edge hover trigger -->
  <div id="leftEdgeTrigger" class="fixed left-0 top-0 bottom-0 w-3 z-50"></div>
  <aside id="sidebar" class="bg-white border-r border-gray-200 fixed top-16 bottom-0 z-40 overflow-hidden transition-all duration-200 ease-out" style="left: -16rem; width: 16rem;">
      <div class="h-full flex flex-col">
          <!-- Menu Items -->
          <nav class="flex-1 py-4">
              <!-- NCR Section -->
              <div class="px-2 mb-6">
                  <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">NCR Management</h3>

                  <a href="ncr-dashboard.html" class="menu-item-hover flex items-center px-3 py-2 rounded-md text-gray-700 mb-1 relative group" data-page="dashboard">
                      <i class="fas fa-tachometer-alt mr-3"></i>
                      <span class="font-medium">Dashboard</span>
                      <div class="tooltip absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-50">Dashboard</div>
                  </a>

                  <a href="#" class="menu-item-hover flex items-center px-3 py-2 rounded-md text-gray-700 mb-1 relative group" data-page="create">
                      <i class="fas fa-plus-circle mr-3"></i>
                      <span class="font-medium">Create</span>
                      <div class="tooltip absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-50">Create</div>
                  </a>

                  <a href="#" class="menu-item-hover flex items-center px-3 py-2 rounded-md text-gray-700 mb-1 relative group" data-page="reports">
                      <i class="fas fa-chart-line mr-3"></i>
                      <span class="font-medium">Report</span>
                      <div class="tooltip absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-50">Reports</div>
                  </a>
              </div>

              <!-- Reports Section -->
              <div class="px-2 mb-6">
                  <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">Analytics</h3>

                  <a href="#" class="menu-item-hover flex items-center px-3 py-2 rounded-md text-gray-700 mb-1 relative group" data-page="performance">
                      <i class="fas fa-chart-bar mr-3"></i>
                      <span class="font-medium">Performance</span>
                      <div class="tooltip absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-50">NCR Performance</div>
                  </a>

                  <a href="#" class="menu-item-hover flex items-center px-3 py-2 rounded-md text-gray-700 mb-1 relative group" data-page="response">
                      <i class="fas fa-clock mr-3"></i>
                      <span class="font-medium">Respone Rate</span>
                      <div class="tooltip absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-50">QC Part List</div>
                  </a>
              </div>

              <!-- Management Section -->
              <div class="px-2">
                  <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">Management</h3>

                  <a href="#" class="menu-item-hover flex items-center px-3 py-2 rounded-md text-gray-700 mb-1 relative group" data-page="ppic">
                      <i class="fas fa-eye mr-3"></i>
                      <span class="font-medium">PPIC View</span>
                      <div class="tooltip absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-50">PPIC View</div>
                  </a>

                  <a href="#" class="menu-item-hover flex items-center px-3 py-2 rounded-md text-gray-700 mb-1 relative group" data-page="user">
                      <i class="fas fa-users mr-3"></i>
                      <span class="font-medium">User</span>
                      <div class="tooltip absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-50">User Management</div>
                  </a>

                  <a href="#" class="menu-item-hover flex items-center px-3 py-2 rounded-md text-gray-700 mb-1 relative group" data-page="department">
                      <i class="fas fa-building mr-3"></i>
                      <span class="font-medium">Department</span>
                      <div class="tooltip absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-50">Department List</div>
                  </a>

                  <a href="#" class="menu-item-hover flex items-center px-3 py-2 rounded-md text-gray-700 mb-1 relative group" data-page="supplier">
                      <i class="fas fa-truck mr-3"></i>
                      <span class="font-medium">Supplier</span>
                      <div class="tooltip absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-50">Supplier Database</div>
                  </a>
              </div>
          </nav>
      </div>
  </aside>
  `;

  // mark node-level initialization to avoid duplicate handlers
  function attachBehavior(root) {
    const sidebarEl = root.querySelector('#sidebar');
    const leftEdgeTrigger = root.querySelector('#leftEdgeTrigger');
    if (!sidebarEl) return console.warn('sidebar: #sidebar element not found in root');
    if (sidebarEl.dataset.initialized === 'true') return; // already attached
    sidebarEl.dataset.initialized = 'true';

    const mainContent = document.getElementById('mainContent');
    let hoverTimeout = null;

    function showSidebar() {
      sidebarEl.style.left = '0';
      if (mainContent) {
        mainContent.style.marginLeft = '16rem';
        mainContent.style.transition = 'margin-left 200ms ease-out';
      }
    }

    function hideSidebar() {
      sidebarEl.style.left = '-16rem';
      if (mainContent) {
        mainContent.style.marginLeft = '0';
        mainContent.style.transition = 'margin-left 200ms ease-out';
      }
    }

    // Left edge trigger hover
    if (leftEdgeTrigger) {
      leftEdgeTrigger.addEventListener('mouseenter', () => {
        clearTimeout(hoverTimeout);
        showSidebar();
      });
    }

    // Sidebar hover
    sidebarEl.addEventListener('mouseenter', () => {
      clearTimeout(hoverTimeout);
      showSidebar();
    });

    // Hide sidebar when mouse leaves
    sidebarEl.addEventListener('mouseleave', () => {
      hoverTimeout = setTimeout(() => hideSidebar(), 300);
    });

    // Menu clicks (navigate to page)
    sidebarEl.querySelectorAll('a[data-page]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('data-page');
        if (!page) return;
        window.location.href = `${page}.html`;
      });
    });

    // initial state - always start hidden
    hideSidebar();
  }

  function ensureSidebar(containerId = 'sidebar-container') {
    // If sidebar already exists in DOM, return the element
    const existing = document.getElementById('sidebar');
    if (existing) {
      // attach behavior if not already
      attachBehavior(document);
      return existing;
    }

    // Otherwise render into container if present
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = SIDEBAR_HTML;
      attachBehavior(container);
      return container.querySelector('#sidebar');
    }

    // fallback: inject at top of body
    document.body.insertAdjacentHTML('afterbegin', SIDEBAR_HTML);
    attachBehavior(document);
    return document.getElementById('sidebar');
  }

  function renderSidebar(containerId = 'sidebar-container') {
    return ensureSidebar(containerId);
  }

  // auto-run on DOMContentLoaded: ensure sidebar exists (no re-render on toggle)
  document.addEventListener('DOMContentLoaded', () => {
    try {
      ensureSidebar('sidebar-container');
      console.log('sidebar ensured in DOM');
    } catch (e) {
      console.error('sidebar ensure error', e);
    }
  });

  // expose
  global.renderSidebar = renderSidebar;
  global.ensureSidebar = ensureSidebar;
})(window);