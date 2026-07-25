from PIL import Image
import os

base_path = 'C:/Users/user/.gemini/antigravity/brain/b89c9936-a979-4938-a7c8-87d98a0487d7/.user_uploaded/'
src_name = 'media__1784875888759.png'
dest_name = 'krishimitra_disease.png'

src_full = os.path.join(base_path, src_name)
img = Image.open(src_full)
width, height = img.size

# Crop out browser tabs & address bar (top 88px) and Windows taskbar (bottom 48px)
left = 0
top = 88
right = width
bottom = height - 48

cropped = img.crop((left, top, right, bottom))

os.makedirs('public/projects', exist_ok=True)
os.makedirs('src/assets/projects', exist_ok=True)

cropped.save(f'public/projects/{dest_name}')
cropped.save(f'src/assets/projects/{dest_name}')
print(f"Cropped and saved {dest_name} (Size: {cropped.size}) successfully!")
