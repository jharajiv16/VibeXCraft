// Mock AI Copilot Responses - Works without API
// This provides realistic responses when the backend API is not available

export interface MockResponse {
  response: string;
  suggestions?: string[];
}

// Generate mock AI response based on user message
export function generateMockResponse(userMessage: string, copilotType: string = 'code'): MockResponse {
  const message = userMessage.toLowerCase();
  
  // Code Copilot responses
  if (copilotType === 'code' || copilotType === 'copilot') {
    return generateCodeCopilotResponse(message);
  }
  
  // Meeting Copilot responses
  if (copilotType === 'meeting') {
    return generateMeetingCopilotResponse(message);
  }
  
  // Tutor Copilot responses
  if (copilotType === 'tutor') {
    return generateTutorCopilotResponse(message);
  }
  
  // Design Copilot responses
  if (copilotType === 'design') {
    return generateDesignCopilotResponse(message);
  }
  
  // Workflow Copilot responses
  if (copilotType === 'workflow') {
    return generateWorkflowCopilotResponse(message);
  }
  
  // Default response
  return {
    response: `I'm here to help with ${copilotType} tasks. Could you tell me more about what you're looking for?`,
    suggestions: [
      "How do I get started?",
      "What are best practices?",
      "Can you show me an example?",
      "What should I avoid?",
    ],
  };
}

// Code Copilot Mock Responses
function generateCodeCopilotResponse(message: string): MockResponse {
  // React questions
  if (message.includes('react') || message.includes('component')) {
    return {
      response: `Here's how to create a React component:

\`\`\`jsx
import React from 'react';

function MyComponent({ name }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This is a functional React component.</p>
    </div>
  );
}

export default MyComponent;
\`\`\`

**Key points:**
- Use functional components with hooks
- Props are passed as function parameters
- Use JSX for rendering
- Export the component for use in other files

Would you like to see how to add state or event handlers?`,
      suggestions: [
        "How do I add state to a component?",
        "How do I handle events?",
        "How do I use props?",
        "Show me a class component example",
      ],
    };
  }
  
  // JavaScript questions
  if (message.includes('javascript') || message.includes('js') || message.includes('closure')) {
    return {
      response: `JavaScript closures are functions that have access to variables in their outer scope even after the outer function has returned.

**Example:**
\`\`\`javascript
function outerFunction(x) {
  // Outer function's variable
  const outer = x;
  
  // Inner function (closure)
  function innerFunction(y) {
    console.log(outer + y); // Can access 'outer'
  }
  
  return innerFunction;
}

const addFive = outerFunction(5);
addFive(3); // Output: 8
\`\`\`

**Key concepts:**
- Closures preserve the scope chain
- Useful for data privacy and function factories
- Common in event handlers and callbacks

Need more examples?`,
      suggestions: [
        "What are arrow functions?",
        "Explain async/await",
        "What is a promise?",
        "How does 'this' work?",
      ],
    };
  }
  
  // TypeScript questions
  if (message.includes('typescript') || message.includes('types')) {
    return {
      response: `TypeScript adds static typing to JavaScript. Here's a basic example:

\`\`\`typescript
// Define an interface
interface User {
  name: string;
  age: number;
  email?: string; // Optional property
}

// Use the interface
function greetUser(user: User): string {
  return \`Hello, \${user.name}!\`;
}

const user: User = {
  name: "John",
  age: 30,
};

console.log(greetUser(user));
\`\`\`

**Benefits:**
- Catch errors at compile time
- Better IDE support
- Self-documenting code
- Easier refactoring

Want to learn more about TypeScript features?`,
      suggestions: [
        "What are TypeScript generics?",
        "How do I use enums?",
        "What are type guards?",
        "Explain type inference",
      ],
    };
  }
  
  // API questions
  if (message.includes('api') || message.includes('fetch') || message.includes('axios')) {
    return {
      response: `Here's how to make API calls in JavaScript:

**Using Fetch API:**
\`\`\`javascript
// GET request
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// POST request
async function postData() {
  const response = await fetch('https://api.example.com/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: 'John', age: 30 }),
  });
  const data = await response.json();
  return data;
}
\`\`\`

**Using Axios:**
\`\`\`javascript
import axios from 'axios';

const response = await axios.get('https://api.example.com/data');
const data = response.data;
\`\`\`

Need help with error handling or authentication?`,
      suggestions: [
        "How do I handle errors?",
        "How do I add authentication?",
        "What is CORS?",
        "How do I use async/await?",
      ],
    };
  }
  
  // Debugging questions
  if (message.includes('debug') || message.includes('error') || message.includes('fix')) {
    return {
      response: `Here are some debugging tips:

**1. Use console.log()**
\`\`\`javascript
console.log('Variable value:', myVariable);
console.table(arrayData); // For arrays/objects
\`\`\`

**2. Use browser DevTools**
- Press F12 to open DevTools
- Check Console tab for errors
- Use Debugger to step through code
- Inspect Network tab for API calls

**3. Common issues:**
- Check for typos in variable names
- Verify function parameters
- Check async/await usage
- Validate API responses

**4. Use try-catch for error handling:**
\`\`\`javascript
try {
  // Your code here
} catch (error) {
  console.error('Error:', error);
  // Handle error
}
\`\`\`

What specific error are you seeing?`,
      suggestions: [
        "How do I use the debugger?",
        "What are common JavaScript errors?",
        "How do I handle async errors?",
        "How do I read stack traces?",
      ],
    };
  }
  
  // Default code response
  return {
    response: `I'm your Code Copilot! I can help with:
- Writing and debugging code
- Explaining programming concepts
- Best practices and patterns
- Code reviews and optimization

**Try asking:**
- "How do I create a React component?"
- "Explain JavaScript closures"
- "How do I make an API call?"
- "What's the difference between let and const?"

What would you like to know?`,
    suggestions: [
      "How do I create a React component?",
      "Explain JavaScript closures",
      "How do I make an API call?",
      "What are TypeScript types?",
      "How do I debug code?",
    ],
  };
}

