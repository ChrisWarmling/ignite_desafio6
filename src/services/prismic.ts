import * as prismic from '@prismicio/client';
import { HttpRequestLike } from '@prismicio/client';
import { enableAutoPreviews } from '@prismicio/next';

export interface PrismicConfig {
  req?: HttpRequestLike;
}

export function getPrismicClient(config?: PrismicConfig): prismic.Client {
  const client = prismic.createClient(process.env.PRISMIC_END_PONT, { accessToken: process.env.ACCESS_TOKEN });

  enableAutoPreviews({
    client,
    req: config?.req,

  })

  return client;
}
