# Shree Padmanabhaswamy Temple Website & Admin Dashboard

This project is a clean, responsive, light-themed website and management dashboard designed for the Shree Padmanabhaswamy Temple. It is built with a modular, clean folder structure ready for deployment or conversion into a WordPress theme.

---

## 📁 Project Folder Structure

```text
D:\tem\
├── admin\
│   └── index.html          # Light-themed Admin Dashboard (Bookings, Timings, Gallery & Messages)
├── assets\
│   ├── css\                # Custom stylesheets (if needed)
│   └── js\
│       ├── main.js         # Public website scripts (Language switch, Lightbox modal, Mobile menu)
│       └── admin.js        # Admin dashboard scripts (Tab switching, search filtering, modals)
├── index.html              # Light-themed Public Website (Bilingual EN/ML, Timings, Gallery, Contact)
└── README.md               # Folder structure & WordPress conversion documentation
```

---

## 🌟 Key Features

1. **Light & Editorial Design Theme:**
   - Soft Ivory / Sand background (`#FDFBF7`) with Royal Maroon (`#7A1C1C`) and Warm Gold (`#B8860B`) accents.
   - Elegant typography pairing **Cinzel** (serif headers) with **Plus Jakarta Sans** and **Noto Sans Malayalam**.

2. **Bilingual Support (English & Malayalam):**
   - Seamless language switcher pill on top navigation.
   - Remembers user choice in `localStorage`.

3. **Photo Gallery Lightbox:**
   - Interactive modal pop-up for full-size image viewing.

4. **Admin Dashboard (`/admin/`):**
   - **Dashboard Overview:** Visitor statistics, pooja booking metrics, and quick feeds.
   - **Pooja Bookings Manager:** Filterable search and status indicators.
   - **Darshan Timings Manager:** Easily update opening slots.
   - **Photo Gallery & Message Manager.**

---

## 🔌 Converting to WordPress Theme

To convert this project into a custom WordPress theme:

1. **Folder Setup in WordPress:**
   Create a theme folder inside `wp-content/themes/padmanabha-temple/`.

2. **File Mapping:**
   - Move `assets/` into `wp-content/themes/padmanabha-temple/assets/`.
   - Split `index.html` into:
     - `header.php` (Navigation bar, language scripts, fonts)
     - `footer.php` (Footer and `assets/js/main.js` enqueue)
     - `front-page.php` (Hero section, History, Timings, Gallery)
     - `page-admin.php` or Custom WP Admin Plugin for `admin/index.html` dashboard logic.

3. **Enqueue Scripts & Styles in `functions.php`:**
   ```php
   function temple_enqueue_scripts() {
       wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=Plus+Jakarta+Sans:wght@400;600&family=Noto+Sans+Malayalam:wght@400;600&display=swap');
       wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');
       wp_enqueue_script('tailwind', 'https://cdn.tailwindcss.com');
       wp_enqueue_script('main-js', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0', true);
   }
   add_action('wp_enqueue_scripts', 'temple_enqueue_scripts');
   ```
