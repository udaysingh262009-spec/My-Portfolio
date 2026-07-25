from PIL import Image
import shutil

# Copy original file to public and assets
src_file = 'C:/Users/user/.gemini/antigravity/brain/b89c9936-a979-4938-a7c8-87d98a0487d7/.user_uploaded/media__1784867221282.jpg'
shutil.copy(src_file, 'public/uday_profile.jpg')
shutil.copy(src_file, 'src/assets/uday_profile.jpg')

# Process white background removal
img = Image.open(src_file).convert("RGBA")
width, height = img.size
pix = img.load()

for y in range(height):
    for x in range(width):
        r, g, b, a = pix[x, y]
        # Detect white / off-white background (high R, G, B with low saturation)
        if r > 210 and g > 210 and b > 210:
            pix[x, y] = (0, 0, 0, 0)
        elif r > 195 and g > 195 and b > 195 and abs(r - g) < 15 and abs(g - b) < 15:
            pix[x, y] = (0, 0, 0, 0)

img.save('public/uday_profile_cutout.png', "PNG")
img.save('src/assets/uday_profile_cutout.png', "PNG")
print("New portrait cutout processed successfully!")
