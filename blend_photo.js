import fs from 'fs'

// Copy photo to public and assets
const src = 'C:/Users/user/.gemini/antigravity/brain/b89c9936-a979-4938-a7c8-87d98a0487d7/.user_uploaded/media__1784976051058.jpg'

fs.copyFileSync(src, 'public/uday_profile_raw.jpg')
fs.copyFileSync(src, 'src/assets/uday_profile_raw.jpg')

console.log('Copied raw photo!')
