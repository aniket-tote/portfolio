import React from "react";

const TsConfig = () => {
  return (
    <pre className="text-xs">{`
    1  {
    2    "compilerOptions": {
    3      "target": "es5",
    4      "lib": ["dom", "dom.iterable", "esnext"],
    5      "allowJs": true,
    6      "skipLibCheck": true,
    7      "strict": true,
    8      "forceConsistentCasingInFileNames": true,
    9      "noEmit": true,
   10      "esModuleInterop": true,
   11      "module": "esnext",
   12      "moduleResolution": "node",
   13      "resolveJsonModule": true,
   14      "isolatedModules": true,
   15      "jsx": "preserve",
   16      "incremental": true,
   17      "baseUrl": ".",
   18      "paths": {
   19        "@/*": ["./src/*"]
   20      }
   21    },
   22    "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
   23    "exclude": ["node_modules"]
   24  }`}</pre>
  );
};

export default TsConfig;
