# Contact Page with Google Maps Integration

This contact page includes an interactive Google Maps component centered on Kumasi, Ghana. The implementation uses the Google Maps JavaScript API.

## Setting Up Google Maps API

To get the map working properly, follow these steps:

1. Create a Google Cloud account if you don't have one: https://cloud.google.com/
2. Create a new project in the Google Cloud Console
3. Enable the "Maps JavaScript API" for your project
4. Create an API key with appropriate restrictions (HTTP referrers is recommended)
5. Create a `.env.local` file in the root of the project with the following:

```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
```

6. Restart your development server

## Important Notes

- The map is configured to show Kumasi, Ghana at coordinates: 6.6666, -1.6163
- A marker is placed at this location labeled "RoofGuard Ghana Headquarters"
- The interactive map falls back to a static image if the API fails to load
- Remember not to commit your actual API key to version control

## Customizing the Map

To change the map location:
1. Update the coordinates in the `kumasi` variable in the `initMap` function
2. Update the address in the static fallback image URL
3. Update the "View on Google Maps" link href 