// Meeting Copilot Mock Responses
function generateMeetingCopilotResponse(message: string): MockResponse {
  if (message.includes('summary') || message.includes('summarize')) {
    return {
      response: `**Meeting Summary:**

**Date:** [Date]
**Duration:** [Duration]
**Participants:** [List of participants]

**Key Points:**
1. Discussed project timeline and milestones
2. Reviewed current progress and blockers
3. Assigned action items to team members
4. Set next meeting date

**Action Items:**
- [ ] Task 1 - Assignee: [Name] - Due: [Date]
- [ ] Task 2 - Assignee: [Name] - Due: [Date]
- [ ] Task 3 - Assignee: [Name] - Due: [Date]

**Decisions Made:**
- Decision 1: [Description]
- Decision 2: [Description]

**Next Steps:**
- Follow up on action items
- Schedule next meeting
- Update project documentation`,
      suggestions: [
        "Extract action items",
        "Identify key decisions",
        "Find follow-up tasks",
        "Generate meeting notes",
      ],
    };
  }
  
  if (message.includes('action') || message.includes('task')) {
    return {
      response: `**Action Items from Meeting:**

1. **Task:** [Description]
   - **Assignee:** [Name]
   - **Due Date:** [Date]
   - **Status:** Pending

2. **Task:** [Description]
   - **Assignee:** [Name]
   - **Due Date:** [Date]
   - **Status:** In Progress

3. **Task:** [Description]
   - **Assignee:** [Name]
   - **Due Date:** [Date]
   - **Status:** Completed

Would you like me to format these differently or add more details?`,
      suggestions: [
        "Create a task list",
        "Assign priorities",
        "Set due dates",
        "Track progress",
      ],
    };
  }
  
  return {
    response: `I'm your Meeting Copilot! I can help with:
- Summarizing meetings
- Extracting action items
- Identifying key decisions
- Generating meeting notes

**Try asking:**
- "Summarize this meeting"
- "What are the action items?"
- "What decisions were made?"
- "Generate meeting notes"

What would you like me to help with?`,
    suggestions: [
      "Summarize this meeting",
      "Extract action items",
      "Identify key decisions",
      "Generate meeting notes",
    ],
  };
}

