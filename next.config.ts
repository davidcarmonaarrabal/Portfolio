import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  // Define aquí las rutas si lo deseas, o déjalo vacío si usas middleware
});

export default withNextIntl({
  experimental: {
  }
});
