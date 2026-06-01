# Job Search

A web application that helps you find hidden job opportunities by generating advanced Google search queries (Google Dorks) that target company career pages directly, bypassing major job boards.

Live Demo: [https://yogsec.github.io/job-search/](https://yogsec.github.io/job-search/)

## Features

- Glass morphism macOS-inspired user interface
- Search for any job role with autocomplete suggestions
- Search by location with support for cities, countries, and remote work
- Generates optimized Google Dork queries
- One-click search that opens Google results in a new tab
- Copy generated query to clipboard
- Fully client-side – no server required

## How It Works

The application builds a Google Dork query using the following structure:

`"Job Role" ("Location") (inurl:careers OR inurl:jobs OR inurl:join-us OR intitle:"we're hiring" OR intitle:"join our team")`

This query instructs Google to find pages that:
1. Contain your specified job title
2. Are located in your specified region (or remote)
3. Are on career or jobs pages of company websites

## Technology Stack

- HTML5
- CSS3 (Tailwind CSS for styling)
- JavaScript (Vanilla)
- Tom Select for enhanced dropdowns
- Font Awesome for icons

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yogsec/job-search.git
```

2. Navigate to the project directory:
```bash
cd job-search
```

3. Open `index.html` in your browser or serve with any static server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

## Usage

1. Enter a job role (e.g., "Web Developer", "Data Scientist") – you can type any custom role or select from suggestions
2. Enter a location (e.g., "United States", "London", or select "Remote (Worldwide)")
3. Click the "Search with Google" button
4. A new tab will open with Google search results showing job postings directly on company websites

## Project Structure

```
job-search/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Styling and glass UI effects
├── js/
│   ├── jobBoards.js    # Job roles and locations data
│   └── main.js         # Application logic and Tom Select initialization
└── assets/             # Static assets
```

## Data Sources

- **Job Roles**: Over 150+ technical and non-technical job titles including Web Developer, Data Scientist, DevOps Engineer, etc.
- **Locations**: 200+ locations including countries, major cities, and remote work options

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome. Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Author

**Abhinav Singwal**
- GitHub: [@yogsec](https://github.com/yogsec)
- Linktree: [https://linktr.ee/abhinavsingwal](https://linktr.ee/abhinavsingwal)



## Disclaimer

This tool is designed for legitimate job searching purposes only. Please use responsibly and in accordance with Google's Terms of Service.
