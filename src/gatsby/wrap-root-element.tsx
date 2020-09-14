import React from 'react';
import { Layout } from 'src/layout';

export const wrapRootElement = ({ element }: { element: React.FC }): JSX.Element => <Layout>{element}</Layout>;
