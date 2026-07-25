from PIL import Image

def process_portrait():
    input_path = 'public/uday_profile.jpg'
    output_path = 'public/uday_profile_cutout.png'
    output_assets = 'src/assets/uday_profile_cutout.png'

    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    pix = img.load()

    # Precision sky and background region mask (detecting sky blue/grey background)
    for y in range(height):
        for x in range(width):
            r, g, b, a = pix[x, y]
            
            # If top region and sky blue / light clouds
            is_sky = False
            
            # Sky color characteristics: Blue > Red, G > R, or high brightness blue-grey
            if y < int(height * 0.42):
                if (b > r + 15 and b > 110) or (r > 140 and g > 155 and b > 170) or (r > 130 and g > 150 and b > 180):
                    # Exclude hair/face skin (skin has R > G > B)
                    if not (r > g and g > b and r > 110):
                        is_sky = True
            elif y < int(height * 0.55):
                # Side background hills
                if (x < width * 0.25 or x > width * 0.75):
                    if (b > r + 10 and b > 100) or (r > 150 and g > 165 and b > 175):
                        if not (r > g and g > b and r > 110):
                            is_sky = True

            if is_sky:
                pix[x, y] = (0, 0, 0, 0) # Transparent

    img.save(output_path, "PNG")
    img.save(output_assets, "PNG")
    print("Enhanced sky cutout saved!")

process_portrait()
