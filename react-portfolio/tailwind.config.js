export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0a192f',
        cyanAccent: '#22d3ee',
        emeraldAccent: '#10b981'
      },
      boxShadow: {
        glow: '0 0 45px rgba(34, 211, 238, 0.18)'
      }
    }
  },
  plugins: []
};
