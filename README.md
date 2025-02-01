# Profile Card

## Description
This is a simple, responsive **Profile Card** built using **HTML, CSS, and JavaScript**. It displays essential details like a profile picture, full name, job title, short bio, current location, email address, social links, and the current UTC time.
## Features
- Fully **responsive** design for various screen sizes.
- Displays key profile details including **name, job title, and social links**.
- Shows **dynamic UTC time** that updates automatically.
- Smooth **hover effects** for an enhanced user experience.

## Technologies Used
- **HTML** for structure
- **CSS** for styling
- **JavaScript** for dynamic functionality

## Project Structure
```
Profile-Card/
├── index.html      # Main HTML file
├── styles.css      # Styles for the profile card
├── script.js       # JavaScript for UTC time update
├── profile.jpg     # Profile picture
└── README.md       # Project documentation
```
## API Documentation (UTC Time Feature)
The profile card includes a **dynamic UTC time display**.

- **Endpoint**: Local JavaScript Execution
- **Request Method**: JavaScript `setInterval()` function updates time every second.
- **Response Format**:
  ```json
  {
    "currentTimeUTC": "2025-01-30T09:30:00Z"
  }
  ```
- **Example Usage**: Refreshing the page updates the displayed UTC time.

## Related Resources
- [Learn More About HTML & CSS](https://developer.mozilla.org/en-US/docs/Learn)

## License
This project is open-source and available under the **MIT License**.
