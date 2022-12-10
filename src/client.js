import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'j86jgsp0',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skhWAAVBKcUGfHrlPJA0tBqdjea4jz9Kt7WDxyAbxyjzCezlh6gwOJDzTLl9THQ8tgw7U76UDhYKz4QW4TR3sxqNll9ODaFmrqswCg6V9JP5nsdnFeyqWeKiSBEYmR86Kc2BYeT0gGE9t2r9zrRT7NgktFw7gnyN4vmycTJmF2sCBxB3Pc19',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
