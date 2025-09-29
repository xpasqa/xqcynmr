# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Quality Control (QC) Management System for Yanmar, specifically designed for managing Non Conformity Reports (NCR) and quality monitoring processes. The application is a client-side web application built with vanilla HTML, CSS, and JavaScript using TailwindCSS for styling.

✅ Body text - Dari default ke text-lg (18px)✅ Page title - Dari text-2xl ke text-3xl (30px)✅ Page description - Dari default ke text-lg (18px)✅ Section headings - Dari text-lg ke text-xl
(20px)✅ Labels - Dari text-sm ke text-base (16px)✅ Input fields - Ditambahkan text-lg dan padding diperbesar (py-3 → py-4)✅ Select dropdown - Ditambahkan text-lg dan padding diperbesar✅ Textarea - Sudah menggunakan text-lg dan padding diperbesar✅ Buttons - Ditambahkan text-lg dan padding diperbesar (py-3 → py-4, px-6 → px-8)✅ Upload text - Dari text-sm ke text-base✅ Help text - Dari
text-xs ke text-sm✅ Voice recording text - Dari text-sm ke text-base✅ Timer text - Dari text-xs ke text-sm✅ Form version text - Diperbesar ke text-base dan text-lg

## Architecture

The application follows a modular component-based architecture:

- **Main Application**: Login page (`index.html`) redirects to dashboard (`dashboard.html`)
- **Component System**: Reusable JavaScript components in `/components/` directory
  - `sidebar.js`: Provides navigation sidebar with collapsible functionality
  - `header.js`: Top navigation bar with notifications and user menu
- **Page Structure**: Each major feature is a separate HTML file (e.g., `ncr.html`, `dashboard.html`, `verification.html`)

## Key Components

### Sidebar Navigation (`components/sidebar.js`)

- Collapsible sidebar with hover-to-expand functionality
- Organized into sections: NCR Management, Analytics, Management
- Uses `data-page` attributes for navigation routing
- Call `renderSidebar('sidebar-container')` to initialize

### Header Component (`components/header.js`)

- Fixed top navigation with logo, notifications, and user menu
- Auto-injects into `#navbar-container` or falls back to body
- Includes notification dropdown and user profile menu

## Development

Since this is a static web application with no build process:

- **Local Development**: Open HTML files directly in browser or use a simple HTTP server
- **No Package Manager**: Dependencies loaded via CDN (TailwindCSS, FontAwesome)
- **File Structure**: Each page is self-contained with inline styles and scripts

## Navigation System

Pages use a simple routing system where sidebar links navigate using `${page}.html` pattern. The main application flow:

1. `index.html` - Login page (redirects to `dashboard.html`)
2. `dashboard.html` - Main dashboard
3. Feature pages: `ncr.html`, `verification.html`, `performance.html`, etc.

## Styling Conventions

- Uses TailwindCSS utility classes extensively
- Custom CSS limited to component-specific functionality (sidebar transitions, animations)
- Responsive design with mobile-first approach
- FontAwesome icons for UI elements