// Tutor Copilot Mock Responses
function generateTutorCopilotResponse(message: string): MockResponse {
  if (message.includes('learn') || message.includes('teach') || message.includes('explain')) {
    return {
      response: `I'd be happy to help you learn! Here's a structured approach:

**1. Start with the basics**
- Understand the fundamentals
- Build a strong foundation
- Practice regularly

**2. Break it down**
- Divide complex topics into smaller parts
- Learn one concept at a time
- Master each part before moving on

**3. Practice actively**
- Write code, don't just read
- Build projects
- Solve problems
- Teach others

**4. Get feedback**
- Ask questions
- Join communities
- Code reviews
- Pair programming

**Example Learning Path:**
1. Introduction to the topic
2. Basic concepts and syntax
3. Common patterns and practices
4. Advanced topics
5. Real-world applications

What topic would you like to learn about?`,
      suggestions: [
        "Create a learning plan",
        "Explain a concept",
        "Provide examples",
        "Suggest resources",
      ],
    };
  }
  
  if (message.includes('concept') || message.includes('understand')) {
    return {
      response: `Let me explain this concept in a simple way:

**Concept:** [Concept Name]

**What is it?**
[A simple explanation in plain language]

**Why is it important?**
[Reasons why this concept matters]

**How does it work?**
[Step-by-step explanation]

**Example:**
\`\`\`javascript
// Example code here
\`\`\`

**Key Takeaways:**
- Point 1
- Point 2
- Point 3

**Common Mistakes:**
- Mistake 1: [Explanation]
- Mistake 2: [Explanation]

Would you like more examples or a different explanation?`,
      suggestions: [
        "Show more examples",
        "Explain differently",
        "What are common mistakes?",
        "How do I practice this?",
      ],
    };
  }
  
  return {
    response: `I'm your Tutor Copilot! I can help with:
- Explaining concepts in simple terms
- Creating learning plans
- Providing examples and exercises
- Answering questions

**Try asking:**
- "Explain [concept]"
- "How do I learn [topic]?"
- "What are best practices for [topic]?"
- "Show me an example of [concept]"

What would you like to learn?`,
    suggestions: [
      "Explain a concept",
      "Create a learning plan",
      "Provide examples",
      "Answer questions",
    ],
  };
}

// Design Copilot Mock Responses
function generateDesignCopilotResponse(message: string): MockResponse {
  if (message.includes('color') || message.includes('palette') || message.includes('theme')) {
    return {
      response: `Here's a color palette suggestion:

**Dark Theme Palette:**
- Primary: #9B5CF5 (Purple)
- Secondary: #00E0FF (Cyan)
- Background: #0A0A0A (Dark)
- Surface: #1A1A1A (Dark Gray)
- Text: #FFFFFF (White)
- Text Secondary: #A0A0A0 (Light Gray)

**Light Theme Palette:**
- Primary: #6366F1 (Indigo)
- Secondary: #06B6D4 (Cyan)
- Background: #FFFFFF (White)
- Surface: #F5F5F5 (Light Gray)
- Text: #1A1A1A (Dark)
- Text Secondary: #6B7280 (Gray)

**CSS Variables:**
\`\`\`css
:root {
  --primary: #9B5CF5;
  --secondary: #00E0FF;
  --background: #0A0A0A;
  --surface: #1A1A1A;
  --text: #FFFFFF;
}
\`\`\`

Want more color combinations or design tips?`,
      suggestions: [
        "Suggest more color palettes",
        "How do I create a theme?",
        "What are design principles?",
        "Show me UI examples",
      ],
    };
  }
  
  if (message.includes('ui') || message.includes('design') || message.includes('layout')) {
    return {
      response: `Here are some UI/UX design tips:

**1. Consistency**
- Use consistent spacing, colors, and typography
- Follow a design system
- Maintain visual hierarchy

**2. Accessibility**
- Use sufficient color contrast
- Provide alt text for images
- Ensure keyboard navigation
- Test with screen readers

**3. User Experience**
- Keep it simple and intuitive
- Provide clear feedback
- Minimize cognitive load
- Make actions reversible

**4. Responsive Design**
- Design for mobile first
- Use flexible layouts
- Test on multiple devices
- Consider different screen sizes

**Example Layout:**
\`\`\`css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}
\`\`\`

Need help with a specific design challenge?`,
      suggestions: [
        "How do I improve accessibility?",
        "What are design patterns?",
        "How do I create responsive layouts?",
        "Show me design examples",
      ],
    };
  }
  
  return {
    response: `I'm your Design Copilot! I can help with:
- Color palettes and themes
- UI/UX design principles
- Layout and spacing
- Accessibility best practices

**Try asking:**
- "Suggest a color palette"
- "How do I improve my UI?"
- "What are design best practices?"
- "Show me layout examples"

What design help do you need?`,
    suggestions: [
      "Suggest a color palette",
      "How do I improve my UI?",
      "What are design best practices?",
      "Show me layout examples",
    ],
  };
}

