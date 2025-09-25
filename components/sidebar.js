// components/sidebar.js
// Call renderSidebar('sidebar-container') to render sidebar into a page container
(function (global) {
  'use strict';

  const SIDEBAR_HTML = `
  <aside id="sidebar" class="sidebar-collapsed sidebar-transition bg-white border-r border-gray-200 fixed left-0 top-16 bottom-0 z-40 overflow-hidden">
      <div class="h-full flex flex-col">
          <!-- Menu Items -->
          <nav class="flex-1 py-4">
              <!-- NCR Section -->
              <div class="px-2 mb-6">
                  <h3 class="menu-text text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">NCR Management</h3>

                  <a href="ncr-dashboard.html" class="menu-item-hover flex items-center px-3 py-2 rounded-md text-gray-700 mb-1 relative group" data-page="dashboard">
                      <i class="fas fa-tachometer-alt menu-icon"></i>
                      <span class="menu-text ml-3 font-medium">NCR Dashboard</span>
                      <div class="tooltip absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-50">NCR Dashboard</div>
                  </a>

                  <a href="#" class="menu-item-hover flex items-center px-3 py-2 rounded-md text-gray-700 mb-1 relative group" data-page="create">
                      <i class="fas fa-plus-circle menu-icon"></i>
                      <span class="menu-text ml-3 font-medium">Create NCR</span>
                      <div class="tooltip absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-50">Create NCR</div>
                  </a>

                  <a href="#" class="menu-item-hover flex items-center px-3 py-2 rounded-md text-gray-700 mb-1 relative group" data-page="report">
                      <i class="fas fa-chart-line menu-icon"></i>
                      <span class="menu-text ml-3 font-medium">Report</span>
                      <div class="tooltip absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-50">NCR Reports</div>
                  </a>

                  <a href="#" class="menu-item-hover flex items-center px-3 py-2 rounded-md text-gray-700 mb-1 relative group" data-page="process">
                      <i class="fas fa-cogs menu-icon"></i>
                      <span class="menu-text ml-3 font-medium">Process</span>
                      <div class="tooltip absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-50">Process NCR</div>
                  </a>

                  <a href="#" class="menu-item-hover flex items-center px-3 py-2 rounded-md text-gray-700 mb-1 relative group" data-page="done">
                      <i class="fas fa-check-circle menu-icon"></i>
                      <span class="menu-text ml-3 font-medium">Done</span>
                      <div class="tooltip absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-50">Completed NCR</div>
                  </a>
              </div>

              <!-- Reports Section -->
              <div class="px-2 mb-6">
                  <h3 class="menu-text text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">Analytics</h3>

                  <a href="#" class="menu-item-hover flex items-center px-3 py-2 rounded-md text-gray-700 mb-1 relative group" data-page="performance">
                      <i class="fas fa-chart-bar menu-icon"></i>
                      <span class="menu-text ml-3 font-medium">Performance</span>
                      <div class="tooltip absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-50">NCR Performance</div>
                  </a>

                  <a href="#" class="menu-item-hover flex items-center px-3 py-2 rounded-md text-gray-700 mb-1 relative group" data-page="response">
                      <i class="fas fa-clock menu-icon"></i>
                      <span class="menu-text ml-3 font-medium">Respone Rate</span>
                      <div class="tooltip absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-50">QC Part List</div>
                  </a>
              </div>

              <!-- Management Section -->
              <div class="px-2">
                  <h3 class="menu-text text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">Management</h3>

                  <a href="#" class="menu-item-hover flex items-center px-3 py-2 rounded-md text-gray-700 mb-1 relative group" data-page="ppic">
                      <i class="fas fa-eye menu-icon"></i>
                      <span class="menu-text ml-3 font-medium">PPIC View</span>
                      <div class="tooltip absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-50">PPIC View</div>
                  </a>

                  <a href="#" class="menu-item-hover flex items-center px-3 py-2 rounded-md text-gray-700 mb-1 relative group" data-page="user">
                      <i class="fas fa-users menu-icon"></i>
                      <span class="menu-text ml-3 font-medium">User</span>
                      <div class="tooltip absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-50">User Management</div>
                  </a>

                  <a href="#" class="menu-item-hover flex items-center px-3 py-2 rounded-md text-gray-700 mb-1 relative group" data-page="department">
                      <i class="fas fa-building menu-icon"></i>
                      <span class="menu-text ml-3 font-medium">Department</span>
                      <div class="tooltip absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-50">Department List</div>
                  </a>

                  <a href="#" class="menu-item-hover flex items-center px-3 py-2 rounded-md text-gray-700 mb-1 relative group" data-page="supplier">
                      <i class="fas fa-truck menu-icon"></i>
                      <span class="menu-text ml-3 font-medium">Supplier</span>
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
    if (!sidebarEl) return console.warn('sidebar: #sidebar element not found in root');
    if (sidebarEl.dataset.initialized === 'true') return; // already attached
    sidebarEl.dataset.initialized = 'true';

    const mainContent = document.getElementById('mainContent');
    const sidebarToggle = document.getElementById('sidebarToggle');
    let isExpanded = false;
    let hoverTimeout = null;

    // Minimal, fast transitions for snappy UI
    try {
      sidebarEl.style.transition = 'width 60ms linear';
      if (mainContent) {
        mainContent.style.transition = 'margin-left 60ms linear';
        // Ensure main content starts in correct position
        mainContent.classList.remove('ml-64', 'ml-32');
        mainContent.classList.add('ml-16');
      }
    } catch (e) { /* ignore */ }

    function setCollapsedImmediate() {
      sidebarEl.classList.remove('sidebar-expanded');
      sidebarEl.classList.add('sidebar-collapsed');
      if (mainContent) {
        mainContent.classList.remove('ml-64', 'ml-32');
        mainContent.classList.add('ml-16');
      }
    }

    function setExpandedImmediate() {
      sidebarEl.classList.remove('sidebar-collapsed');
      sidebarEl.classList.add('sidebar-expanded');
      if (mainContent) {
        mainContent.classList.remove('ml-16', 'ml-32');
        mainContent.classList.add('ml-64');
      }
    }

    // Hover expand (temporary) - quick and minimal
    sidebarEl.addEventListener('mouseenter', () => {
      if (!isExpanded) {
        clearTimeout(hoverTimeout);
        setExpandedImmediate();
        // hide tooltips
        sidebarEl.querySelectorAll('.group').forEach(g => g.classList.remove('show-tooltip'));
      }
    });

    sidebarEl.addEventListener('mouseleave', () => {
      if (!isExpanded) {
        hoverTimeout = setTimeout(() => setCollapsedImmediate(), 120);
      }
    });

    // Tooltips for collapsed state
    sidebarEl.querySelectorAll('.group').forEach(item => {
      item.addEventListener('mouseenter', () => {
        if (sidebarEl.classList.contains('sidebar-collapsed')) item.classList.add('show-tooltip');
      });
      item.addEventListener('mouseleave', () => item.classList.remove('show-tooltip'));
    });

    // Toggle button - immediate state change
    if (sidebarToggle) {
      const toggleIcon = sidebarToggle.querySelector('#toggleIcon') || sidebarToggle.querySelector('i');
      sidebarToggle.addEventListener('click', () => {
        isExpanded = !isExpanded;
        clearTimeout(hoverTimeout);
        if (isExpanded) {
          setExpandedImmediate();
          if (toggleIcon) { toggleIcon.classList.remove('fa-bars'); toggleIcon.classList.add('fa-times'); }
        } else {
          setCollapsedImmediate();
          if (toggleIcon) { toggleIcon.classList.remove('fa-times'); toggleIcon.classList.add('fa-bars'); }
        }
      });
    }

    // Menu clicks (navigate to page)
    sidebarEl.querySelectorAll('a[data-page]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('data-page');
        if (!page) return;
        window.location.href = `${page}.html`;
      });
    });

    // initial state - always start collapsed
    setCollapsedImmediate();

    window.addEventListener('resize', () => {
      if (window.innerWidth < 1024) setCollapsedImmediate();
    });
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