# Create directories if they don't exist
New-Item -ItemType Directory -Force -Path "public/images/project1"
New-Item -ItemType Directory -Force -Path "public/images/project2"
New-Item -ItemType Directory -Force -Path "public/images/project3"

# Copy images from project1
Copy-Item "src/Assets/images/project1/bedroomcupboards.jpeg" -Destination "public/images/project1/"
Copy-Item "src/Assets/images/project1/kitchen.jpeg" -Destination "public/images/project1/"

# Copy images from project2
Copy-Item "src/Assets/images/project2/kitchne2.jpeg" -Destination "public/images/project2/"
Copy-Item "src/Assets/images/project2/kitchne3.jpeg" -Destination "public/images/project2/"
Copy-Item "src/Assets/images/project2/cupboards.jpeg" -Destination "public/images/project2/"
Copy-Item "src/Assets/images/project2/cupboards 2.jpeg" -Destination "public/images/project2/"
Copy-Item "src/Assets/images/project2/hall.jpeg" -Destination "public/images/project2/"
Copy-Item "src/Assets/images/project2/balcony from bedroom.jpeg" -Destination "public/images/project2/"
Copy-Item "src/Assets/images/project2/dressing cupboard.jpeg" -Destination "public/images/project2/"

# Copy images from project3
Copy-Item "src/Assets/images/project3/white cupboards.jpeg" -Destination "public/images/project3/"
Copy-Item "src/Assets/images/project3/hall with tv.jpeg" -Destination "public/images/project3/"

Write-Host "Images have been copied successfully!" 