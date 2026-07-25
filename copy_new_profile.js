import fs from 'fs'

const src = 'C:/Users/user/.gemini/antigravity/brain/b89c9936-a979-4938-a7c8-87d98a0487d7/.user_uploaded/media__1784976051058.jpg'

const targets = [
  'public/uday_new_profile.jpg',
  'public/uday_profile.jpg',
  'src/assets/uday_new_profile.jpg',
  'src/assets/uday_profile.jpg',
]

targets.forEach((target) => {
  fs.copyFileSync(src, target)
  console.log(`Copied new profile photo to ${target}`)
})

console.log('All profile image files updated!')
