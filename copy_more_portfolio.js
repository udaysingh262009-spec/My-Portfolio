import fs from 'fs'

const base_path = 'C:/Users/user/.gemini/antigravity/brain/b89c9936-a979-4938-a7c8-87d98a0487d7/.user_uploaded/'

const files = {
  'portfolio_skills.png': 'media__1784977418913.png',
  'portfolio_contact.png': 'media__1784977459832.png',
}

for (const [dest_name, src_name] of Object.entries(files)) {
  const src_full = base_path + src_name
  fs.copyFileSync(src_full, `public/projects/${dest_name}`)
  fs.copyFileSync(src_full, `src/assets/projects/${dest_name}`)
  console.log(`Copied ${dest_name} successfully!`)
}

console.log('All additional portfolio screenshots copied!')
