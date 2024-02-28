import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: '/index.html',
        about: '/about.html',
        contact: '/contact.html',
        facilities: '/facilities.html',
        staff: '/staff.html',
        membership: '/membership.html',
        // Add other pages as needed
      }
    }
  }
});
