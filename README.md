# Job Search

A web application that helps you find job opportunities by generating advanced Google search queries (Google Dorks).
![Video](https://github.com/yogsec/job-search/blob/main/Screencast%20From%202026-06-01%2018-25-52.gif?raw=true)

Live Demo: [https://yogsec.github.io/job-search/](https://yogsec.github.io/job-search/)

## Features

- Search for any job role with autocomplete suggestions
- Search by location with support for cities, countries, and remote work
- One-click search that opens Google results in a new tab
- Fully client-side – no server required

## How It Works

Open Job Search: [https://yogsec.github.io/job-search/](https://yogsec.github.io/job-search/)

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

## Usage

1. Enter a job role (e.g., "Web Developer", "Data Scientist") - you can type any custom role or select from suggestions
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
```

## Data Sources

- **Job Roles**: Over 150+ technical and non-technical job titles including Web Developer, Data Scientist, DevOps Engineer, etc.
- **Locations**: 200+ locations including countries, major cities, and remote work options

## License

This project is open source and available under the MIT License.

## Author

**Abhinav Singwal**
- Linktree: [https://linktr.ee/abhinavsingwal](https://linktr.ee/abhinavsingwal)
