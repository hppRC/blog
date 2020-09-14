// please refer to this article: https://qiita.com/Takepepe/items/f66c7e2e1d22b431f148
import React from 'react';
import { Theme } from 'src/types';

declare module 'react' {
  type FCX<P = Record<string, unknown>> = React.FunctionComponent<P & { className?: string; theme?: Theme }>;
}
