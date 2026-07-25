from PIL import Image
import os

base_path = 'C:/Users/user/.gemini/antigravity/brain/b89c9936-a979-4938-a7c8-87d98a0487d7/.user_uploaded/'

files = {
    'krishimitra_home.png': 'media__1784873785701.png',
    'krishimitra_login.png': 'media__1784873772015.png',
    'krishimitra_ai.png': 'media__1784873802949.png',
    'krishimitra_weather.png': 'media__1784873814373.png',
}

for dest_name, src_name in files.items():
    src_full = os.path.join(base_path, src_name)
    img = Image.open(src_full)
    width, height = img.size
    
    # Crop out browser tabs & address bar (top 88px) and Windows taskbar (bottom 48px)
    left = 0
    top = 88
    right = width
    bottom = height - 48
    
    cropped = img.crop((left, top, right, bottom))
    
    # Save cropped images
    cropped.save(f'public/projects/{dest_name}')
    cropped.save(f'src/assets/projects/{dest_name}')
    print(f"Cropped and saved {dest_name} (Size: {cropped.size})")

print("All screenshots cleanly cropped!")
