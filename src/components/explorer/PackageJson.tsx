import React from "react";

const PackageJson = () => {
  return (
    <pre className="text-xs">{`
     1  {
     2      "name": "vs-code-portfolio",
     3      "version": "0.1.0",
     4      "private": true,
     5      "scripts": {
     6          "dev": "next dev --turbopack",
     7          "build": "next build",
     8          "start": "next start",
     9          "lint": "next lint"
    10      },
    11      "dependencies": {
    12          "lucide-react": "^0.474.0",
    13          "next": "15.1.6",
    14          "react": "^19.0.0",
    15          "react-dom": "^19.0.0"
    16      },
    17      "devDependencies": {
    18          "@eslint/eslintrc": "^3",
    19          "@types/node": "^20",
    20          "@types/react": "^19",
    21          "@types/react-dom": "^19",
    22          "eslint": "^9",
    23          "eslint-config-next": "15.1.6",
    24          "postcss": "^8",
    25          "tailwindcss": "^3.4.1",
    26          "typescript": "^5"
    27      }
    28  }
      `}</pre>
  );
};

export default PackageJson;
