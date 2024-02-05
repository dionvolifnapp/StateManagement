CPSC6175_Spring
NASA Astronomy Picture of the Day (APOD) API Endpoint

Overview:

This Spring Boot application provides an endpoint to access the NASA Astronomy Picture of the Day (APOD) API. The endpoint allows you to retrieve information about the astronomy picture of the day with optional query parameters.

Endpoint URL:

GET /nasa-apod/picture

Query Parameters:

-date (optional): The specific date for which you want the APOD. Format: "YYYY-MM-DD". -start_date (optional): Start date for a range of APOD entries. Format: "YYYY-MM-DD". -end_date (optional): End date for a range of APOD entries. Format: "YYYY-MM-DD". -count (optional): Number of APOD entries to retrieve. -thumbs (optional): Whether to include thumbnail images (true/false).

API Key:

The API key for accessing the NASA APOD API is stored in the backend and is not required as a query parameter.

Example Usage:

Retrieve the APOD for a Specific Date:

GET /nasa-apod/picture?date=2023-01-29

Retrieve Multiple APOD Entries:

GET /nasa-apod/picture?start_date=2023-01-01&end_date=2023-01-10&count=5

Response Format:

The endpoint returns JSON responses from the NASA APOD API. The response typically includes fields such as:

-copyright: Copyright information. -date: The date of the picture. -explanation: A description or explanation of the picture. -hdurl: The URL to the high-definition version of the picture (an image). -media_type: The type of media, which should be "image" for picture responses. -title: The title of the picture. -url: The URL to the standard version of the picture (an image).
