import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type PostMetadata = {
  id: string,
  date: string,
  title: string
}

const postsDirectory = path.join(process.cwd(), 'posts')


export function getSortedPostsData() : PostMetadata[] {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData: PostMetadata[] = fileNames.map(fileName => {
        const id: string = fileName.replace(/\.md$/, '')
        
        const fullPath: string = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        let matterResult = matter(fileContents)
        

        // Using TypeScript, these constants have to be defined
        // before the return. 
        // This will be good to get clarification on since there
        // must be a better way to return values necessary
        // for the type
        const date = matterResult.data.date ?? "Missing Date"
        const title = matterResult.data.title ?? "Missing Title"
        return {
            id,
            date,
            title
        }
    })

    return allPostsData.sort(( { date: a }: PostMetadata, { date: b }: PostMetadata) => {
        if (a < b) {
            return 1
        } else if (a > b) {
            return -1
        } else {
            return 0
        }
    })
}
