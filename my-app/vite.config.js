import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import dsv from '@rollup/plugin-dsv';

export default defineConfig({
    plugins: [sveltekit(), dsv({
        processRow: (row, id) => {
          Object.keys(row).forEach((key) => {
            var value = row[key];
            row[key] = isNaN(+value) ? value : +value;
          });
        }
      })]
});