// Workflow Copilot Mock Responses
function generateWorkflowCopilotResponse(message: string): MockResponse {
  if (message.includes('sprint') || message.includes('plan') || message.includes('workflow')) {
    return {
      response: `Here's a sprint planning workflow:

**Sprint Planning Template:**

**Sprint Goal:** [Clear, measurable goal]

**Sprint Duration:** [e.g., 2 weeks]

**Team Capacity:** [Story points or hours]

**User Stories:**
1. **Story 1:** [Description]
   - Points: [Story points]
   - Assignee: [Name]
   - Status: [To Do / In Progress / Done]

2. **Story 2:** [Description]
   - Points: [Story points]
   - Assignee: [Name]
   - Status: [To Do / In Progress / Done]

**Tasks Breakdown:**
- [ ] Task 1 - Story 1
- [ ] Task 2 - Story 1
- [ ] Task 3 - Story 2

**Definition of Done:**
- [ ] Code reviewed
- [ ] Tests written and passing
- [ ] Documentation updated
- [ ] Deployed to staging

**Sprint Retrospective Questions:**
- What went well?
- What could be improved?
- What should we try next?

Want me to help you plan a specific sprint?`,
      suggestions: [
        "Create a sprint plan",
        "Break down tasks",
        "Estimate story points",
        "Plan a workflow",
      ],
    };
  }
  
  if (message.includes('task') || message.includes('todo') || message.includes('kanban')) {
    return {
      response: `Here's a task management workflow:

**Kanban Board Structure:**

**To Do:**
- Task 1
- Task 2
- Task 3

**In Progress:**
- Task 4
- Task 5

**Review:**
- Task 6

**Done:**
- Task 7
- Task 8

**Task Template:**
\`\`\`
Title: [Task Title]
Description: [Detailed description]
Assignee: [Name]
Priority: [High / Medium / Low]
Due Date: [Date]
Status: [To Do / In Progress / Review / Done]
\`\`\`

**Workflow Tips:**
- Limit work in progress (WIP)
- Use clear task descriptions
- Set realistic deadlines
- Regular stand-ups and reviews
- Continuous improvement

Want me to help you organize your tasks?`,
      suggestions: [
        "Create a task list",
        "Organize by priority",
        "Set up a Kanban board",
        "Plan a workflow",
      ],
    };
  }
  
  return {
    response: `I'm your Workflow Copilot! I can help with:
- Sprint planning and organization
- Task management and prioritization
- Workflow optimization
- Project management

**Try asking:**
- "Help me plan a sprint"
- "How do I organize tasks?"
- "What's a good workflow?"
- "How do I manage a project?"

What workflow help do you need?`,
    suggestions: [
      "Help me plan a sprint",
      "How do I organize tasks?",
      "What's a good workflow?",
      "How do I manage a project?",
    ],
  };
}

// Quick question suggestions based on copilot type
export function getQuickQuestions(copilotType: string = 'code'): string[] {
  const questions: Record<string, string[]> = {
    code: [
      "How do I create a React component?",
      "Explain JavaScript closures",
      "How do I make an API call?",
      "What are TypeScript types?",
      "How do I debug code?",
    ],
    meeting: [
      "Summarize this meeting",
      "Extract action items",
      "Identify key decisions",
      "Generate meeting notes",
    ],
    tutor: [
      "Explain a concept",
      "Create a learning plan",
      "Provide examples",
      "Answer questions",
    ],
    design: [
      "Suggest a color palette",
      "How do I improve my UI?",
      "What are design best practices?",
      "Show me layout examples",
    ],
    workflow: [
      "Help me plan a sprint",
      "How do I organize tasks?",
      "What's a good workflow?",
      "How do I manage a project?",
    ],
  };
  
  return questions[copilotType] || questions.code;
}

