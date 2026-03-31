
```markdown
# React Cards - Job Board Component

A responsive job board card component built with React and Vite. Displays job listings with company logos, job details, and bookmark functionality.

## Features

- Dynamic cards rendered from array of objects using map()
- Company logos from external URLs
- Bookmark toggle with Lucide React icons
- Job type tags (supports multiple types per job)
- Responsive grid layout
- Clean Pinterest-inspired design

## Tech Stack

- React
- Vite
- Lucide React (icons)
- CSS (index.css)

## Installation

```bash
git clone https://github.com/Haider-Abbas028/react-cards.git
cd react-cards
npm install
npm run dev
```

## Data Structure

```javascript
{
  id: 8,
  company: "Uber",
  posted: "3 days ago",
  role: "Mobile Engineer",
  type: ["Contract"],
  salary: "$110 per hour",
  location: "San Francisco",
  logo: "https://example.com/logo.png"
}
```

## Usage

Add new job cards by adding objects to the array:

```javascript
const jobListings = [
  {
    id: 1,
    company: "Google",
    posted: "30 days ago",
    role: "Senior Engineer",
    type: ["Full Time", "Remote"],
    salary: "$150 per hour",
    location: "Mountain View",
    logo: "your-logo-url"
  }
];
```

## Author

Haider Abbas - [GitHub](https://github.com/Haider-Abbas028)
```
