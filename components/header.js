// Inject header markup into #navbar-container (fallback to top of body)
document.addEventListener('DOMContentLoaded', function () {
const header = `
<nav class="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50 h-16">
    <div class="flex items-center justify-between px-6 h-full">
        <!-- Left Section -->
        <div class="flex items-center space-x-4">
            <button id="sidebarToggle" class="p-2 rounded-md hover:bg-gray-100 transition-colors">
                <i id="toggleIcon" class="fas fa-bars text-gray-600"></i>
            </button>
            <div class="flex items-center space-x-3">
                <img src="/images/yanmar-log.png" alt="Yanmar Logo" class="w-10 h-7 rounded-lg">
                <div>
                    <h1 class="text-xl font-bold text-red-700">YANMAR</h1>
                    <p class="text-xs text-gray-500 -mt-1">Quality Control Management</p>
                </div>
            </div>
        </div>


        <!-- Right Section -->
        <div class="flex items-center space-x-4">
            <!-- Notifications -->
            <div class="relative group">
                <button class="relative p-2 text-gray-600 hover:text-yanmar-red transition-colors">
                    <i class="fas fa-bell text-xl"></i>
                    <span
                        class="absolute -top-1 -right-1 w-5 h-5 bg-yanmar-red text-white text-xs rounded-full flex items-center justify-center">3</span>
                </button>

                <!-- Notification Dropdown -->
                <div
                    class="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div class="p-4 border-b border-gray-200">
                        <h4 class="text-sm font-semibold text-gray-900">Latest Notifications</h4>
                    </div>
                    <div class="max-h-64 overflow-y-auto">
                        <div class="py-2">
                            <a href="#" class="flex items-start px-4 py-3 hover:bg-gray-50 transition-colors">
                                <div class="flex-shrink-0">
                                    <div class="w-2 h-2 bg-yanmar-red rounded-full mt-2"></div>
                                </div>
                                <div class="ml-3 flex-1">
                                    <p class="text-sm text-gray-900">New NCR submitted</p>
                                    <p class="text-xs text-gray-500 mt-1">ENGINE MOUNT BRACKET - Quality issue
                                        detected</p>
                                    <p class="text-xs text-gray-400 mt-1">2 minutes ago</p>
                                </div>
                            </a>
                            <a href="#" class="flex items-start px-4 py-3 hover:bg-gray-50 transition-colors">
                                <div class="flex-shrink-0">
                                    <div class="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                                </div>
                                <div class="ml-3 flex-1">
                                    <p class="text-sm text-gray-900">Part requires rework</p>
                                    <p class="text-xs text-gray-500 mt-1">COOLING FAN BLADE - Surface finish below
                                        standard</p>
                                    <p class="text-xs text-gray-400 mt-1">15 minutes ago</p>
                                </div>
                            </a>
                            <a href="#" class="flex items-start px-4 py-3 hover:bg-gray-50 transition-colors">
                                <div class="flex-shrink-0">
                                    <div class="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                                </div>
                                <div class="ml-3 flex-1">
                                    <p class="text-sm text-gray-900">QC verification completed</p>
                                    <p class="text-xs text-gray-500 mt-1">PISTON ASSEMBLY - Part approved for
                                        production</p>
                                    <p class="text-xs text-gray-400 mt-1">1 hour ago</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="p-3 border-t border-gray-200">
                        <a href="#" class="text-sm text-yanmar-red hover:text-yanmar-dark font-medium">View all
                            notifications</a>
                    </div>
                </div>
            </div>

            <!-- User Menu -->
            <div class="relative group">
                <button class="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 transition-colors">
                    <img src="/images/avatar.png" alt="User" class="w-8 h-8 rounded-full">
                    <div class="hidden md:block text-left">
                        <p class="text-sm font-medium text-gray-900">John Doe</p>
                        <p class="text-xs text-gray-500">QC Manager</p>
                    </div>
                    <i class="fas fa-chevron-down text-xs text-gray-400"></i>
                </button>

                <!-- Dropdown Menu -->
                <div
                    class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div class="py-1">
                        <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <i class="fas fa-user mr-3"></i>Profile
                        </a>
                        <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <i class="fas fa-cog mr-3"></i>Settings
                        </a>
                        <hr class="my-1">
                        <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <i class="fas fa-sign-out-alt mr-3"></i>Logout
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>
`;

// try to inject into #navbar-container
const container = document.getElementById('navbar-container');
if (container) {
container.innerHTML = header;
console.log('header injected into #navbar-container');
} else {
// fallback: insert at top of body
document.body.insertAdjacentHTML('afterbegin', header);
console.warn('#navbar-container not found — injected header at top of body as fallback');
}

// Add sidebar toggle functionality
setTimeout(() => {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const toggleIcon = document.getElementById('toggleIcon');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');

    if (sidebarToggle && sidebar) {
        let isToggled = false;

        sidebarToggle.addEventListener('click', () => {
            isToggled = !isToggled;

            if (isToggled) {
                // Show sidebar
                sidebar.style.left = '0';
                if (mainContent) {
                    mainContent.style.marginLeft = '16rem';
                    mainContent.style.transition = 'margin-left 200ms ease-out';
                }
                // Change icon to X
                if (toggleIcon) {
                    toggleIcon.classList.remove('fa-bars');
                    toggleIcon.classList.add('fa-times');
                }
            } else {
                // Hide sidebar
                sidebar.style.left = '-16rem';
                if (mainContent) {
                    mainContent.style.marginLeft = '0';
                    mainContent.style.transition = 'margin-left 200ms ease-out';
                }
                // Change icon to hamburger
                if (toggleIcon) {
                    toggleIcon.classList.remove('fa-times');
                    toggleIcon.classList.add('fa-bars');
                }
            }
        });
    }
}, 100); // Small delay to ensure sidebar is rendered
});