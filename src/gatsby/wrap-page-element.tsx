import React from 'react';

import type { ReactNode } from 'react';

export const wrapPageElement: ReactNode = ({ element }: { element: React.FC }) => <>{element}</>;
