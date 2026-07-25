from PIL import Image
import os

base_path = 'C:/Users/user/.gemini/antigravity/brain/b89c9936-a979-4938-a7c8-87d98a0487d7/.user_uploaded/'

files = {
    'quickhire_splash.png': 'media__1784878098450.png',
    'quickhire_role.png': 'media__1784878160017.png',
    'quickhire_register.png': 'media__1784878176233.png',
    'quickhire_dashboard.png': 'media__1784878191055.png',
}

os.makedirs('public/projects', exist_ok=True)
os.makedirs('src/assets/projects', exist_ok=True)

for dest_name, src_name in files.items():
    src_full = os.path.join(base_path, src_name)
    img = Image.open(src_full)
    width, height = img.size
    
    # Auto trim or crop the outer white/gray margins
    # The inner mobile frame is centered
    cropped = img
    
    cropped.save(f'public/projects/{dest_name}')
    cropped.save(f'src/assets/projects/{dest_name}')
    print(f"Saved QuickHire {dest_name} (Size: {cropped.size})")

print("All QuickHire screenshots processed!")
