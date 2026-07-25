from PIL import Image, ImageFilter, ImageEnhance, ImageDraw
import os

src_path = 'C:/Users/user/.gemini/antigravity/brain/b89c9936-a979-4938-a7c8-87d98a0487d7/.user_uploaded/media__1784976051058.jpg'

img = Image.open(src_path).convert('RGB')
w, h = img.size

# We will create an alpha mask where Uday (center subject) is fully opaque (255)
# and the warm indoor room background fades completely into #060B11 (RGB: 6, 11, 17)

# Create a high precision vignette mask focused on head and chest
mask = Image.new('L', (w, h), 0)
draw = ImageDraw.Draw(mask)

# Center of subject (head is top-center, chest is bottom-center)
cx, cy = w // 2, int(h * 0.52)
rx, ry = int(w * 0.44), int(h * 0.48)

for y in range(h):
    for x in range(w):
        dx = (x - cx) / rx
        dy = (y - cy) / ry
        dist = (dx*dx + dy*dy) ** 0.5
        
        # Keep head/face/chest 100% visible (dist < 0.55)
        # Fade background to 0 (dist > 0.88)
        if dist <= 0.50:
            v = 255
        elif dist >= 0.85:
            v = 0
        else:
            factor = (dist - 0.50) / 0.35
            v = int(255 * (1.0 - factor))
        mask.putpixel((x, y), v)

# Smooth mask heavily with Gaussian Blur
mask = mask.filter(ImageFilter.GaussianBlur(radius=25))

# Create pure #060B11 dark background image
dark_canvas = Image.new('RGB', (w, h), (6, 11, 17))

# Composite original image onto pure dark theme background
perfected_img = Image.composite(img, dark_canvas, mask)

# Save as PNG and JPG
os.makedirs('public', exist_ok=True)
os.makedirs('src/assets', exist_ok=True)

perfected_img.save('public/uday_profile_perfect.png', format='PNG')
perfected_img.save('public/uday_profile.jpg', quality=98)
perfected_img.save('src/assets/uday_profile_perfect.png', format='PNG')
perfected_img.save('src/assets/uday_profile.jpg', quality=98)

print("Perfected profile photo with 100% seamless dark theme background created!")
