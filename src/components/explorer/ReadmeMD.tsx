import React from "react";

const ReadmeMD = () => {
  return (
    <pre className="text-xs">{`
     1  # Aniket's Portfolio
     2  
     3  This is the personal portfolio of Aniket, showcasing his skills, projects, and experiences.
     4  
     5  ## Getting Started
     6  
     7  1. Clone the repository
     8  2. Install dependencies: \`npm install\`
     9  3. Run the development server: \`npm run dev\`
    10  4. Open [http://localhost:3000](http://localhost:3000) in your browser
    11  
    12  ## Features
    13  
    14  - About Me
    15  - Projects
    16  - Experience
    17  - Education
    18  
    19  ## Technologies Used
    20  
    21  - Next.js
    22  - React
    23  - TypeScript
    24  - Tailwind CSS
    25  
    26  ## Contact
    27  
    28  For any inquiries, please reach out to aniket@example.com.`}</pre>
  );
};

export default ReadmeMD;
