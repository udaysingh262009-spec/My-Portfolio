from PIL import Image, ImageEnhance, ImageFilter
import os

src_path = 'C:/Users/user/.gemini/antigravity/brain/b89c9936-a979-4938-a7c8-87d98a0487d7/.user_uploaded/media__1784976051058.jpg'

img = Image.open(src_path).convert('RGBA')
width, height = img.size

# Make a dark vignette background blended version
# Darken the background edges dramatically so it fades completely into #060B11 dark theme
mask = Image.new('L', (width, height), 0)
from PIL import ImageDraw
draw = ImageDraw.Draw(mask)

# Create radial gradient mask focused on Uday in center
center_x, center_y = width // 2, height // 2 + 30
radius_x, radius_y = int(width * 0.48), int(height * 0.52)

for y in range(height):
    for x in range(width):
        # Normalized distance squared
        dx = (x - center_x) / radius_x
        dy = (y - center_y) / radius_y
        dist = (dx*dx + dy*dy) ** 0.5
        if dist < 0.6:
            val = 255
        elif dist > 1.0:
            val = 0
        else:
            val = int(255 * (1.0 - (dist - 0.6) / 0.4))
        mask.putpixel((x, y), val)

# Smooth mask
mask = mask.filter(ImageFilter.GaussianBlur(15))

# Create dark background image (#060B11)
dark_bg = Image.new('RGBA', (width, height), (6, 11, 17, 255))

# Blend original photo onto dark theme background using radial mask
final_img = Image.composite(img, dark_bg, mask)

# Save perfected image to public and src/assets
final_img.convert('RGB').save('public/uday_profile_dark.jpg', quality=95)
final_img.convert('RGB').save('public/uday_profile.jpg', quality=95)
final_img.convert('RGB').save('src/assets/uday_profile_dark.jpg', quality=95)
final_img.convert('RGB').save('src/assets/uday_profile.jpg', quality=95)

print("Dark theme background blended photo created successfully!")
