import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export type PostMetadata = {
  id: string,
  date: string,
  title: string
}

export type PostData = {
  metadata: PostMetadata,
  contentHtml: string
}

const postsDirectory = path.join(process.cwd(), 'posts')


export function getSortedPostsData() : PostMetadata[] {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData: PostMetadata[] = fileNames.map(fileName => {
        const id: string = fileName.replace(/\.md$/, '')
        
        const fullPath: string = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        let matterResult = matter(fileContents)
        

        return {
            id,
            date : (matterResult.data.date ?? "Missing Date"),
            title : (matterResult.data.title ?? "Missing Title")
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

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)

    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export async function getPostData(id: string) : Promise<PostData> {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    const matterResult = matter(fileContents)

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)

    const contentHtml = processedContent.toString()
        
    return {
        metadata: {
            id, 
            date: matterResult.data.date, 
            title: matterResult.data.title
        },
        contentHtml
    }
}
