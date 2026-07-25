import fs from 'fs'
import path from 'path'

const src = 'C:/Users/user/.gemini/antigravity/brain/b89c9936-a979-4938-a7c8-87d98a0487d7/.user_uploaded/media__1784875888759.png'
const dest1 = 'c:/Users/user/Documents/work/My-Portfolio/my-portfolio/public/projects/krishimitra_disease.png'
const dest2 = 'c:/Users/user/Documents/work/My-Portfolio/my-portfolio/src/assets/projects/krishimitra_disease.png'

fs.copyFileSync(src, dest1)
fs.copyFileSync(src, dest2)
console.log('Disease detection screenshot copied successfully!')
