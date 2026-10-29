// ===== Tailwind CSS configuration =====
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                ocean: {
                    50: '#e0f2fe',
                    100: '#bae6fd',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    800: '#075985',
                    900: '#0c4a6e',
                    950: '#050811',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        }
    }
}

// ===== Tab switching =====
function switchTab(tabId) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(el => el.classList.add('hidden'));

    // Remove active styles from all buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('bg-cyan-500/20', 'text-cyan-300', 'border', 'border-cyan-500/40', 'shadow-md');
        btn.classList.add('text-slate-400', 'hover:text-cyan-300', 'hover:bg-slate-900/50');
    });

    // Show selected tab content
    const activeContent = document.getElementById('tab-' + tabId);
    if (activeContent) {
        activeContent.classList.remove('hidden');
    }

    // Highlight active button
    const activeButton = document.getElementById('btn-' + tabId);
    if (activeButton) {
        activeButton.classList.remove('text-slate-400', 'hover:text-cyan-300', 'hover:bg-slate-900/50');
        activeButton.classList.add('bg-cyan-500/20', 'text-cyan-300', 'border', 'border-cyan-500/40', 'shadow-md');
    }

    // Scroll slightly to top of content on mobile
    window.scrollTo({ top: 250, behavior: 'smooth' });
}
