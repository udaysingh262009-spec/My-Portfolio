import os
import shutil

# Create directory
os.makedirs('public/projects', exist_ok=True)
os.makedirs('src/assets/projects', exist_ok=True)

base_path = 'C:/Users/user/.gemini/antigravity/brain/b89c9936-a979-4938-a7c8-87d98a0487d7/.user_uploaded/'

files = {
    'krishimitra_home.png': 'media__1784873785701.png',
    'krishimitra_login.png': 'media__1784873772015.png',
    'krishimitra_ai.png': 'media__1784873802949.png',
    'krishimitra_weather.png': 'media__1784873814373.png',
}

for dest_name, src_name in files.items():
    src_full = os.path.join(base_path, src_name)
    shutil.copy(src_full, f'public/projects/{dest_name}')
    shutil.copy(src_full, f'src/assets/projects/{dest_name}')
    print(f"Copied {dest_name} successfully!")

print("All KrishiMitra screenshots processed!")
