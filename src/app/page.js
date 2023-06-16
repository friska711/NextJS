
import usePostService from "@/app/services/post"

const postService = usePostService()
async function getData() {
  const res = await postService.getPosts()

  return res
}

export default async function Home() {
  const data = await getData()
  console.log(data)
  return (
    <div style = {{ maxWidth: 1080, margin: 'auto'}}>
            <h1>Feed</h1>
            {
              data.map((post) => {
                <div key={post.id} style={
                  {
                    boxShadow: '0 1px 5px 0 #afafaf',
                    display: 'flex',
                    flexDirection: 'row'
                  }
                }>
                  <img src={post.user.picture}/>
                  <div style={{flex:1}}>
                    <span>{post.user.eamil}</span><br/>
                    {post.post}
                  </div>
                </div>
              })
            }
        </div>
  )
}
